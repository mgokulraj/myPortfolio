import React from "react";
import "./About.css";
import Header from "./Header";
import aboutVector from "./../assets/about_vector.png";
import Footer from "./Footer";
import aboutAnime from "./../assets/about_anime.gif";
import resume from "./../assets/Gokulaj_Mariyappan.pdf";

const About = () => {
  return (
    <div className="section-container">
      <Header
        heading="About Me."
        details="Cloud Infrastructure Enginner | Azure Devops Engineer | Technical Support Specialist | Flexible and Hardworker"
      />

      {/* ------------------------Main Content------------------------------------------ */}

      <div className="about-main">
        <div className="about-main-left">
          {/* Sub section 1 */}
          <h3 className="about-sub-head">Career Objective</h3>
          <p className="about-details">
            " Microsoft Certified Azure Administrator, Senior systems engineer with 6+ years of IT experience in implementation, migration, 
            project and BAU support for Infrastructure solutions both on–prem and Azure cloud environment. "
          </p>

          {/* Sub section 2 */}
          <h3 className="about-sub-head">My Services</h3>
          <p className="about-details">
            My passion is to create website and work on UI based projects. Develop a website for you using HTML, CSS, JavaScript, React.js,
            tailwindcss and make the website responsive with all screens compatibility.
          </p>

          {/* Sub section 3 */}
          <div className="download-btn">
            <a className="link-text" href={resume} download>
              Download Resume!
            </a>
          </div>
        </div>

        <div className="about-main-right">
          <img src={aboutAnime} alt="animation" className="about-anime" />
        </div>
      </div>

      {/* ------------------------Main Content------------------------------------------ */}

      <Footer phrase="Check out my " link="projects!" toAdress="/projects" />

      <div className="vector-frame">
        <img
          src={aboutVector}
          className="about-vector"
          alt="man-saying-hello-anime"
        />
      </div>
    </div>
  );
};

export default About;
