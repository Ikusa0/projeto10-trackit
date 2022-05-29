import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SingUp from "./Pages/SingUp/SingUp";
import Habits from "./Pages/Habits/Habits";
import Today from "./Pages/Today/Today";
import UserProvider from "./Contexts/UserContext";
import HabitsProvider from "./Contexts/HabitsContext";
import TodayHabitsProvider from "./Contexts/TodayHabitsContext";

export default function App() {
  return (
    <UserProvider>
      <HabitsProvider>
        <TodayHabitsProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sing_up" element={<SingUp />} />
              <Route path="/habits" element={<Habits />} />
              <Route path="/today" element={<Today />} />
            </Routes>
          </BrowserRouter>
        </TodayHabitsProvider>
      </HabitsProvider>
    </UserProvider>
  );
}
