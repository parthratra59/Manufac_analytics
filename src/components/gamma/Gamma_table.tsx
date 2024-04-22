import { Table } from "@mantine/core";
import classes from "./Gamma.module.css";
import cx from "clsx";
import WineData from "../../data/Wine-data";
import mean from "../../utils/Mean";
import median from "../../utils/Median";
import mode from "../../utils/Mode";


const Gamma_table = () => {

  const getClassStats = (alcoholClass: number) => {
    const classData = WineData.filter((wine) => wine.Alcohol === alcoholClass);
    const gamma = classData.map((wine) => (wine.Ash as number* wine.Hue as number) / wine.Magnesium as number);

    return {
      mean: mean(gamma),
      median: median(gamma),
      mode: mode(gamma),
    };
  };
  const rows = [
    {
      name: "Gamma Mean",
      class1: getClassStats(1).mean.toFixed(3),
      class2: getClassStats(2).mean.toFixed(3),
      class3: getClassStats(3).mean.toFixed(3),
    },
    {
      name: "Gamma Median",
      class1: getClassStats(1).median.toFixed(3),
      class2: getClassStats(2).median.toFixed(3),
      class3: getClassStats(3).median.toFixed(3),
    },
    {
      name: "Gamma Mode",
      class1: getClassStats(1)
        .mode
        // 
        .filter(mode => mode.count > 1) // Filter modes with count greater than because of so much data were there so it will be difficult to show all the data
        .map((mode) => `Mode: ${mode.value}\nCount: ${mode.count}`)
        .join("\n-----\n") || "Multiple modes with count 1",
      class2: getClassStats(2)
        .mode
        .filter(mode => mode.count > 1)
        .map((mode) => `Mode: ${mode.value}\nCount: ${mode.count}`)
        .join("\n-----\n") || "Multiple modes with count 1",
      class3: getClassStats(3)
        .mode
        .filter(mode => mode.count > 1)
        .map((mode) => `Mode: ${mode.value}\nCount: ${mode.count}`)
        .join("\n-----\n") || "Multiple modes with count 1",
    },
  ];
  return (
    <>
    <div className="flex flex-col items-center justify-center mt-12 m-auto w-11/12 max-w-[1080px] ">
      <h1 className="mb-4 font-bold">GAMMA TABLE</h1>
      <Table miw={1080} className={classes.table}>
        <Table.Thead className={cx(classes.header)}>
          <Table.Tr>
            <Table.Th>Measure</Table.Th>
            <Table.Th>Class 1</Table.Th>
            <Table.Th>Class 2</Table.Th>
            <Table.Th>Class 3</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {rows.map((row, index) => (
            <Table.Tr key={index}>
              <Table.Td>{row.name}</Table.Td>
              <Table.Td>{row.class1}</Table.Td>
              <Table.Td>{row.class2}</Table.Td>
              <Table.Td>{row.class3}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
      </div>

    </>
  )
}

export default Gamma_table