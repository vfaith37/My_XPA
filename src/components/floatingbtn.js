/* eslint-disable jsx-a11y/anchor-is-valid */
import 'bulma/css/bulma.min.css'
import { useState } from 'react';
export default function FloatingBtn(){
    const [isActive, setisActive] = useState(false);
    return(
        <>
        <a href="#" 
        onClick={() => {
            setisActive(!isActive);
        }}
        className={`button is-link is-floating is-centered is-transparent ${isActive ? "is-active" : ""}`} 
        style={{background: "#1C3E70"}}>
        <i className="fas fa-arrow-down"></i>
        </a>
        <a className="navbar-item">
                {/* <FaHome /> */}
                <span>Add Bookshelf</span>
                {/* </Route> */} </a>

        </>
    )
}