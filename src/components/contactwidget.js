import React from 'react';
import github from '../images/github.png';
import styles from "./contactwidget.module.css";
import email from '../images/email.png';
import linkedin from "../images/linkedin.png";

const LogoLink = props => {
    const radian = props.angle / 360 * 2 * Math.PI;

    const left = props.radius - Math.sin(radian) * props.radius + 10
    const top = props.radius - Math.cos(radian) * props.radius  + 10

    return( 
        <div className={styles.linkicon} style={{
            top: top +"px",
            left: left + "px",
        }}>
            <a href={props.link} target="_blank">
                <div name={props.name} style={{textAlign:"center"}}>
                    <img src={props.image} style={{height: props.radius * 1.3333, display:"table-cell", verticalAlign: "middle"}}alt={props.alt}/>
                </div>
            </a>
        </div>
    )
}

const ContactWidget = props => {
    const {diam = 60} = props;

    return (
        <div className={styles.container}>
            <div className={styles.line} style={{display: "none", position: "absolute", top: diam / -5, left: diam / -5, width: diam, height: diam, border: "1px solid black",borderRadius: diam/2, margin: diam / 2 }}></div>
            <LogoLink link="https://www.github.com/mrsontag" name="Github" image={github} alt="Github" angle={0} radius={diam/2}/>
            <LogoLink link="mailto:mrsontag@gmail.com" name="EMail" image={email} alt="Email" angle={120} radius={diam/2} />
            <LogoLink link="https://www.linkedin.com/in/mrsontag" name="Github" image={linkedin} angle={240} radius={diam/2} />
        </div>  
    )
}

export default ContactWidget;
