import styled from "styled-components";
import Header from "../../Layouts/Header/Header";
import { Page } from "../../Layouts/Page/Page";

export default function Habits() {
  return (
    <Container>
      <Page>
        <Header />
        
      </Page>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 35px;
  align-items: center;
`;
