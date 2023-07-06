import React from "react";
import "./experience.css";
import { FaJava, FaNodeJs, FaReact, FaBootstrap } from 'react-icons/fa'
import { SiSpringboot, SiMongodb, SiPostgresql, SiHtml5, SiCss3, SiJavascript, SiApachekafka, SiApachecassandra, SiAmazonaws } from 'react-icons/si'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container experience_container">

        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <SiHtml5 className="experience_details-icon"  alt="html" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <SiCss3 className="experience_details-icon"  alt="css" />
              <div>
                <h4>CSS3</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            
            <article className="experience_details">
              <FaReact className="experience_details-icon"  alt="react" />
              <div>                
                <h4>REACT & REDUX</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <FaBootstrap className="experience_details-icon"  alt="bs" />
              <div>           
                <h4>BOOTSTRAP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <SiJavascript className="experience_details-icon"  alt="js" />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            {/* <article className="experience_details">
              <img src={three} className="experience_details-icon" alt="threejs"/>
              <div>
                <h4>Three.js</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article> */}
          </div>
        </div>
        
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            
            <article className="experience_details">
              <SiPostgresql className="experience_details-icon"  alt="postgresql" />
              {/* <img src={postgr} className="experience_details-icon" alt="postgresql"/> */}
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <FaJava className="experience_details-icon" alt="java"/>
              <div>
                <h4>Java</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <SiSpringboot className="experience_details-icon" alt="springboot"/>
              <div>
                <h4>Springboot</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
             <SiMongodb className="experience_details-icon" alt="mongodb"/>
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience_details">
              <FaNodeJs className="experience_details-icon" alt="node"/>
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <SiApachekafka className="experience_details-icon" alt="kafka"/>
              <div>
                <h4>Apache Kafka</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience_details">
              <SiApachecassandra className="experience_details-icon" alt="cassandra"/>
              <div>
                <h4>Cassandra</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience_details">
              <SiAmazonaws className="experience_details-icon" alt="aws"/>
              <div>
                <h4>AWS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
