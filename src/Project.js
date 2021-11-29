import React from "react";
import "./Project.css";
import Project1 from './img/portfolio-1.jpg';
import Project2 from './img/portfolio-2.jpg';
import Project3 from './img/portfolio-3.jpg';
import Project4 from './img/portfolio-4.jpg';
import Project5 from './img/portfolio-5.jpg';
import Project6 from './img/portfolio-6.jpg';

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">
          There are many variations of passages of Lorem Ipsum available,
        </p>
        <p className="heading p__color">
          but the majority have suffered alteration.
        </p>
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h4 className="project__text ">Vroom </h4>
                     <h5 className="project__text">Wanna buy car?? you are in right place</h5>
                     <a target='_blank' href="https://car-add.web.app/" className="project__btn">Visit Website </a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h4 className="project__text ">TourDe </h4>
                     <h5 className="project__text">Getting tickets to the Dream </h5>
                     <a target='_blank' href="https://tourapp-13a4e.web.app/" className="project__btn">Visit Website </a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h4 className="project__text">Medicare </h4>
                     <h5 className="project__text">Getting Best Hospital in city </h5>
                     <a target='_blank' href="https://loving-mccarthy-980700.netlify.app/home" className="project__btn">Visit Website </a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h4 className="project__text">Online Programming Course</h4>
                     <h5 className="project__text">Getting Best Courses on online </h5>
                     <a target='_blank' href="https://silly-haibt-f855af.netlify.app/Home" className="project__btn">Visit Website </a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project5} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h4 className="project__text">Hexa Store </h4>
                     <h5 className="project__text">Getting latest Design  items </h5>
                     <a target='_blank' href="https://hexa-store.netlify.app/?" className="project__btn">Visit Website </a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project6} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h4 className="project__text">Weather Forecasts  </h4>
                     <h5 className="project__text">wanna know Weather Forecasts </h5>
                     <a target='_blank' href="https://hparvez905.github.io/weather-condition/" className="project__btn">Visit Website </a>
                     </div>
                 </div>
             </div>
             
             <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
             <a target='_blank' href="https://github.com/hparvez905?tab=repositories">
             <button className="view__more pointer btn">View more</button>
                 
                </a>
            
             </div>

           </div>
       </div>
    </div>
  );
}

export default Project;
