import React from "react";
import Resume from "./img/resume.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css"
import { FiMail } from "react-icons/fi";
import { AiFillPhone } from "react-icons/ai";

function Footer() {
  return (
    <article id="contact" className="wrapper style4 bg-dark">
      <div className="container medium">
        <header>
          <h2 className="text-light">Get Connected</h2>
        </header>
        <div className="row">
          <div>
            <hr />
            <form
              method="POST"
              action="https://formspree.io/michaelsabzevari@gmail.com"
            >
              <div className="contact-form">
                <input
                  type="name"
                  name="name"
                  placeholder="Your full name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                />
                <textarea
                  name="message"
                  className="form-control mb-2"
                  placeholder="Message"
                  required
                ></textarea>
                <div className="zoom">
                  <button className="btn btn-danger mt-2" type="submit">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <hr />
            <ul className="list-unstyled d-flex justify-content-between">
              <li className="text-white">
                <FiMail />
                <a href="mailto:michaelsabzevari@gmail.com" className="text-white font-weight-bold">michaelsabzevari@gmail.com</a>
              </li>
              <li className="text-white">
                <AiFillPhone />
                <a className="text-white font-weight-bold" href="tel:5169985096">(516)998-5096</a>
              </li>
              <li className="text-white">
                <a className="text-white font-weight-bold" href="https://www.linkedin.com/in/michael-sabzevari-539805131/" target="_blank">LinkedIn</a>
              </li>
              <li className="text-white">
                <a className="text-white font-weight-bold" href="https://github.com/mikesabzz" target="_blank">GitHub</a>
              </li>
              <li className="text-white">
                <a className="text-white font-weight-bold" href={Resume} target="_blank">Resumé</a>
              </li>
            </ul>
            <hr />
          </div>
        </div>
      </div>
    </article>
  );
}

export default Footer;
