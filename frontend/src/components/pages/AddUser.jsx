import axios from "axios";
import React  from "react";
import {useNavigate } from "react-router-dom";

function AddUser()
{
    const [name ,setName] = React.useState("");
    const [email ,setEmail] = React.useState("");
    const navigate = useNavigate();
    const sendData =(e)=>
    {
        e.preventDefault();
        const newUser = 
        {
        Name :name,
        Email :email
        }

        axios.post("http://localhost:3000/v1/add",newUser)
        .then(()=>{
            setName("")
            setEmail("")
            navigate('/')
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
  

    return (

        <form onSubmit={sendData}>
            <h1 className='text-3xl my-4'>ADD Data</h1>
        <div><input type="text"
        value={name}
        placeholder="enter your name"
        onChange={(e)=>setName(e.target.value)} /></div>

        <div>
        <input type="text"
        value={email}
        placeholder="enter your email"
        onChange={(e)=>setEmail(e.target.value)} />
        </div>
        
        <button>
            Submit
        </button>
        
        </form>
    )


}

export default AddUser;