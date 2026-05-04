import React from "react";

function Studentlist(){
  
    const users = [
        {id:1, name:"Aarti"},
        {id:2, name:"Anjali"},
        {id:3, name:"Deep"}, 
        {id:4, name:"Sallu"},
        {id:5, name:"Dua"},
        {id:6, name:"Disha"},
        {id:7, name:"Anant"}, 
        {id:8, name:"DSTD"}
    ];

    // const students = ["Aarti" , "Anjali", "Sarthak", "Vishal"];
    // return (
    //     <ol>
    //         {students.map((name)=>(
    //             <li>{name}</li>
    //         ))}
    //     </ol>
    // );

    return(
        <ul>
            {users.map((user)=>(
                <li key={user.id}> {user.name} </li>
            ))}
        </ul>
    );
}

export default Studentlist;  