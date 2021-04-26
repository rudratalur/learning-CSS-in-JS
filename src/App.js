import "./styles.css";
import { Button } from "./components/Button";
import { LargeButton } from "./components/LargeButton";
import { SuccessButton } from "./components/SuccessButton";
import { ThemeProvider } from "styled-components";

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <h2>Learning Styled components</h2>
        <Button primary>Im primary</Button>
        <Button>Iam Link</Button>
        <SuccessButton>Sucess</SuccessButton>
        <LargeButton>I am LARGE!! </LargeButton>
      </ThemeProvider>
    </div>
  );
}

const theme = {
  pd4: "4px",
  pd8: "8px",
  fontSm: "9px",
  fontMd: "25px",
  fontLg: "32px",
  primaryColor: "#28a745",
  textColor: "white"
};
