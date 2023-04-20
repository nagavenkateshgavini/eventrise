import { createContext } from "react";

const UserContext = createContext({
  username: "",
  email: "",
  userId: "",
  setUser: () => {},
});

export default UserContext;
