import React from "react";
import './DailyPlan.scss'

const DailyPlan = () => {
  return (
    <div className="daily-plan">
      <div className="title">
        <h3>Simple Daily Plan</h3>
        <h4>for build muscle</h4>
      </div>
      <div className="content">
        <div className="row">
          <div className="order">01</div>
          <span className="text">Eat healthy</span>
        </div>
        <div className="row">
          <span className="text">Train</span>
          <div className="order">02</div>
        </div>
        <div className="row">
          <div className="order">03</div>
          <span className="text">Supplements</span>
        </div>
        <div className="row">
          <span className="text">Sleep</span>
          <div className="order">04</div>
        </div>
      </div>
      <div className="helper-text">
        If you can't make your plan, we will help you
      </div>
      <button className="join">Join our team</button>
    </div>
  );
};

export default DailyPlan;
