import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
        <>
       <p>Header page</p>
        <h3>
            <Link to="/">Home </Link>
            <Link to="/about"> About</Link>
            <Link to="/user/:id"> Child</Link>
            <Link to="/studentlist"> Studentlist</Link>
            <Link to="/hooks"> Hooks</Link>
        </h3>
        </>

    );
}

export default Header;