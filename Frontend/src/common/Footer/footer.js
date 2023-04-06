import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4" >
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 mx-auto mt-3 brand">
            <h1 className="text-left">
              <a className="navbar-brand" href="#">
                Event <span className="text-warning">Rise</span>
              </a>
            </h1>
            <p className="text-left">
              EventRise is an American event management and ticketing website.
              The service allows users to browse, create, and promote local
              events. The service charges a fee to event organizers in exchange
              for online ticketing services, unless the event is free.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 mx-auto mt-3 products">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Products
            </h5>
            <p>Create Tickets</p>
            <p>Attend Events</p>
            <p>Share Tickets</p>
            <p>Browse Events</p>
          </div>

          <div className="col-md-2 col-lg-2 mx-auto mt-3 categories">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Categories
            </h5>
            <p>Sports</p>
            <p>Technology</p>
            <p>Music Concerts</p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <small> Event Rise Copyright &copy; 2023 All Rights Reserved</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
