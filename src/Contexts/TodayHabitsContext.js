import axios from "axios";
import React from "react";
import { useUserContext } from "./UserContext";

const TodayHabitsContext = React.createContext();

export const useTodayHabitsContext = () => React.useContext(TodayHabitsContext);

export default function TodayHabitsProvider({ children }) {
  const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
  const user = useUserContext().user;
  const [todayHabits, setTodayHabits] = React.useState([]);
  const [concluded, setConcluded] = React.useState(0);
  const percentConcluded = todayHabits.length > 0 ? Math.round((concluded / todayHabits.length) * 100) : 0;

  const updateTodayHabits = React.useCallback(() => {
    if (!user) return;
    setTodayHabits([]);

    const authorization = {
      headers: { Authorization: `Bearer ${user.token}` },
    };
    const promise = axios.get(URL, authorization);
    promise.then((res) => {
      setTodayHabits(res.data);
      setConcluded(res.data.filter((habit) => habit.done).length);
    });
    promise.catch((err) => {
      console.log(err.response.data.message);
    });
  }, [user]);

  React.useEffect(() => {
    updateTodayHabits();
  }, [updateTodayHabits]);

  return (
    <TodayHabitsContext.Provider value={{ todayHabits, updateTodayHabits, percentConcluded, concluded, setConcluded }}>
      {children}
    </TodayHabitsContext.Provider>
  );
}
