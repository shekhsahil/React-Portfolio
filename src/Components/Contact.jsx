import React from "react";
import { SocialIcon } from "react-social-icons";
export default function Contact() {
  const style = {
    paddingLeft: "10vw",
    paddingRight: "10vw",
  };
  return (
    <>
      <form
        action="https://formspree.io/f/xzbwnlge"
        method="POST"
        style={style}
      >
        <center>
          <div className="container">
            <p>
              "Thank you for visiting my portfolio website. I am always open to
              discussing new projects, collaborations, and opportunities. If you
              have any questions or would like to get in touch, please don't
              hesitate to reach out to me via email, phone, or the contact form
              provided. I will respond to your message as soon as possible.
              Let's work together to create something amazing!"
            </p>
            <hr />

            <h4>Contact Me</h4>
          </div>
          <br />
          <div className="mb-4">
            <label for="exampleInputEmail1" className="form-label">
              Your Full name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your name here"
              required
              name="Name"
            />
            <br />
            <label for="exampleInputEmail1" className="form-label">
              Email address 📧
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="name@example.com"
              required
              name="Email"
            />
            <br />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Phone No.📞
            </label>
            <input
              type="tel"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Phone no."
              name="phone number"
            />
          </div>
          <label for="floatingTextarea2">Your Message ✉️</label>
          <br />
          <br />

          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="How can i help you ?"
              id="floatingTextarea2"
              required
              name="Message"
            ></textarea>
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </center>
      </form>
      <hr />

      <center>
        <div className="container">
          <h5>Connect with me </h5>

          {/* <SocialIcon  url="https://www.facebook.com/profile.php?id=100095461148093"/> */}
          <SocialIcon url="https://www.instagram.com/shekhsahil_786/" />
          <SocialIcon url="https://www.linkedin.com/in/s-k-sahil-mandal-2697341a0/" />
          <a href="https://github.com/shekhsahil">
            <SocialIcon network="github" />
          </a>
          <a href="https://twitter.com/Mr_sahil1">
            <SocialIcon network="x" />
          </a>
        </div>
      </center>
    </>
  );
}
