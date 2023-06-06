import React from 'react';
import { CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Statistics.css';
import { Link } from 'react-router-dom';

const Statistics = () => {
  const webdev = 78;
  const python = 26;
  const java = 66;
  const Database = 69;
  const linux = 92;
  return (
    <>
      <h1 className="heading">Application Development Assessment</h1>
      <div className="Stats">
        <CircularProgressbar
          className="progress"
          value={java}
          text={`${java}%`}
        />
        <CircularProgressbar
          className="progress"
          value={python}
          text={`${python}%`}
        />
        <CircularProgressbar
          className="progress"
          value={webdev}
          text={`${webdev}%`}
        />
        <CircularProgressbar
          className="progress"
          value={Database}
          text={`${Database}%`}
        />
        <CircularProgressbar
          className="progress"
          value={linux}
          text={`${linux}%`}
        />
      </div>
      <h4 className="skill-name1">Java</h4>
      <h4 className="skill-name2">Python</h4>
      <h4 className="skill-name3">Web Dev</h4>
      <h4 className="skill-name4">Database</h4>
      <h4 className="skill-name5">Linux</h4>
      <div className="info-container">
        <div className="sub-info-container">
          <table>
            <th>
              <td>Strengths</td>
            </th>
            <tbody>
              <tr>
                <td>Database</td>
              </tr>
              <tr>
                <td>Web Dev</td>
              </tr>
              <tr>
                <td>Linux</td>
              </tr>
            </tbody>
          </table>
          <table className="skill-improve">
            <th>
              <td>Skills to Improve</td>
            </th>
            <tbody>
              <td>Python</td>
            </tbody>
          </table>
        </div>
        <div className="sub-info-container1">
          <h3>Here is a personalized roadmap for you!!!</h3>
          <img src="/images/roadmap2.png" alt="roadmap" />
          <p>
            Recommended Python Course : 
            <Link to="https://genpact.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/">
              Python
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Statistics;
