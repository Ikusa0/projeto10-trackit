import React from "react";
import { useLocation } from "react-router-dom";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import styled from "styled-components";
import Footer from "../../Layouts/Footer/Footer";
import Header from "../../Layouts/Header/Header";
import Page from "../../Layouts/Page/Page";

export default function Day() {
  const location = useLocation();
  const data = location.state;
  const habits = data.habits;
  const calendarDay = dayjs(data.calendarDay);
  let weekday = calendarDay.locale("pt-br").format("dddd").split("-")[0];
  weekday = weekday[0].toUpperCase() + weekday.slice(1);
  const date = calendarDay.format("DD/MM/YYYY");

  return (
    <Container>
      <Page>
        <Header />
        <div className="title">
          <h1>
            {weekday}, {date}
          </h1>
        </div>
        {habits.map((habit, index) => (
          <Habit key={index}>
            <div className={habit.done ? "finished" : "unfinished"}></div>
            <span>{habit.name}</span>
          </Habit>
        ))}
        <Footer />
      </Page>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  padding: 70px 15px;
  align-items: center;
  background-color: var(--light-gray-3);

  h1 {
    margin: 20px 0;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: var(--dark-blue);
  }
`;

const Habit = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 15px;
  padding-left: 35px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: white;
  position: relative;

  span {
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    word-break: break-word;
  }

  .finished,
  .unfinished {
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 100%;
    border-radius: 5px 0 0 5px;
  }

  .finished {
    background-color: var(--pastel-green);
  }

  .unfinished {
    background-color: var(--pastel-red);
  }
`;
