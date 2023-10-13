import React from "react";
import SnapSearch from "./snapsearch.png";
import wisewords from "./wisewords.png";
import meetflow from "./meetflow.png";

export default function Projects() {
  const style = {
    width: "22rem",
    marginBottom: "30px",
    marginRight: "30px",

 
  };
  const display = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr)",
  gap:"40px",
  };

  return (
    <>
      <div style={display} className="container ">
        <div class="card container" style={style}>
          <img src={SnapSearch} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Snap Search</h5>
            <p class="card-text">
              An Image searching tool build with html css javascript along with
              the integration of Unsplash API.
            </p>
            <center>
              <a
                href="https://shekhsahil.github.io/SnapSearch/"
                class="btn btn-primary"
              >
                Visit ↗️
              </a>
            </center>
          </div>
        </div>
        <div class="card container" style={style}>
          <img src={wisewords} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Wise Words</h5>
            <p class="card-text">
              It's a random quote generator with a twist! Not only can you get
              inspiring and thought-provoking quotes at the click of a button,
              but you can also customize your experience.
            </p>
            <center>
              <a
                href="https://shekhsahil.github.io/Wise_Words/"
                class="btn btn-primary"
              >
                Visit ↗️
              </a>
            </center>
          </div>
        </div>

        <div class="card container" style={style}>
          <img src={meetflow} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Meetflow</h5>
            <p class="card-text">
              MeetFlow! This video calling website was built using JS, HTML,
              CSS, and the Jitsi video calling API. With MeetFlow, users can
              easily connect with each other from anywhere in the world, without
              the need for any downloads or plugins. The website is designed to
              be user-friendly and intuitive, making it easy for anyone to
              create a video call in just a few clicks.
            </p>
            <center>
              <a
                href="https://shekhsahil.github.io/MEETFLOW/"
                class="btn btn-primary"
              >
                Visit ↗️
              </a>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}
