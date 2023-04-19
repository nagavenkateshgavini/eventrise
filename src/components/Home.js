import React from 'react'
import Carousel from "../common/carousel/carousel";
import CreateEventSec from "./createEvents/createEventPage";
import Footer from "../common/Footer/footer";
import Header from "../common/header/header";

export default function Home() {
  return (
    <div className="container-box">
      <div style={{}}>
        <Header />
        <Carousel></Carousel>
        <CreateEventSec />
        {/* <UserProfile /> */}
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  )
}
