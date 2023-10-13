import React from "react";
import me from "./me.jpg";
export default function Home() {
  const style = {
    maxWidth: "900px",
    maxHeight: "fit-content",
  };
  return (
    <>
      <center>
        <div className="card mb-3" style={style}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={me} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h6 className="card-title">Hi , I am S K Sahil Mandal</h6>
                <p className="card-text">
                  I am a dedicated and creative web developer with a strong
                  foundation in front-end and back-end technologies. I am
                  passionate about crafting user-friendly and visually appealing
                  websites. I thrive on challenges and enjoy learning new
                  technologies to enhance my skills. Let's collaborate and bring
                  your ideas to life!
                </p>
                <span>
                  <strong> Education:</strong> Bachelor of Technology in
                  Electronics & Communication Engineering from{" "}
                  <strong>
                    {" "}
                    Maulana Abul Kalam Azad University of Technology (MAKAUT)
                  </strong>{" "}
                  , Kolkata, India
                  <br />
                  <br />
                  <strong> Graduated: </strong>
                  June 2025
                </span>
                <br />
                <br />
                <a href="/">
                  <button type="button" class="btn btn-primary">
                    Download My CV
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </center>
      <br />
      <br />
      <br />
      <br />
      <br />

    </>
  );
}
