// import React,{useEffect, useState} from "react";

// function Hooks(){
//     useEffect(()=>{
//         console.log("Page loaded!");
//     },[]);

//     return<h3>HELLOOO</h3>;
// }


// ------------------------------------------------------------------

// import React,{useEffect, useState} from "react";

// function Hooks(){
//     const [count, setCount] = useState(0);

//     useEffect(()=>{
//         console.log("Count update:", count);
//     }, [count]);


//     return(
//         <div>
//             <h3>{count}</h3>
//             <button onClick={()=> setCount(count+1)}>increase</button>
//         </div>
//     );
// }

// -------------------------------------------------------------------------

// import React,{useRef} from "react";

// function Hooks(){
//     const inputRef = useRef();

//     const focusInput = () =>{
//         inputRef.current.focus();
//     };


//     return(
//         <div>
//             <input ref={inputRef} type="text"/>
//             <button onClick={ focusInput}> focus input</button>
//         </div>
//     );
// }

// --------------------------------------------------------------------------

import React, {useState, useEffect} from "react";

    function Hooks(){
        const [users, setUsers] = useState([]);

        useEffect(()=>{
            fetch("https://jsonplaceholder.typicode.com/users")
            .then((res)=> res.json())
            .then((data)=> setUsers(data));
        },[]);

        return(
            <div>
                <h2>User List</h2>

                <ol>
                {users.map((user)=>(
                    <li key={user.id}> {user.name}</li>
                ))}
                </ol>
            </div>

        );
    }

export default Hooks;