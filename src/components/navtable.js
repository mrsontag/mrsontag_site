import React from 'react';
import NavCell from "./navcell";
import Passions from "../views/passions";
import Resume from "../views/resume";

const NavTable = props => {
    
    return (
        <div>
            <NavCell text="Skills" backgroundColor="rgb(50,50,50)" fontColor="white" top={0} left={0}/>
            <NavCell text="Resume" backgroundColor="rgb(200,200,200)" fontColor="black"  top={150} left={600}>
                <Resume />
            </NavCell>
            <NavCell text="Passions" backgroundColor="rgb(25,25,25)" fontColor="rgb(220,220,220)" link="/passions/" top={300} left={150}> 
                <Passions />    
            </NavCell>
            <NavCell text="Examples" backgroundColor="rgb(250,250,250)" fontColor="rgb(200,0,0)"  top={450} left={620}/>
        </div>
    )
}

export default NavTable;