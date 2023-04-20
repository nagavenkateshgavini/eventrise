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
import Categories from "./components/Categories/categories";
import ProtectedRoute from "./common/ProtectedRoute/ProtectedRoute";

function App() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    userId: "",
  });

  return (
    <UserContext.Provider value={{ ...user, setUser }}>
      <Header />
      <div style={{ marginTop: "70px" }}>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create"
            element={
              <ProtectedRoute>
                <CreateEvent />
              </ProtectedRoute>
            }
          />
          <Route
            path="/eventconfirmation"
            element={
              <ProtectedRoute>
                <EventConfirm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/userRegistration"
            element={
              <ProtectedRoute>
                <UserRegistration />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/userProfile"
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }
          />
          <Route path="/browse" element={<BrowseEvents />} />
          <Route path="/categories/:categoryName" element={<Categories />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
