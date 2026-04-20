import React from "react";

function Header(props){
    return(
        <>
        <p>Hello this is REACT!</p>
        <p>hii this is somthing!</p>
        <h2>Welcome{props.Name}, {props.Age}</h2>
        </>

    );
}

export default Header;