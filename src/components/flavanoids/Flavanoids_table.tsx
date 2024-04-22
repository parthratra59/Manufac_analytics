import { Table } from "@mantine/core";
import classes from "./Flavanoids.module.css";
import cx from "clsx";
import WineData from "../../data/Wine-data";
import mean from "../../utils/Mean";
import median from "../../utils/Median";
import mode from "../../utils/Mode";

const FlavanoidsTable: React.FC = () => {
  const getClassStats = (alcoholClass: number) => {
    const classData = WineData.filter((wine) => wine.Alcohol === alcoholClass);
    const flavanoids = classData.map((wine) =>
      parseFloat(wine.Flavanoids as string)
    ); // Parse Flavanoids as a number
    return {
      mean: mean(flavanoids),
      median: median(flavanoids),
      mode: mode(flavanoids),
    };
  };

  //   for checking the data of mean

  //   useEffect(() => {
  //     console.log("Mean of Alcohol Class 1:", getClassStats(1).mean);
  //     console.log("Mean of Alcohol Class 2:", getClassStats(2).mean);
  //     console.log("Mean of Alcohol Class 3:", getClassStats(3).mean);
  //   }, []);

  // Create rows for table

  const rows = [
    {
      name: "Flavanoids Mean",
      class1: getClassStats(1).mean.toFixed(3),
      class2: getClassStats(2).mean.toFixed(3),
      class3: getClassStats(3).mean.toFixed(3),
    },
    {
      name: "Flavanoids Median",
      class1: getClassStats(1).median,
      class2: getClassStats(2).median,
      class3: getClassStats(3).median.toFixed(3),
    },
    {
      name: "Flavanoids Mode",
      class1: getClassStats(1)
        .mode.map((mode) => `Mode: ${mode.value}\nCount: ${mode.count}`)
        .join("\n-----\n"), // Add a separator between mode value and count
      class2: getClassStats(2)
        .mode.map((mode) => `Mode: ${mode.value}\nCount: ${mode.count}`)
        .join("\n-----\n"),
      class3: getClassStats(3)
        .mode.map((mode) => `Mode: ${mode.value}\nCount: ${mode.count}`)
        .join("\n-----\n"),
    },
  ];

  return (
    <>
    <div className="flex flex-col items-center justify-center mt-12 m-auto w-11/12 max-w-[1080px] ">
      <h1 className="mb-4 font-bold">FLAVANOIDS TABLE</h1>
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
  );
};

export default FlavanoidsTable;
