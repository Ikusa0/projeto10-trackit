import React from "react";
import styled from "styled-components";
import Footer from "../../Layouts/Footer/Footer";
import Header from "../../Layouts/Header/Header";
import Page from "../../Layouts/Page/Page";

export default function Today() {
  return (
    <Container>
      <Page>
        <Header />
        <Footer />
      </Page>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  padding: 70px 35px;
  align-items: center;
  background-color: var(--light-gray-3);
`;
