import React from "react";
import "./Footer.css"

function Footer () {
    return (
        <div id="footer">
            <div>
            <img src="https://imgur.com/Vphx7sS.png" className="self-portrait" alt=""></img>
            </div>
            <form method="POST" action="https://formspree.io/michaelsabzevari@gmail.com">
          <div className="contact-form">
                <input type="name" name="name" placeholder="Your full name" required/>      
                <input type="email" name="email" placeholder="Your email" required/>
                <textarea name="message" placeholder="Message" required></textarea>
                <div className="zoom"><button type="submit">Send</button></div>
          </div>
            </form>
            <div className="contact-links">
            <a href="https://www.linkedin.com/in/michael-sabzevari-539805131/"><img src="https://www.freepnglogos.com/uploads/linkedin-in-logo-png-1.png" alt=""></img></a>
            <a href="https://github.com/mikesabzz"><img src="https://icon-library.net/images/github-icon-png/github-icon-png-29.jpg" alt=""></img></a>
            </div>
           
        </div>
    )
}

export default Footer