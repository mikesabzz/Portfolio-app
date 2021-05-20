import React from "react";
import Resume from "./img/resume.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css"

function Footer () {
    return (
        <div id="footer">
        
            
            {/* <form method="POST" action="https://formspree.io/michaelsabzevari@gmail.com">
            <div id="title">GET CONNECTED</div>
          <div className="contact-form">
                <input type="name" name="name" placeholder="Your full name" required/> 
                <br />     
                <input type="email" name="email" placeholder="Your email" required/>
                <textarea name="message" placeholder="Message" required></textarea>
                <div className="zoom"><button className="btn btn-danger mt-2" type="submit">Send</button></div>
          </div>
            </form> */}
            
            <div>
            <div id="title">GET CONNECTED</div>
                <h4 id="email">Email</h4>
                <span className="zoom">
                    <button className="btn btn-success mt-2" type="submit" >
                        <a href="mailto: michaelsabzevari@gmail.com">michaelsabzevari@gmail.com</a>
                    </button>
                </span>
                <br />
                <a class="mobilesOnly" href="tel:5169985096">Call (516)998-5096</a> 
            </div>
            <div className="contact-links">
            <span><img src="https://qph.fs.quoracdn.net/main-qimg-aebe52c5836835593474dc349266566c" /><a target="_blank" href="https://www.linkedin.com/in/michael-sabzevari-539805131/">LinkedIn</a></span>
            <span><img src="https://www.sferalabs.cc/wp-content/uploads/github-logo-white.png" /><a target="_blank" href="https://github.com/mikesabzz">GitHub</a></span>
            <span><img src="https://mycvdesigner.com/wp-content/uploads/2019/12/why-need-professional-cv-800px-1.png" /><a target="_blank" href={Resume}>Resumé</a></span>
            </div>
           
        </div>
    )
}

export default Footer