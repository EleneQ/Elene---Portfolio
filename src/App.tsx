import { ThemeProvider } from "styled-components";
import CSSReset from "./styles/reset-styles";
import Navbar from "@/components/Navbar";
import theme from "@/styles/theme";
import Home from "@/components/Home";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { AnchorLinkProvider } from "./context/anchorLink";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AnchorLinkProvider>
        <CSSReset />
        <Navbar />
        <main>
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </AnchorLinkProvider>
    </ThemeProvider>
  );
};
export default App;
