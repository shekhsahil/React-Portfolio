import React from "react";
import "../Navbar.css";

export default function Navbar() {


  return (
    <>
      <div  >
        <ul className="nav justify-content-center " >
          <li className="nav-item"  >
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/skills">
              My Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Contact">
              Contact
            </a>
          </li>
        </ul>
        <hr />
      </div>
    </>
  );
}
