import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const UpdateUser = () => {
  const [name ,setName] = React.useState("")
  const [email ,setEmail] = React.useState("")
  const [id ,setId] = React.useState("")
  const navigate = useNavigate();

  useEffect(()=>{
      setName(localStorage.getItem("name"))
      setEmail(localStorage.getItem("email"))
      setId(localStorage.getItem("id"))
  },[])

const updateData =(e)=>{
      e.preventDefault()
      const newUser ={
        Name:name,
        Email:email
      }  
      axios.put(`http://localhost:3000/v1/update/${id}`,newUser)
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
    
    <form onSubmit={updateData}>
    <h1 className='text-3xl my-4'>ADD Data</h1>
  <div><input type="text"
    value={name}
  placeholder="enter your name"
  onChange={(e)=>setName(e.target.value)} /></div>

  < div>
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

export default UpdateUser