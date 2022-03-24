import { useState } from 'react';
import { Redirect,useHistory } from 'react-router-dom';
import '../CSS/signup.css';
import Navbar from "../Components/Navbar";
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { toast } from "react-toastify";

const Addrole = () => {

    const [role,setRole]=useState();
    const [description,setDescription]=useState();
    
    const adminLocalId="adminId";
    const adminIdCurrent=localStorage.getItem(adminLocalId);

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        try {
            axios.post("http://localhost:3900/career/job",{
                role:role,
                description:description
            })
            .then(
                (response) => {
                    console.log(response);
                    window.location="dashboard/"+adminIdCurrent;
                },
                (error) =>{
                    let errorMsg=error.response.data;
                    console.log(errorMsg);
                    toast.error(errorMsg);
                    
                }
            )
            .catch((error)=>{
                console.log(error.message);
            })
        } catch (error) {
            console.error(error.message);
            toast.error(error.message);
        }
    }

    return ( 
        <div className="signup">
            <Navbar/>
            <div className="boxreg">
                <div className="formstyle">
                    <h1>Add Job Role</h1>
                    <form onSubmit={handleSubmit}>
                        <input 
                        type="text"
                        required
                        placeholder='Enter the Job Role Here'
                        value={role}
                        onChange={e => setRole(e.target.value)} />

                        <input 
                        type="text"
                        required
                        placeholder='Enter the Description'
                        value={description}
                        onChange={e => setDescription(e.target.value)} />

                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Addrole;
