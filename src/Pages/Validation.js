import React,{useState} from "react";

function Validation(){
    const [form, setForm] = useState(
        {
            name: "",
            email:"",
            password:""
        }
    );

    const [error, setError] = useState("");

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = (e)=>{
        e.preventDefault();

        if(form.name === "" ||  form.email === "" || form.password === ""){

            setError("All fields are required");
        }else if(!form.email.includes("@")){
            setError("Invalid email");
        }else if(form.password.length < 6){
            setError("password must be at least 6 characters");
        }else{
            setError("");
            alert("Registration Successful");
        }
    };



    return(

        <>
        <form onSubmit={handleSubmit}>
            <h3>Register</h3>


            <input
                type="text"
                name="name"
                placeholder="enter your name"
                value={form.name}
                onChange={handleChange}
            />


            <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
            />


            <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
            />


            <button type="submit">Register</button>

            {error && <p style={{color: "purple"}}> {error}</p>}
        </form>
        </>
    );
}


export default Validation;
