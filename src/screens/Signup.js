import React,{useState} from 'react';
import Navbar from "../components/Navbar";
import {Link} from "react-router-dom";

export default function Signup() {
    const [credential, setCredential] = useState({name:"",email:"",password:"",location:""});

    const handleSubmit=async(e)=>{
         e.preventDefault();
         console.log(JSON.stringify({name:credential.name,
            email:credential.email,
            password:credential.password,
            location:credential.location}))
         
         const response=await fetch("https://food-o9yj.onrender.com/api/createuser",{
           method:"POST",
           headers:{
            'Content-type':'application/json'
           },
           body:JSON.stringify({name:credential.name,
            email:credential.email,
            password:credential.password,
            location:credential.location}
           )
         })
         const json=await response.json();
         console.log(json);

         if(!json.success){
            alert("enter vlidate crenditial")
         }
         
    }

    const onChange=(ev)=>{
        setCredential({...credential,[ev.target.name]:ev.target.value})
    }

  return (
    <div>

  <Navbar/>

        <div className="container mt-4">
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" name='name' value={credential.name} onChange={onChange} aria-describedby="emailHelp" />
            </div>

  <div className="mb-3">
    <label  htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={credential.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div className="mb-3">
    <label  htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' value={credential.password} onChange={onChange} id="exampleInputPassword1"/>
  </div>
  
  <div className="mb-3">
    <label  htmlFor="exampleInputPassword1" className="form-label">Address</label>
    <input type="text" className="form-control" name='location' value={credential.location} onChange={onChange} id="exampleInputPassword1"/>
  </div>

  <button type="submit" className="m-3 btn btn-success">Submit</button>
  <Link to="/Login" className="m-3 btn btn-danger">Already User</Link>
</form>
        </div>
    </div>
  )
}
