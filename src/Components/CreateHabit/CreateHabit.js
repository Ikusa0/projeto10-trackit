import React from "react";
import styled from "styled-components";
import WeekCheckboxContainer from "../WeekCheckboxContainer/WeekCheckboxContainer";
import Input from "../Input/Input";
import Button from "../Button/Button";
import axios from "axios";
import { useUserContext } from "../../Contexts/UserContext";

export default function CreateHabit({ setShow, show }) {
  const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
  const user = useUserContext().user;

  const [disabled, setDisabled] = React.useState(false);
  const [weekdays, setWeekdays] = React.useState([
    {
      text: "D",
      day: 0,
      onClick: (index) => {
        changeWeekday(index);
      },
      isSelected: false,
    },
    {
      text: "S",
      day: 1,
      onClick: (index) => {
        changeWeekday(index);
      },
      isSelected: false,
    },
    {
      text: "T",
      day: 2,
      onClick: (index) => {
        changeWeekday(index);
      },
      isSelected: false,
    },
    {
      text: "Q",
      day: 3,
      onClick: (index) => {
        changeWeekday(index);
      },
      isSelected: false,
    },
    {
      text: "Q",
      day: 4,
      onClick: (index) => {
        changeWeekday(index);
      },
      isSelected: false,
    },
    {
      text: "S",
      day: 5,
      onClick: (index) => {
        changeWeekday(index);
      },
      isSelected: false,
    },
    {
      text: "S",
      day: 6,
      onClick: (index) => {
        changeWeekday(index);
      },
      isSelected: false,
    },
  ]);
  const [habit, setHabit] = React.useState("");

  function changeWeekday(index) {
    weekdays[index].isSelected = !weekdays[index].isSelected;
    setWeekdays([...weekdays]);
  }

  function resetInputs() {
    weekdays.forEach((weekday) => (weekday.isSelected = false));
    setWeekdays([...weekdays]);
    setHabit("");
    setShow(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const habitDays = weekdays.filter((weekday) => weekday.isSelected).map((weekday) => weekday.day);
    if (habitDays.length === 0) {
      alert("Escolha ao menos 1 dia para executar o hábito!");
      return;
    }

    setDisabled(true);

    const data = {
      name: habit,
      days: habitDays,
    };
    const authorization = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const promise = axios.post(URL, data, authorization);
    promise.then(() => {
      setDisabled(false);
      resetInputs();
    });
    promise.catch((err) => {
      alert(err.response.data.message);
      setDisabled(false);
    });
  }

  return (
    <Container show={show} onSubmit={(e) => handleSubmit(e)}>
      <Input onChange={(e) => setHabit(e.target.value)} type="text" value={habit} required></Input>
      <WeekCheckboxContainer weekdays={weekdays} disabled={disabled} />
      <ButtonContainer>
        <Button
          onClick={() => {
            setShow(false);
          }}
          type="button"
          disabled={disabled}
          small
          invert
        >
          Cancelar
        </Button>
        <Button type="submit" disabled={disabled} small>
          Salvar
        </Button>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.form`
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
  margin-bottom: 30px;
  background-color: white;
  border-radius: 5px;
  gap: 8px;
`;

const ButtonContainer = styled.div`
  align-self: flex-end;
  width: 200px;
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;
