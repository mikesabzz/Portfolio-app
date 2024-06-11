import React from "react";
// import Resume from "./img/resume.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiMail } from "react-icons/fi";
import { AiFillPhone } from "react-icons/ai";

function Footer() {
  return (
    <article id="contact" className="bg-dark py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <header>
              <h2 className="text-light">Get Connected</h2>
            </header>
            <hr className="text-light" />
            <form
              method="POST"
              action="https://formspree.io/michaelsabzevari@gmail.com"
            >
              <div className="mb-3">
                <input
                  type="name"
                  name="name"
                  placeholder="Your full name"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  placeholder="Message"
                  className="form-control"
                  required
                ></textarea>
              </div>
              <div>
                <button className="btn btn-danger mt-2" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6 d-flex flex-column">
            <hr className="text-light" />
            <ul className="list-unstyled d-flex flex-column">
              <li className="text-light mb-2">
                <FiMail />{" "}
                <a href="mailto:michaelsabzevari@gmail.com" className="text-light font-weight-bold">
                  michaelsabzevari@gmail.com
                </a>
              </li>
              <li className="text-light mb-2">
                <AiFillPhone />{" "}
                <a className="text-light font-weight-bold" href="tel:5169985096">
                  (516) 998-5096
                </a>
              </li>
              <li className="text-light mb-2">
                <a className="text-light font-weight-bold" href="https://www.linkedin.com/in/michael-sabzevari-539805131/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li className="text-light mb-2">
                <a className="text-light font-weight-bold" href="https://github.com/mikesabzz" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li className="text-light mb-2">
                <a className="text-light font-weight-bold" href={`${process.env.PUBLIC_URL}/resume.pdf`}  target="_blank">
                  Resumé
                </a>
              </li>
            </ul>
            <hr className="text-light" />
          </div>
        </div>
      </div>
    </article>
  );
}

export default Footer;
