import {useState ,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Home = () => {
  const [data, setData] = useState([]);
  
  function getData(){
    axios
      .get('http://localhost:3000/v1/users')
      .then((response) => {
        setData(response.data.data.data)
        
      })
      .catch((error) => {
        alert(error.message)
      });
  }


    
    function handleDeletUser(id){
      
        axios
            .delete(`http://localhost:3000/v1/delete/${id}`)
            .then((response)=>{
              console.log(response)
              getData();
            
                
                
            })
            .catch((err)=>{
              console.log(err.message)
            })

    }

  function setLocalStorage(id ,name,email){
        localStorage.setItem("id",id)
        localStorage.setItem("name",name)
        localStorage.setItem("email",email)

  }


    useEffect(()=>{
      getData();
  },[])

  return (
    <>
        <h1 className='text-3xl my-4'>Show User Data</h1>
        
        <br />
        <Link to='/add'>
          ADD DATA
        </Link>
        <br />
        
        <ul>
                {data.map((user)=>(
                    <li key = {user._id}>
                        <div className='flex justify-center gap-x-4'>{user.Name }   {user.Email} </div>
                        <div className='flex justify-center gap-x-4'>
                
                        <button onClick={()=>handleDeletUser(user._id)}>
                        DELETE
                        </button>
                        <Link to="/update">
                        <button onClick={()=>setLocalStorage(user._id,user.Name ,user.Email)}>
                        UPDATE
                        </button>
                        </Link>
                        </div>
                    </li>
                  
                  ))}

            </ul>
        
        
     
    </>
       

    
  );
};

export default Home;
