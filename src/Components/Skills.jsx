import React from "react";
import react from "./react.png";
import js from "./js.png";
import HTML from "./html.jpg";
import CSS from "./css.jpg";
import mongodb from "./mongodb.png";
import nodejs from "./nodejs.png";

export default function Skills() {
  const style = {
    width: "20rem",
  };
  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr)",
    gap: "50px",
  };
  return (
    <>
      <div style={grid} className="container">
        <div className="card container" style={style}>
          <img src={HTML} className="card-img-top" alt="html" />
          <div className="card-body">
            <p className="card-text">HTML</p>
          </div>
        </div>

        <div className="card container" style={style}>
          <img src={CSS} className="card-img-top" alt="CSS" />
          <div className="card-body">
            <p className="card-text">CSS</p>
          </div>
        </div>
        <div className="card container" style={style}>
          <img src={js} className="card-img-top" alt="js" />
          <div className="card-body">
            <p className="card-text">JS</p>
          </div>
        </div>

        <div className="card container" style={style}>
          <img src={react} className="card-img-top" alt="react" />
          <div className="card-body">
            <h6 className="card-text">
              <strong>React Js</strong>
            </h6>
          </div>
        </div>
        <div className="card container" style={style}>
          <img src={mongodb} className="card-img-top" alt="react" />
          <div className="card-body">
            <h6 className="card-text">
              <strong>Mongo db</strong>
            </h6>
          </div>
        </div>

        <div className="card container" style={style}>
          <img src={nodejs} className="card-img-top" alt="react" />
          <div className="card-body">
            <h6 className="card-text">
              <strong>Node Js & Express Js</strong>
            </h6>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className="card container" style={style}>
        <img
          src={"https://i.morioh.com/200730/9a364b92.webp"}
          className="card-img-top"
          alt="react"
        />
        <div className="card-body">
          <h6 className="card-text">
            <strong>Bootstrap & Firebase</strong>
          </h6>
        </div>
      </div>
    </>
  );
}
