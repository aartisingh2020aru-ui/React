import { useContext } from "react";
import { MyContext } from "./MyContext";
import { useParams } from "react-router-dom";

function Child(){
    const name = useContext(MyContext);

    const {id} = useParams();


    return(
        <>
        <p>user id: {id}</p>
        <h5>Welcome {name} </h5>
        </>
    ); 
}

export default Child;  