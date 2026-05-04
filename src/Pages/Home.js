import React from "react";
import { useState } from "react";

import './Home.css';

 
function Home(props){
    return(
        <>
        <h4>HOME PAGE!</h4>
        <h5>Welcome...{props.Name}, {props.Age}</h5>

        </>
    );
}

export default Home;