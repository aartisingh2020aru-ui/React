import React,{useState} from "react";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(email === "" || password === ""){
            alert("All fields are required!");
        }else{
            alert("Login Successfully");
        }
    };


    return(
        <form onSubmit={handleSubmit}>
            <h2>Login Form</h2>


            <input type="email" 
                    placeholder="enter your email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
            />

            <input type="password" 
                    placeholder="enter password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
            />


            <button type="submit">Login</button>

        </form>
    );
}


export default Login;