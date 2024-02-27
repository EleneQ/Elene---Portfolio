import { ThemeProvider } from "styled-components";
import CSSReset from "./styles/reset-styles";
import Navbar from "@/components/Navbar";
import theme from "@/styles/theme";
import Home from "@/components/Home";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
};
export default App;
