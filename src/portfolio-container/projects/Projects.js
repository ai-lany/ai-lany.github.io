import React, { useEffect, useState } from "react";
import "./Projects.css";
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '70vw',
    display: 'flex',
    flexDirection: 'column',
  },
};
export function Project(props) {

    const[tech, setTech] = useState([]);
    const[gitmsg, setGitMsg] = useState('');
    const[linkmsg, setLinkMsg] = useState('');
    Modal.setAppElement('#root');
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }

    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      
    }

    function closeModal() {
      setIsOpen(false);
    }


    useEffect(() => {
        setTech(props.tech)
        if(props.git === ''){
          setGitMsg('Private Repository')
        }else{
          setGitMsg('View Files')
        }
        if(props.link === ''){
          setLinkMsg('Coming Soon')
        }else{
          setLinkMsg('View Deployment')
        }
        
    }, [])

  return (
    <div className="project mx-auto">
      <div style={{ padding: "1em", width: "100%" }}>
      
        <div className="d-inline-flex w-50">
        <OverlayTrigger
          placement="top"
          delay={{ show: 0, hide: 200 }}
          overlay={(
            <Tooltip >
              {gitmsg}
            </Tooltip>
          )}
        >
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
          </OverlayTrigger>
        </div>
    
        
     <div className="d-inline-flex w-50 justify-content-end" >
     <OverlayTrigger
          placement="top"
          delay={{ show: 0, hide: 200 }}
          overlay={(
            <Tooltip >
              {linkmsg}
            </Tooltip>
          )}
        >
          <button className="btn" onClick={openModal}>
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
          </button>
          </OverlayTrigger>
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

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 >{props.name}</h2>
        <button onClick={closeModal} className='btn' style={{position:'absolute', right: '1em'}}>X</button>
        <br></br>
        <br></br>
        <div>
          {props.screenshots.map((src)=> {return(<img className="screenshot" src = {src}></img>)})}
        </div>
       
      </Modal>
    </div>
  );
}
export default function Projects() {
  return (
    <div>
    <div
      className="projects-container  d-flex justify-content-center"
      id="projects"
    >
      <Row>
      <Col  md={6}>
          <Project 
            name="Automated Essay Grader" 
            date="Ongoing"
            git=""
            link=""
            desc="Natural language processing to accomplish the grading of legal essays. A custom text-classifciation model identifies topics and compares semantic similarity to a correct answer."
            tech={['Python','spaCy', 'MongoDB', 'React', 'tok2vec']}
            screenshots = {['https://i.imgur.com/6LwRjuz.png', 'https://i.imgur.com/lSpUZ5F.png']}
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
            screenshots = {['https://i.imgur.com/6LwRjuz.png', 'https://i.imgur.com/lSpUZ5F.png']}
          ></Project>
        </Col>
    
      </Row>
      
  
    </div>
    <div style={{height: "25vh", width: "100vw", background: 'none'}}>

    </div>
    
    </div>
  );
}