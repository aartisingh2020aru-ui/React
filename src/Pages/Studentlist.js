import React from "react";

function Studentlist(){
  
    const users = [{id:1, name:"Aarti"}, {id:2, name:"Anjali"}];

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