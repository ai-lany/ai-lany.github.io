import { useState } from "react";
import "../App.css";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import Cube from '../assets/flat2.png'; 

const Landing: React.FC<{}> = ({}) => {
  return (
    <Container className="Landing">
        <Container className="LandingContent" style={{width:"60vw"}}>
      <h1 className="link noselect"> <span className="text-gradient">AI</span>LANY.</h1>
      <br/>
        <h3 className="highlight noselect"> Creative Software Engineer.</h3>
      {/* <Button className="Button" variant="outlined" >
        Contact
      </Button> */}

        </Container>
        <img className="Artwork" style={{maxHeight: "80vw", position: "absolute", bottom:-300, right: -200}} src={Cube}/>

       
    </Container>
  );
};

export default Landing;
