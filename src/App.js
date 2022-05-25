import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SingUp from "./Pages/SingUp/SingUp";
import Habits from "./Pages/Habits/Habits";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sing_up" element={<SingUp />} />
        <Route path="/habits" element={<Habits />} />
      </Routes>
    </BrowserRouter>
  );
}
