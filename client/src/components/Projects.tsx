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
        status: "string",
    },
    {
        name:"Automated Essay Grader",
        link:"string",
        github:"string",
        description:"string",
        date:"string",
        screenshots: ["string"],
        tech: ["string"],
        status: "string",
    },
    {
        name:"Cryptocurrency Dashboard",
        link:"string",
        github:"string",
        description:"string",
        date:"string",
        screenshots: ["string"],
        tech: ["string"],
        status: "string",
    },
    {
        name:"SCIAL. Social Media Analytics Platform",
        link:"string",
        github:"string",
        description:"string",
        date:"string",
        screenshots: ["string"],
        tech: ["string"],
        status: "string",
    },
];

const PROJECT_STYLES = {
    background:"#161616", 
    height:"400px", 
    margin: "2em 0",
    borderRadius: "4px",
    padding: "1em",
    border: "solid 1px #242424"
}

const Project: React.FC<{props:Project}> = ({props}) => {
    return(
        <Container style={PROJECT_STYLES}>
            {props.name}
        </Container>
    );
};
const Projects: React.FC<{}> = ({}) => {
    return(
        <Container id="Projects">
            {PROJECTS.map((project)=>{
                return(
                    <Project props={project}/>
                )
            })}
        </Container>
    );
};

export default Projects;