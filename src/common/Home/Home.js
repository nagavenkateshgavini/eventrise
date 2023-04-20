import React from "react";
import Carousel from "../carousel/carousel";
import UserProfile from "../../components/userProfile/userProfile";
import CreateEventSec from "../../components/Events/createEventPage";
import Footer from "../Footer/footer";
import Header from "../header/header";
import Login from "../../components/Login/login";

export default function Home() {
  return (
    <div className="container-box">
      <div style={{}}>
        <Carousel></Carousel>
        <CreateEventSec />
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
