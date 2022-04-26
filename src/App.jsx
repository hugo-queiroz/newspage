import styled from "styled-components";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import CardContent from "./components/CardContent";
import tokens from "./assets/tokens/tokens.json";


const App = () => {
  const App = styled.div`
    font-family: ${tokens.font.family.highlight.value}, sans-serif;
  `;
  return (
    <App>
      <Header/>
      <MainContent/>
    </App>
  );
};

export default App;
