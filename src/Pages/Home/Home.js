import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import FormButton from "../../Components/FormButton/FormButton";
import { Input } from "../../Components/Input/Input";
import { Logo } from "../../Components/Logo/Logo";
import { Page } from "../../Layouts/Page/Page";

export default function Home() {
  const navigate = useNavigate();
  const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [disabled, setDisabled] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);

    const data = {
      email,
      password,
    };

    const promise = axios.post(URL, data);
    promise.then((res) => {
      navigate("/today", res.data);
    });

    promise.catch((err) => {
      alert(err.response.data.message);
      setDisabled(false);
    });
  }

  return (
    <Container>
      <Page>
        <Logo />
        <Form onSubmit={handleSubmit}>
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            placeholder="email"
            type="email"
            required
            disabled={disabled}
            autoComplete="email"
          />
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            placeholder="senha"
            type="password"
            required
            disabled={disabled}
            autoComplete="password"
          />
          <FormButton disabled={disabled}>Entrar</FormButton>
        </Form>
        <Link to="/sing_up">Não tem uma conta? Cadastre-se!</Link>
      </Page>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 35px;
  align-items: center;
  box-sizing: border-box;

  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 25px;
`;
