import React from "react";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  const style = {
    color: "darkblue",
    textDecoration: "none",
  };
  return (
    <>
      <div className="card">
        <div className="card-body">
          <center>
            <h6 className="card-title">
              Copyright © {year} S K Sahil Mandal.
              <br />
              All Rights Reserved.
            </h6>

            <p className="card-text">
              <span>Email: </span>
              <a href="mailto:sahillmandal.786@gmail.com" style={style}>
                sahillmandal.786@gmail.com
              </a>
              <br />
              Address: Kolkata 📍India 🇮🇳
            </p>
          </center>
        </div>
      </div>
    </>
  );
}
