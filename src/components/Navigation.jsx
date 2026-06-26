import React  from "react";
import { Link } from "react-router-dom";
import frontmentor from "../images/icon-frontend-mentor.svg";
import github from "../images/icon-github.svg";







export default function Navigation({footer=false}){
    return (
      <section className="navigation">
            <nav className={`navigation__nav container ${footer ? "navigation__nav--footer" : ""}`}>
                <div className="navigation__nav--logo">
                <Link to="/" className="navigation__nav--link">CatalinaG</Link>
                </div>
                <div className="wrapper__navigation--list">
                <ul className="navigation__nav--list">
                    <li className="navigation__nav--list-item">
                        <a href="https://github.com/cgojk" target="_blank" rel="noopener noreferrer"
                         className="navigation__nav--list-link"
                            aria-label="Visit my GitHub profile">
                            <img src={github} alt="GitHub" />
                        </a>
                    </li>
                   
                    <li className="navigation__nav--list-item">
                        <a href="https://www.frontendmentor.io/profile/cgojk"
                         target="_blank" rel="noopener noreferrer"
                         className="navigation__nav--list-link"
                            aria-label="Visit my Frontend Mentor profile">
                            <img src={frontmentor} alt="Frontend Mentor" />
                        </a>
                    </li>
                    
                </ul>
                </div>
            </nav>
            </section>
      

  );
}
