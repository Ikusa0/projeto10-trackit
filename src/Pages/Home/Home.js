import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Form from "../../Components/Form/Form";
import Logo from "../../Components/Logo/Logo";
import Page from "../../Layouts/Page/Page";
import { useUserContext } from "../../Contexts/UserContext";

export default function Home() {
  const navigate = useNavigate();
  const UserContext = useUserContext();

  React.useEffect(() => {
    const user = UserContext.user;
    if (user) {
      navigate("/today");
    }
  }, [UserContext, navigate]);

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
      UserContext.setUser(res.data);
      navigate("/today");
    });
    promise.catch((err) => {
      alert(err.response.data.message);
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
    ],
    button: {
      text: "Entrar",
      disabled,
    },
  };

  return (
    <Container>
      <Page>
        <Logo />
        <Form data={formData} />
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
