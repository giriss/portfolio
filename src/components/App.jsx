import styled from "styled-components";
import Introduction from "./Introduction";
import Portfolio from "./Portfolio";

const TopPaddedContainer = styled('div')`
  @media (max-width: 900px) {
    padding: 15px 50px;
  }
  @media (min-width: 900px) {
    padding: 15px 150px;
  }
`;

function App() {
  return (
    <TopPaddedContainer text>
      <Introduction />
      <Portfolio />
    </TopPaddedContainer>
  );
}

export default App;
