import React from "react";
import home from "./Home.module.css";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className={home.container}>
        <h1>About us</h1>
        <div className={home.heroSection}>
          <div className={home.heroImage}>
            <figure>
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                alt="hero-img"
              />
              <figcaption>
                <p>Age: 25</p>
                <p>Location: India</p>
              </figcaption>
            </figure>
          </div>
          <div className={home.heroText}>
            <h2>Vikesh Kumar</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className={home.skills}>
              <div className={home.hobbyContent}>
                <h6>What is your skills?</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className={home.hobbyContent}>
                <h6>What is your Hobby?</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className={home.hobbyContent}>
                <h6>What is your skills?</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
