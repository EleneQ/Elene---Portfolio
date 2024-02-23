import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global-styles";

const App = () => {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyles />

    </ThemeProvider>
  );
};
export default App;
