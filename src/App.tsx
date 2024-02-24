import { ThemeProvider } from "styled-components";
import CSSReset from "./styles/reset-styles";
import Navbar from "@/components/Navbar";
import theme from "@/styles/theme";
import Hero from "@/components/Hero";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Navbar />
      <Hero />
    </ThemeProvider>
  );
};
export default App;
