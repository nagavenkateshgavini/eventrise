import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
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
import NotFound from "./common/pageNotFound/pageNotFound";
import EventDetails from "./components/EventDetail/EventPage";
import Registration from "./components/EventRegister/Registration";
import Payment from "./components/CardPayment/Payment";
import PaymentEntry from "./components/PaymentEntry/PaymentEntry";
import Completion from "./components/PaymentSuccessful/Completion";
import UserDetailsWrapper from "./components/userDetailsWrapper/userDetailsWrapper";

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
        <UserDetailsWrapper>
          <Routes>
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
              path="/eventRegister"
              element={
                <ProtectedRoute>
                  <Registration />
                </ProtectedRoute>
              }
            />
            <Route
              path="/payment/:totalAmount"
              element={
                <ProtectedRoute>
                  <PaymentEntry />
                </ProtectedRoute>
              }
            />
            <Route
              path="/payment/cards/:amount"
              element={
                <ProtectedRoute>
                  <Payment />
                </ProtectedRoute>
              }
            />
            <Route
              path="/completion"
              element={
                <ProtectedRoute>
                  <Completion />
                </ProtectedRoute>
              }
            />
            <Route path="/userRegistration" element={<UserRegistration />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/userProfile"
              element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<BrowseEvents />} />
            <Route path="/categories/:categoryName" element={<Categories />} />
            <Route path="/event/:eventId" element={<EventDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserDetailsWrapper>
      </div>
    </UserContext.Provider>
  );
}

export default App;
