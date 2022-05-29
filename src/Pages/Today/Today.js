import React from "react";
import styled from "styled-components";
import { useTodayHabitsContext } from "../../Contexts/TodayHabitsContext";
import Footer from "../../Layouts/Footer/Footer";
import Header from "../../Layouts/Header/Header";
import Page from "../../Layouts/Page/Page";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import TodayHabit from "../../Components/TodayHabit/TodayHabit";

export default function Today() {
  const TodayHabitsContext = useTodayHabitsContext();
  const todayHabits = TodayHabitsContext.todayHabits;
  const percentConcluded = TodayHabitsContext.percentConcluded;

  const now = dayjs();
  let today = now.locale("pt-br").format("dddd").split("-")[0];
  today = today[0].toUpperCase() + today.slice(1);

  React.useEffect(() => {
    TodayHabitsContext.updateTodayHabits();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container>
      <Page>
        <Header />
        <div className="title">
          <h1>
            {today}, {now.format("DD/MM")}
          </h1>
          {percentConcluded === 0 ? (
            <h2 className="zero-percent">Nenhum hábito concluído ainda</h2>
          ) : (
            <h2>{percentConcluded}% dos hábitos concluídos</h2>
          )}
        </div>
        {todayHabits.map((habit, index) => (
          <TodayHabit key={index} habit={habit} />
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

  .title {
    width: 100%;
    margin: 20px 0;

    h1 {
      font-weight: 400;
      font-size: 23px;
      line-height: 29px;
      color: var(--dark-blue);
    }

    h2 {
      color: var(--lime-green);
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
    }

    h2.zero-percent {
      color: var(--light-gray-4);
    }
  }
`;
