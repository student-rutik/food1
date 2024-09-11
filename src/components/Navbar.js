import React,{useState} from 'react'
import {Link,useNavigate} from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Modal from '../Modal';
import Card from '../screens/Card';
import {useCart } from "../components/ContextReducer";

export default function Navbar() {

  let data=useCart();

  const [cartview, setCartview] = useState(false);

  const navigate=useNavigate();
  const handleLout=()=>{
    localStorage.removeItem("authToken")
      navigate("/login")
  }


  return (
    <div >
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            {
              (localStorage.getItem("authToken"))?
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/myorder">My Orders</Link>
            </li>:"" }
            
          </ul>

          {/* {
             (!localStorage.getItem("authToken"))?
            <div className="d-flex">
            <Link className="btn bg-white text-success mx-1" to="/login">Logn</Link>
            <Link className="btn bg-white text-success mx-1" to="/signup">Signup</Link>
            </div>
            :
            <div>
             <div className="btn bg-white text-success mx-2">
                My Cart
            </div>

              <div className="btn bg-white text-danger mx-2"  onClick={handleLout}>
                Logout
            </div>
            </div>
          } */}

            
           {
             (localStorage.getItem("authToken"))?
            <div className="d-flex">
               <div>
             <div className="btn bg-white text-success mx-2" onClick={()=>{setCartview(true)}}>
                My Cart {" "}
                <Badge pill bg="danger">{data.length}</Badge>
            </div>
            
            {
                cartview?<Modal onClose={()=>setCartview(false)}> <Card/> </Modal>:null
            }

              <div className="btn bg-white text-danger mx-2"  onClick={handleLout}>
                Logout
            </div>
            </div>

            
            </div>
            :
            <div>
              <Link className="btn bg-white text-success mx-1" to="/login">Logn</Link>
              <Link className="btn bg-white text-success mx-1" to="/signup">Signup</Link>
            </div>
          }
           
        </div>
      </div>
    </nav>
</div>
  )
}
