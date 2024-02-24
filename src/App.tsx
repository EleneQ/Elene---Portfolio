import { ThemeProvider } from "styled-components";
import CSSReset from "./styles/reset-styles";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { SelectedPage } from "@/types";
import theme from "@/styles/theme";

const App = () => {
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);

  return (
    <ThemeProvider theme={theme}>
      <CSSReset />

      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </ThemeProvider>
  );
};
export default App;
