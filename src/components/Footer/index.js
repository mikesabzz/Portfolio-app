import React from "react";
import Pdf from "./img/resume.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css"

function Footer () {
    return (
        <div id="footer">
            <div>
            <img src="https://imgur.com/Vphx7sS.png" className="self-portrait" alt=""></img>
            </div>
            <form method="POST" action="https://formspree.io/michaelsabzevari@gmail.com">
            <div id="title">Contact Me</div>
          <div className="contact-form">
                <input type="name" name="name" placeholder="Your full name" required/>      
                <input type="email" name="email" placeholder="Your email" required/>
                <textarea name="message" placeholder="Message" required></textarea>
                <div className="zoom"><button className="btn btn-danger mt-2" type="submit">Send</button></div>
          </div>
            </form>
            <div className="contact-links">
            <a href="https://www.linkedin.com/in/michael-sabzevari-539805131/">LinkedIn</a>
            <a href="https://github.com/mikesabzz">GitHub</a>
            <a target="_blank" href={Pdf}>Resumé</a>
            </div>
           
        </div>
    )
}

export default Footer