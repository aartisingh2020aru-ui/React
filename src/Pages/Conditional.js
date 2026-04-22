import React from "react";

function Conditional(){

    const message = true;
    // let userlogin = false;
    // let loginuser = true;

    // if (loginuser){
    //     return <h5>Welcome User....!</h5>
    // }else{
    //     return <h5>Please Login....!</h5>
    // }

    // return (
    //     <div>
    //         {userlogin ? <h5>welcome user</h5>: <h5>jake login kar..!</h5>}
    //     </div>
    // );

    return(
        <div>
            {message && <h4>You have new message</h4>}
        </div>
    );
}

export default Conditional;