import React, {useState} from "react";

function Counter(){

    const [state, setState] = useState(0);

    function click(){
        alert("Daba Diya ....!");
    }

    const [name, setName] = useState("");

    return(
        <div>
        <p>{state}</p>
        <button onClick={()=> setState(state + 1)}>+ increase</button> <br/><br/>
        <button onClick={click}> Click Me</button><br/><br/>

        <input type="text" onChange={(e)=> setName(e.target.value)} placeholder="Enter your name"></input>
        <h5>{name}</h5>
        </div>
    );
}

export default Counter;