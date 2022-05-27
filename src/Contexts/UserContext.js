import React from "react";

const UserContext = React.createContext();

export const useUserContext = () => React.useContext(UserContext);

export default function UserProvider({ children }) {
  const [user, setUser] = React.useState(getLocalUser());
  React.useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}

function getLocalUser() {
  const localUser = JSON.parse(localStorage.getItem("user"));
  return localUser;
}
