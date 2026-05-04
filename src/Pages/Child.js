import { useContext } from "react";
import { MyContext } from "./MyContext";
import { useParams } from "react-router-dom";

function Child(){
    const name = useContext(MyContext);

    const {id} = useParams();


    return(
        <>
        <p>user id: {id}</p>
        <h3>Welcome Child page. {name} </h3>
        </>
    ); 
}

export default Child;  