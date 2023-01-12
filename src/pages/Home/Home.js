import React from "react";
import "./Home.scss";
import DailyPlan from "./DailyPlan/DailyPlan";
import Logo from '../../images/logo.svg';
const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <DailyPlan />
      </div>
    </div>
  );
};

export default Home;
