import React from "react";
import { Link } from "react-router-dom";
// import heromobileimage from "../images/image-profile-mobile.webp"
// import herotableimage from "../images/image-profile-tablet.webp"
// import herodesktopimage from "../images/image-profile-desktop.webp";
import Button from "../components/UI/Button";
import circlepattern from "../images/pattern-circle.svg";
import rings from "../images/pattern-rings.svg";


export default function Hero(){
    return (
 <section className="hero__section ">
    <header className="hero__header container">
       
       <div className="pattern__rings">
         <img src={rings} alt="rings pattern" className=" pattern rings" />
       </div>
    <div className="wrapper__hero-content ">
     <div className="image__hero">
        <img
        src={circlepattern}
         alt=""
    className="circle"
    aria-hidden="true"
  />

                </div>


                <div className="info__hero">
                   <h1 className="title__hero">Nice to meet you!  I'm <span className="highlight">Catalina Gojkovic</span></h1>
                   <p className="hero_text">
                    Based in Brisbane, I'm a Digital Designer and aspiring Front-End 
                    Developer passionate about creating accessible, user-centered websites
                     and continuously expanding my development skills.
                  </p>
                  <Button href="#contact"> Contact me</Button>
                </div>

           
         </div>
 </header>
          
    
       
</section>

  );
}