import { ThemeProvider } from "styled-components";
import CSSReset from "./styles/reset-styles";
import Navbar from "@/components/Navbar";
import theme from "@/styles/theme";
import Home from "@/components/Home";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Navbar />
      <main>
        <Home />
      </main>
    </ThemeProvider>
  );
};
export default App;
