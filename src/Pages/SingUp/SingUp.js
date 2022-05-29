import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Form from "../../Components/Form/Form";
import Logo from "../../Components/Logo/Logo";
import Page from "../../Layouts/Page/Page";
import { BsFileEarmarkArrowUpFill } from "react-icons/bs";

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
      err.response.status === 422 ? alert("A foto precisa ser um link!") : alert(err.response.data.message);
      setDisabled(false);
    });
  }

  const formData = {
    form: {
      onSubmit: (e) => {
        handleSubmit(e);
      },
    },
    inputs: [
      {
        onChange: (e) => {
          setEmail(e.target.value);
        },
        value: email,
        placeholder: "email",
        type: "email",
        required: true,
        disabled,
        autoComplete: "email",
      },
      {
        onChange: (e) => {
          setPassword(e.target.value);
        },
        value: password,
        placeholder: "senha",
        type: "password",
        required: true,
        disabled,
        autoComplete: "password",
      },
      {
        onChange: (e) => {
          setName(e.target.value);
        },
        value: name,
        placeholder: "nome",
        type: "text",
        required: true,
        disabled,
        autoComplete: "name",
      },
      {
        onChange: (e) => {
          setImage(e.target.value);
        },
        value: image,
        placeholder: "foto",
        type: "text",
        required: true,
        disabled,
        autoComplete: "image",
      },
    ],
    button: {
      text: "Cadastrar",
      disabled,
    },
  };

  return (
    <Container>
      <Page>
        <Logo />
        <Form data={formData} />
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
  box-sizing: border-box;

  text-align: center;
`;
