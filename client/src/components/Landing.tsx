import { useState } from "react";
import "../App.css";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";

const Landing: React.FC<{}> = ({}) => {
  return (
    <Container className="Landing">
        <Container className="LandingContent">
        <p className="">Hi, my name is</p>
      <h1 className="link noselect text-gradient">Ailany.</h1>
      <h3 className="">Creative Full-stack Software Engineer.</h3>

      <Button className="Button" variant="outlined" >
        Contact
      </Button>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
        />
      </svg>
        </Container>
      
    </Container>
  );
};

export default Landing;
