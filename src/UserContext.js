import { createContext } from "react";

const UserContext = createContext({
  username: "",
  email: "",
  userId: "",
  isAuthenticated: false,
  setUser: () => {},
});

export default UserContext;
