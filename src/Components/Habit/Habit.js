import React from "react";
import styled from "styled-components";
import WeekCheckboxContainer from "../WeekCheckboxContainer/WeekCheckboxContainer";
import axios from "axios";
import { useHabitsContext } from "../../Contexts/HabitsContext";
import { BsTrash } from "react-icons/bs";
import { useUserContext } from "../../Contexts/UserContext";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export default function Habit({ habit }) {
  const HabitsContext = useHabitsContext();
  const user = useUserContext().user;
  const [habits, setHabits] = [HabitsContext.habits, HabitsContext.setHabits];
  const weekdays = generateWeekdays(habit.days);

  function deleteHabit() {
    if (!window.confirm(`Deseja realmente deletar o hábito "${habit.name}"?`)) return;

    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}`;
    const authorization = { headers: { Authorization: `Bearer ${user.token}` } };

    const promise = axios.delete(URL, authorization);
    promise.then(() => {
      setHabits(habits.filter((habit_callback) => habit_callback.id !== habit.id));
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

function generateWeekdays(daysActive) {
  const weekday = require("dayjs/plugin/weekday");
  dayjs.extend(weekday);

  const weekdays = [];
  for (let i = 0; i < 7; i++) {
    weekdays.push({
      text: dayjs().weekday(i).locale("pt-br").format("dddd")[0].toUpperCase(),
      day: 0,
      isSelected: false,
    });
  }

  daysActive.forEach((day) => (weekdays[day].isSelected = true));

  return weekdays;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
  margin-bottom: 10px;
  background-color: white;
  border-radius: 5px;
  gap: 8px;

  h1 {
    width: 90%;
    word-break: break-word;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
  }

  .icon {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 16px;
    cursor: pointer;
  }
`;
