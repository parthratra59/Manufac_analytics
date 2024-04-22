import "./App.css";
import Flavanoids_table from "./components/flavanoids/Flavanoids_table";
// import Gamma_table from "./components/gamma/Gamma_table"
import { MantineProvider } from "@mantine/core";
import Gamma_table from "./components/gamma/Gamma_table";

const App = () => {
  return (
    <>
      <MantineProvider>
        <Flavanoids_table />
        <Gamma_table/>
      </MantineProvider>
    </>
  );
};

export default App;
