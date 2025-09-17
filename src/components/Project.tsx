import React from "react";
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import phpProject from '../assets/images/phpProject.png';
import reactProject from '../assets/images/react.png';
import aspProject from '../assets/images/aspNet.jpg';
import mlProject from '../assets/images/ml.jpg';
import weFram from '../assets/images/weFram.png';



import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={phpProject} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>PHP developer</h2></a>
            <p>Development of a dynamic sales website with interaction with a SQL database, responsive, integration of a chatboot assistant and strip payment method.</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={reactProject} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>REACT & Firebase developer</h2></a>
            <p>Development of a dynamic online car rental website with interaction with a NoSql database, responsive, car comparison system, integration of a chatboot assistant and strip payment method.</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={aspProject} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>ASP.NET Developer</h2></a>
                <p>Creation of a robust payroll management system for employees, management of constants used for calculating headings, management of headings, management of model bulletins, management of employees and generation of bulletins calculated by the system.</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mlProject} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>machine learning developer</h2></a>
                <p>import and clean .csv || .xlsx file, choose target, apply learning models, model deployment and consume using JavaScript</p>
            </div>
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={weFram} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>Full Stack MERN Developer</h2></a>
                <p>This mobile application allows realtors in Japan to securely manage their property information and view future income predictions. This app is built with Ruby on Rails and JavaScript.</p>
            </div>
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>COVID-19 Case Management</h2></a>
                <p>Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4. The dashboard served the university's leadership in their decision-making processes.</p>
            </div>
        
        </div>
    </div>
    );
}

export default Project;