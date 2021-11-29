import React from "react";
import "./About.css";
import aboutImg from "./img/about.jpg";
function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                
                I would like to introduce myself to you as I believe I have the skills,willpower,  
                qualifications, and hardworking mind necessary to make a significant contribution 
                to your organization.
              </p>
              <p className="about__text p__color">
              I am a 4th year B.Sc student  in  computer science and Engineering from  jagannath University.   
              I completed a web development  course from Jhankar Mahbub vai's  Programming Hero team.
              However, I can assure you that I am a quick learner, adaptive as well as an energetic person. 
              I love to learn new things and take challenges.
              </p>
              <p className="about__text p__color">
              I believe working in a reputed organization like your one will provide me an excellent opportunity for my career.
              I would truly be grateful if I finally selected for that post and I will prove myself to be an important asset 
              for your company through my dedication, sincerity and highest level of professionalism.
              </p>
              <div className="about__button d__flex align__items__center">
                <a target='_blank' href="https://drive.google.com/file/d/1tHHFXTHNfkBP04JCCRkmC55910AhaA7d/view?usp=sharing">
                  <button className="about btn pointer">Download Cv</button>
                </a>
                <a target='_blank' href="https://www.linkedin.com/in/md-parvez-a5b524149">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
