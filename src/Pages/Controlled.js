// import React,{useState} from "react";

// function Controlled(){
//     const [name, setName] = useState("");

//     return(

//         <div>
//             <input type="text" 
//                     value={name} 
//                     onChange={(e)=> setName(e.target.value)}  
//                     placeholder="enter your name"
//             />

//             <h3>Your Name is: {name}</h3>
//         </div>
//     );
// }

// -------------------------------------------------------------------------


import React, {useRef} from "react";

function Controlled(){
    const inputRef = useRef();

    const handleSubmit = ()=>{
        alert(inputRef.current.value);
    };


    return (
        <div>
            <input type="text"  ref={inputRef}/>
            <button onClick={handleSubmit}> Submit </button>
        </div>
    );
}

export default Controlled;