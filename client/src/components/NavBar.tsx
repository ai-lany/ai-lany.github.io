import { useState } from "react";
import "./NavBar.css"
import Link from "@mui/material/Link";
import { Grid } from "@mui/material";

const NAV_ELEMENTS = [
    {
        to:"#",
        text:"Home"  
    },
    {
        to:"#Projects",
        text:"Projects"  
    },
    {
        to:"#",
        text:"About" 
    }
];

const NavLink: React.FC<{to:string; text:string}> = ({to, text}) => {
    return(
        <li className="NavItem">
            <Link href={to} className="NavLink">
                {text}
            </Link>
        </li>
       
    );
};

const NavBar: React.FC<{}> = ({}) => {
  return (

    <Grid container className="NavBar">
        {
            NAV_ELEMENTS.map((element:{to:string; text:string})=>{
                return(
                    <Grid item direction="row" justifyContent="center">
                        <NavLink to={element.to} text={element.text}/>
                    </Grid>
                ); 
            })
        }
    
    </Grid>
   
  );
};

export default NavBar;
