import React from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import Footer from "../../Layouts/Footer/Footer";
import Header from "../../Layouts/Header/Header";
import Page from "../../Layouts/Page/Page";
import { useUserContext } from "../../Contexts/UserContext";

export default function Today() {
  const user = useUserContext().user;
  const [history, setHistory] = React.useState([]);
  const [date, setDate] = React.useState(new Date());

  function dayFormatter(locale, date) {
    const calendarDay = dayjs(date).format("DD/MM/YYYY");
    for (let day of history) {
      if (calendarDay === day.day) {
        if (day.habits.every((habit) => habit.done)) {
          return <div className="finished">{day.day.slice(0, 2)}</div>;
        }
        return <div className="unfinished">{day.day.slice(0, 2)}</div>;
      }
    }
    return calendarDay.slice(0, 2);
  }

  React.useEffect(() => {
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily";
    const authorization = { headers: { Authorization: `Bearer ${user.token}` } };
    const promise = axios.get(URL, authorization);
    promise.then((res) => setHistory(res.data));
  }, [user]);

  return (
    <Container>
      <Page>
        <Header />
        <div className="title">
          <h1>Histórico</h1>
          {/* <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2> */}
          <Calendar locale="pt-BR" calendarType="US" onChange={setDate} value={date} formatDay={dayFormatter} />
        </div>
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
      margin-bottom: 20px;
    }

    h2 {
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
    }
  }

  .react-calendar {
    border: none;
    font-family: inherit;
    overflow: hidden;
    border-radius: 10px;

    .finished,
    .unfinished {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      color: white;
    }

    .finished {
      background-color: var(--pastel-green);
    }

    .unfinished {
      background-color: var(--pastel-red);
    }

    .react-calendar__navigation {
      background-color: var(--light-blue-1);

      button {
        color: white;
      }

      button:enabled:hover,
      button:enabled:focus {
        background-color: var(--light-blue-1);
      }

      .react-calendar__navigation__label {
        font-family: inherit;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: white;
      }
    }

    .react-calendar__tile {
      height: 55px;
      color: inherit;
    }
    .react-calendar__month-view__days__day--weekend {
      color: red;
    }

    .react-calendar__month-view__days__day--neighboringMonth {
      color: #757575;
      background-color: var(--light-gray-1);
    }

    .react-calendar__tile--active {
      background-color: inherit;
    }

    .react-calendar__tile--now {
      background-color: var(--light-blue-1);
      color: white;
    }

    .react-calendar__tile--now.react-calendar__month-view__days__day--neighboringMonth {
      background-color: var(--light-blue-2);
      filter: brightness(90%);
    }
  }
`;
