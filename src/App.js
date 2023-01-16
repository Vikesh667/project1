
import React from "react";
import Navbar from "./Components/Navbar";
import { Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Registeration from "./Components/Registeration"
import Profile  from "./Components/Profile";
import Home from "./Components/Home";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>WELCOME TO  </p>
        <h1>FunctionUp  About Page</h1>
      </section>
    </>
  );
};



const App = () => {
  return (
    <Switch>
      <Route exact path ="/">
        <Home />
      </Route>
      <Route path="/About">
        <About />
      </Route>

      <Route path="/Login">
        <Login />
      </Route>

      <Route path="/Registeration">
        <Registeration />
      </Route>
      <Route path="/">
       <Profile/>
      </Route>
    </Switch>
  );
};

export default App;

