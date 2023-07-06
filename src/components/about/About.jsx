import React from "react";
import "./about.css";
import Me from "../../assets/suitedited.png";
import CTA from './CTA'
import { FaAward, FaCertificate, FaFolder} from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      
      <h5>Hi! I Am</h5>
      <h1>Haravind Rajula</h1>
      <h2 className="text-light"> Full-stack Developer</h2> 
      
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="About me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>

            <article className="about_card">
              <FaCertificate className="about_icon" />
              <h5>Certificates</h5>
              <small>3+</small>
            </article>

            <article className="about_card">
              <FaFolder className="about_icon" />
              <h5>Projects</h5>
              <small>10+ </small>
            </article>
          </div>

          <p>With a Master's Degree in Computer Science, I have spent 2+ years refining my skills in full-stack application development, including 2 years at KPIT (a product-based company) and internships at "Walmart Global Tech."</p>
          <p>I'm open to Full-stack(remote/onsite) opportunities</p>

          <CTA/>
          <a href='#experience' className='scroll__down'>Scroll Down</a>
        </div>
      </div>
    </section>
  );
};

export default About;
