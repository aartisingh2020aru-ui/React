import { useContext } from "react";
import { MyContext } from "./MyContext";

function Child(){
    const name = useContext(MyContext);

    return(
        <h3>Welcome {name} </h3>
    );
}

export default Child;