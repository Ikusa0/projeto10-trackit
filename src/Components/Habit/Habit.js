import React from "react";
import styled from "styled-components";
import WeekCheckboxContainer from "../WeekCheckboxContainer/WeekCheckboxContainer";
import axios from "axios";
import { useHabitsContext } from "../../Contexts/HabitsContext";
import { BsTrash } from "react-icons/bs";
import { useUserContext } from "../../Contexts/UserContext";

export default function Habit({ habit }) {
  const HabitsContext = useHabitsContext();
  const user = useUserContext().user;
  const [habits, setHabits] = [HabitsContext.habits, HabitsContext.setHabits];
  const [weekdays, setWeekdays] = React.useState([
    {
      text: "D",
      day: 0,
      isSelected: false,
    },
    {
      text: "S",
      day: 1,
      isSelected: false,
    },
    {
      text: "T",
      day: 2,
      isSelected: false,
    },
    {
      text: "Q",
      day: 3,
      isSelected: false,
    },
    {
      text: "Q",
      day: 4,
      isSelected: false,
    },
    {
      text: "S",
      day: 5,
      isSelected: false,
    },
    {
      text: "S",
      day: 6,
      isSelected: false,
    },
  ]);

  React.useEffect(() => {
    habit.days.forEach((day) => (weekdays[day].isSelected = true));
    setWeekdays([...weekdays]);
  }, [habit]);

  function deleteHabit() {
    if (!window.confirm(`Deseja realmente deletar o hábito "${habit.name}"?`)) return;

    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}`;
    const authorization = { headers: { Authorization: `Bearer ${user.token}` } };

    const promise = axios.delete(URL, authorization);
    promise.then(() => {
      habits.filter((habit_callback) => habit_callback.id !== habit.id);
      setHabits([...habits]);
    });
    promise.catch((err) => {
      alert(err.response.data.message);
    });
  }

  return (
    <Container>
      <BsTrash onClick={deleteHabit} className="icon" />
      <h1>{habit.name}</h1>
      <WeekCheckboxContainer weekdays={weekdays} disabled />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
  margin-bottom: 30px;
  background-color: white;
  border-radius: 5px;
  gap: 8px;

  h1 {
    width: 90%;
    word-break: break-word;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: var(--dark-gray-1);
  }

  .icon {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 16px;
    color: var(--dark-gray-1);
    cursor: pointer;
  }
`;
