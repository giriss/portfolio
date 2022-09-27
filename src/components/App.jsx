import { Container } from "semantic-ui-react";
import styled from "styled-components";
import Introduction from "./Introduction";
import Portfolio from "./Portfolio";

const TopPaddedContainer = styled(Container)`
  padding-top: 15px;
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
