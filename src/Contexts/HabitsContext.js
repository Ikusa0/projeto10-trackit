import axios from "axios";
import React from "react";
import { useUserContext } from "./UserContext";

const HabitsContext = React.createContext();

export const useHabitsContext = () => React.useContext(HabitsContext);

export default function HabitsProvider({ children }) {
  const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
  const user = useUserContext().user;
  const [habits, setHabits] = React.useState([]);

  React.useEffect(() => {
    if (!user) return;

    const authorization = {
      headers: { Authorization: `Bearer ${user.token}` },
    };
    const promise = axios.get(URL, authorization);
    promise.then((res) => {
      setHabits(res.data);
    });
  }, [user]);

  return <HabitsContext.Provider value={{ habits, setHabits }}>{children}</HabitsContext.Provider>;
}
