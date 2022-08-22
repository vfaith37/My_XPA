/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "bulma/css/bulma.min.css";
import Footer from '../components/Footer'
function Home() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-centered">
            <section className="section">
              <div className="column is-50">
                <figure className="image is-128x128">
                  <img
                    src={require("./img/ebook.png")}
                    alt="ebook reader"
                  ></img>
                </figure>
              </div>
              <div className="column is-50">
                <figure className="image is-128x128">
                  <img src={require("./img/to-do.png")}></img>
                </figure>
              </div>
            </section>
            <section className="section">
              <div className="column is-50">
                <figure className="image is-128x128">
                  <img src={require("./img/reminders.png")}></img>
                </figure>
              </div>
              <div className="column is-50">
                <figure className="image is-128x128">
                  <img src={require("./img/personal.png")}></img>
                </figure>
              </div>
            </section>
          </div>
        </div>
      </section>
    <Footer/>
    </div>
  );
}

export default Home;
