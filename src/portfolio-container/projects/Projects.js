import React, { useEffect, useState } from "react";
import "./Projects.css";
import { Row, Col } from "react-bootstrap";

export function Project(props) {

    const[tech, setTech] = useState([]);

    useEffect(() => {
        setTech(props.tech)
    }, [])

  return (
    <div className="project">
      <div style={{ padding: "1em", width: "100%" }}>
        <div className="d-inline-flex w-50">
          <a className="" href={props.git} target="_blank" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="clickable bi bi-folder"
              viewBox="0 0 16 16"
            >
              <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z" />
            </svg>
          </a>
        </div>

        <div className="d-inline-flex w-50 justify-content-end">
          <a href={props.link} target="_blank" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              className=" clickable bi bi-box-arrow-up-right"
              viewBox="0 0 16 16"
            >
              <path fill-rule="evenodd"d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
              <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
            </svg>
          </a>
        </div>
    
      </div>
      <div style={{ padding: "0 1em", width: "100%" }}>
          <h5 className="project-title d-inline">{props.name}</h5>
          <p>{props.desc}</p>
          
          <div className="tech-list w-100">
          <p style={{color:"lightgreen"}}>{props.date}</p>
          {tech.map((item)=>{return(<div >{item}</div>)})}
          </div>

        </div>
    </div>
  );
}
export default function Projects() {
  return (
    <div
      className="projects-container  d-flex justify-content-center"
      id="projects"
    >
      <Row>
      <Col md={6}>
          <Project 
            name="Automated Essay Grader" 
            date="Ongoing"
            git=""
            link=""
            desc="Natural language processing to accomplish the grading of legal essays. A custom text-classifciation model identifies topics and compares semantic similarity to a correct answer."
            tech={['Python','spaCy', 'MongoDB', 'React', 'tok2vec']}
            ></Project>
        </Col>
        <Col md={6}>
          <Project
            name="Cryptocurrency Wallet"
            date="Ongoing"
            git="https://github.com/ailanyEXE/Orbit-Wallet"
            link="https://orbit-wallet.herokuapp.com/"
            desc="A cryptocurrency dashboard that uses authentication to build a custom portfolio."
            tech={['MongoDB', 'Express', 'React', 'Node.JS', 'JWT Auth']}
          ></Project>
        </Col>
    
      </Row>
    </div>
  );
}
