import React from 'react';
import './Contact.css';
import contactImg from "./img/about-9.jpg"
function Contact() {
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me.</h1>
                            <p className="hire__text white">I am available for freelance work. Connect with me via phone:</p>
                           <p className="hire__text white"><strong>+8801305398487</strong> or email <strong>parvez.jnu.cse.16@gmail.com</strong></p>
                        </div>
                        <div>
                        <br />
                         <br />
                            <h1>To contact me <br />
                            <br />Submit your information here </h1>
                            <br />
                            <br />
                           
                           <a target='_blank' href="https://form.jotform.com/213326755801050">
                  <button className="about btn pointer">Contact Form </button>
                </a>
                           
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>
            </div>
        </div>
    )
}

export default Contact
