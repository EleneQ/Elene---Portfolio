import { ThemeProvider } from "styled-components";
import CSSReset from "./styles/reset-styles";
import Navbar from "@/components/Navbar";
import theme from "@/styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />

      <Navbar />
    </ThemeProvider>
  );
};
export default App;
