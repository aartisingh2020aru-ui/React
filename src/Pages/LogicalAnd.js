import React from "react";

function LogicalAnd(){
    const message = true;

    return(
        <div>
            {message && <h6>You have new message</h6>}
        </div>
    );
}

export default LogicalAnd;