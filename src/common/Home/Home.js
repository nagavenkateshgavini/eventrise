import React from "react";
import Carousel from "../carousel/carousel";
import CreateEventSec from "../../components/Events/createEventPage";
import Footer from "../Footer/footer";

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
