import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./common/Home/Home";
import CreateEvent from "./components/Events/eventForm";
import UserRegistration from "./components/UserRegistration/userRegistration";
import Login from "./components/Login/login";
import UserProfile from "./components/userProfile/userProfile";
import UserContext from "./UserContext";
import Header from "./common/header/header";
import BrowseEvents from "./components/Browse Events/browseEvents";
import EventConfirm from "./components/Events/eventCofirmation";
import Admin from "./components/adminPage/admin";

function App() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    userId: "",
  });

  return (
    <UserContext.Provider value={{ ...user, setUser }}>
      <Header />
      {/* <span class="ripple-gradient"/> */}
      {/* <div className="ripple-gradient"></div> */}
      <div style={{ marginTop: "70px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateEvent />} />
          <Route path="/eventconfirmation" element={<EventConfirm />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/userRegistration" element={<UserRegistration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/browse" element={<BrowseEvents />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
