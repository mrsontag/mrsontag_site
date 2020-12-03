import React, {useState } from 'react';
import styles from './navcell.module.css';
import { useNavigate } from '@reach/router';

const NavCell = props => {
    const Navigate = useNavigate();
    const [expand, setExpand] = useState(false);
    const [styletext, setStyletext] = useState({
        backgroundColor: props.backgroundColor,
        color: props.fontColor,
        top: props.top,
        left: props.left,
    })
    
    const onClick = () => {
        setStyletext({
            ...styletext,
            color:  expand ? props.fontColor : "white",
            backgroundColor: expand ? props.backgroundColor : "rgb(0,0,45)",
            top: expand ? props.top : 0,
            left: expand ? props.left : 0,
        })
        setExpand(!expand);
        
    }



    return (
        <div className={`${styles.navcell} ${expand ? styles.navcell_expanded : styles.navcell_small}`} style={styletext} onClick={onClick}>
            <div className={`${styles.heading} ${expand ? styles.heading_transparent : null}`}>
                <h1>{props.text}</h1>
            </div>
            <div className={`${styles.content} ${!expand ? styles.content_transparent : null}`}>
                {props.children}
            </div>
        </div>
    )
}

export default NavCell;

//() => props.link ? Navigate(`${props.link}`) : null