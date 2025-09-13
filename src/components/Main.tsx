import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from '../assets/images/logo.jpg';
import '../assets/styles/Main.scss';


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={logo} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Hamza-Grena" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/grena-hamza-13765b30b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1 >Empire PFE / PFA </h1>
          <p><b>Empire PFE / PFA</b> transforms your ideas into brilliant projects: web and application development, strategic marketing, PFE/PFA coaching, professional writing (Word & LaTeX) and impactful visual creations (PowerPoint & Canva), all enhanced by user-focused UI/UX design.<br/> Our team guides you step by step with clear, polished deliverables ready to impress—save time, increase your chances of success, and present your work in its best light. Entrust your project to us, and we'll take care of the rest.</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Hamza-Grena" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/grena-hamza-13765b30b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;