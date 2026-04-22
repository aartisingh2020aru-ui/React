import React from "react"; 

function Ternary(){

    const login = false;

    return(
        <div>
            {login ? <h5>Welcome back ...</h5> : <h5> login kar le..</h5>}
        </div>
    );
}

export default Ternary;