/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './bookicon.css'

function Bookicon() {
return (
    <div>
    <figure className="image">
        <img src={require("./img/bookshelf.png")}></img>
    </figure>
    </div>
);
}

export default Bookicon;
