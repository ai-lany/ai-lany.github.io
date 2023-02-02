import { Container } from "@mui/material";
import "../App.css";

type Project = {
    name:string;
    link:string;
    github:string;
    description:string;
    date:string;
    screenshots: string[];
    tech: string[];
    status: string;
}

const PROJECTS:Project[] = [
    {
        name:"Uber Design Engineer Intern Project",
        link:"string",
        github:"string",
        description:"string",
        date:"string",
        screenshots: ["string"],
        tech: ["string"],
        status: "Complete",
    },
    {
        name:"Automated Essay Grader",
        link:"string",
        github:"string",
        description:"string",
        date:"string",
        screenshots: ["string"],
        tech: ["string"],
        status: "Complete",
    },
    {
        name:"Cryptocurrency Dashboard",
        link:"string",
        github:"string",
        description:"string",
        date:"string",
        screenshots: ["string"],
        tech: ["string"],
        status: "In Progress",
    },
    {
        name:"SCIAL. Social Media Analytics Platform",
        link:"string",
        github:"string",
        description:"string",
        date:"string",
        screenshots: ["string"],
        tech: ["string"],
        status: "In Progress",
    },
];

const PROJECT_STYLES = {
    maxWidth:"100%",
    background:"#fff", 
    height:"400px", 
    borderRadius: "36px",
    padding: "1em",
}

const Project: React.FC<{props:Project}> = ({props}) => {
    return(
        <Container className="Project" style={PROJECT_STYLES}>
            {props.name}
        </Container>
    );
};
const Projects: React.FC<{}> = ({}) => {
    return(
        <Container id="Projects" style={{maxWidth:"70vw", display:"flex", flexDirection:"column", justifyContent:"center"}}>
            {PROJECTS.map((project)=>{
                return(
                    <Project props={project}/>
                )
            })}
        </Container>
    );
};

export default Projects;