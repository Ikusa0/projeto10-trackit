import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <Link to="/habits">Hábitos</Link>
      <Link to="/">Histórico</Link>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: 0;
  background-color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  box-sizing: border-box;

  a {
    width: 100px;
    padding: 10px 0;
    box-sizing: border-box;
    border: none;

    font-family: inherit;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    text-decoration: none;

    color: var(--light-blue-1);

    background-color: white;
    border-radius: 8px;
  }

  a:hover {
    background-color: var(--light-blue-1);
    color: white;
  }
`;
