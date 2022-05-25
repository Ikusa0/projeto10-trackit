import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import FormButton from "../../Components/FormButton/FormButton";
import { Input } from "../../Components/Input/Input";
import { Logo } from "../../Components/Logo/Logo";
import { Page } from "../../Layouts/Page/Page";

export default function SingUp() {
  const navigate = useNavigate();
  const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [image, setImage] = React.useState("");

  const [disabled, setDisabled] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);

    const data = {
      email,
      name,
      image,
      password,
    };

    const promise = axios.post(URL, data);

    promise.then(() => {
      alert("Cadastro concluído com Sucesso!");
      navigate("/");
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
        <Form autoComplete="on" onSubmit={handleSubmit}>
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
          <Input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            placeholder="nome"
            type="text"
            required
            disabled={disabled}
            autoComplete="name"
          />
          <Input
            onChange={(e) => {
              setImage(e.target.value);
            }}
            value={image}
            placeholder="foto"
            type="text"
            required
            disabled={disabled}
            autoComplete="image"
          />
          <FormButton disabled={disabled}>Cadastrar</FormButton>
        </Form>
        <Link to="/">Já tem uma conta? Faça login!</Link>
      </Page>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 35px;
  align-items: center;

  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 25px;
`;
