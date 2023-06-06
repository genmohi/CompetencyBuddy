import React from 'react'
import './AppDev.css'
import { useNavigate } from 'react-router-dom';

const AppDev = () => {
  const navigate = useNavigate();
  const handleSubmit = () =>{
        navigate('/Stat')
    }

  return (
    <>
      <h1 className="heading">Application Development</h1>
      <span className="comp-info">
        Practice Name : Convergent Applications
      </span>
      <span className="comp-info">Practice Head : Prasanjit Ghosh</span>
      <span className="comp-info">Competency Lead : Balwant Singh </span>
      <div className="video-container">
        <video src="/videos/appdev.mp4" autoPlay loop muted />
        <p>
          Application development is the process of creating a computer program
          or a set of programs to perform the different tasks that a business
          requires. From calculating monthly expenses to scheduling sales
          reports, applications help businesses automate processes and increase
          efficiency. Every app-building process follows the same steps:
          gathering requirements, designing prototypes, testing, implementation,
          and integration.
        </p>
      </div>
      <div className="skill-container">
        <h1 className="skill-heading">Assess Your Skills</h1>
        <div className="skills">
          <button type="button" className="skill-btn">
            Java
          </button>
          <button type="button" className="skill-btn">
            Python
          </button>
          <button type="button" className="skill-btn">
            Web Development
          </button>
          <button type="button" className="skill-btn">
           Database
          </button>
          <button type="button" className="skill-btn">
            Linux
          </button>
        </div>
        <div className="sub-skills-container">
          <ul className="sub-skills1">
            <li>
              <input type="checkbox" name="sub-skill 1" value="sub-skill1" />
              <span>Core Java</span>
            </li>
            <li>
              <input type="checkbox" name="sub-skill 1" value="sub-skill1" />
              <span>Java Build Tools</span>
            </li>
            <li>
              <input type="checkbox" name="sub-skill 1" value="sub-skill1" />
              <span>Springboot</span>
            </li>
            <li>
              <input type="checkbox" name="sub-skill 1" value="sub-skill1" />
              <span>Java Testing</span>
            </li>
            <li>
              <input type="checkbox" name="sub-skill 1" value="sub-skill1" />
              <span>J2EE</span>
            </li>
          </ul>
          <ul className="sub-skills2">
            <li>
              <input type="checkbox" name="sub-skill 1" value="sub-skill1" />
              <span>OOPS</span>
            </li>
            <li>
              <input type="checkbox" name="sub-skill 1" value="sub-skill1" />
              <span>Django</span>
            </li>
            <li>
              <input type="checkbox" name="sub-skill 1" value="sub-skill1" />
              <span>AI & ML</span>
            </li>
            <li>
              <input type="checkbox" name="sub-skill 1" value="sub-skill1" />
              <span>APIs</span>
            </li>
            <li>
              <input type="checkbox" name="sub-skill 1" value="sub-skill1" />
              <span>PySpark</span>
            </li>
          </ul>
          <ul className="sub-skills3">
            <li>
              <input type="checkbox" name="sub-skill 1" value="sub-skill1" />
              <span>HTML CSS</span>
            </li>
            <li>
              <input type="checkbox" name="sub-skill 1" value="sub-skill1" />
              <span>JavaScript</span>
            </li>
            <li>
              <input type="checkbox" name="sub-skill 1" value="sub-skill1" />
              <span>ReactJS</span>
            </li>
            <li>
              <input type="checkbox" name="sub-skill 1" value="sub-skill1" />
              <span>NodeJS</span>
            </li>
            <li>
              <input type="checkbox" name="sub-skill 1" value="sub-skill1" />
              <span>Database</span>
            </li>
          </ul>
          <ul className="sub-skills4">
            <li>
              <input type="checkbox" name="sub-skill 1" value="sub-skill1" />
              <span>RDBMS</span>
            </li>
            <li>
              <input type="checkbox" name="sub-skill 1" value="sub-skill1" />
              <span>CRUD</span>
            </li>
            <li>
              <input type="checkbox" name="sub-skill 1" value="sub-skill1" />
              <span>DBMS</span>
            </li>
            <li>
              <input type="checkbox" name="sub-skill 1" value="sub-skill1" />
              <span>NoSQL DB</span>
            </li>
            <li>
              <input type="checkbox" name="sub-skill 1" value="sub-skill1" />
              <span>ORM</span>
            </li>
          </ul>
          <ul className="sub-skills5">
            <li>
              <input type="checkbox" name="sub-skill 1" value="sub-skill1" />
              <span>Perl</span>
            </li>
            <li>
              <input type="checkbox" name="sub-skill 1" value="sub-skill1" />
              <span>Troubleshoot</span>
            </li>
            <li>
              <input type="checkbox" name="sub-skill 1" value="sub-skill1" />
              <span>Bash</span>
            </li>
            <li>
              <input type="checkbox" name="sub-skill 1" value="sub-skill1" />
              <span>Cloud</span>
            </li>
            <li>
              <input type="checkbox" name="sub-skill 1" value="sub-skill1" />
              <span>Unix</span>
            </li>
          </ul>
        </div>
      </div>
      <input type="submit" onClick={handleSubmit} value="Submit" className="submit-f" />
    </>
  );
}

export default AppDev