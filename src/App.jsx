import "./App.css";
import Home from "./components/Home";
import { EditDocx } from "./components/editDocx/EditDocx";
import { EditDocxControl } from "./components/editDocx/EditDocxControl";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  let day = {
    // "--halo": "rgb(160, 241, 158)",
    "--halo": "red",
    "--hill1": "rgb(160, 241, 158)",
    "--hill2": "rgb(85, 223, 85)",
    "--hill3": " rgb(106, 195, 106)",
    "--hill4": " rgb(69, 193, 69)",
    "--txt": "#000",
  };
  let night = {
    "--hill1": "rgba(159, 241, 158, 0.336)",
    "--hill2": "rgb(47, 102, 47)",
    "--hill3": "rgb(38, 68, 38)",
    "--hill4": "rgb(30, 86, 30)",
    "--txt": "#fff",
  };
  let [time, setTime] = useState("day");
  let [col, setCol] = useState(day);
  useEffect(() => {
    let obe = new IntersectionObserver(
      (current) => {
        console.log("current");
      },
      { threshold: 1 }
    );

    // obe.observe();
  }, []);
  useEffect(() => {
    if (time == "day") {
      setCol(day);
    } else if (time == "night") {
      setCol(night);
    }
  }, [time]);

  return (
    <>
      <div style={col}>
        <Navbar setTime={setTime} time={time} />
        <div
          className={`background ${
            time == "day" ? "background__day" : "background__night"
          }`}
        >
          <div
            className={`celestials  ${
              time == "day" ? "celestial__change--reverse" : "celestial__change"
            }`}
          >
            <div className="celestial--1"></div>
            <div className="celestial--2"></div>
          </div>
          <div
            className={`hill1`}
            // className={`hill1 ${time == "day" ? "hill1__day" : "hill1__night"}`}
          ></div>
          <div
            className={`hill2`}
            // className={`hill2 ${time == "day" ? "hill2__day" : "hill2__night"}`}
          ></div>
          <div
            className={`hill3`}
            // className={`hill3 ${time == "day" ? "hill3__day" : "hill3__night"}`}
          ></div>
          <div
            className={`hill4`}
            // className={`hill4 ${time == "day" ? "hill4__day" : "hill4__night"}`}
          ></div>
        </div>
        <Home />
      </div>
    </>
  );
}

export default App;
