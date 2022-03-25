import "../CSS/applicant.css";

import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Navbar from "../Components/Navbar";
import axios from 'axios';
import { toast } from "react-toastify";


const ApplicantForm = () => {

    const {id}=useParams();
    const [job,setJob]=useState();
    const [fullName,setfullName]=useState();
    const [email,setEmail]=useState();
    const [mobile,setMobile]=useState();

    useEffect(() =>{
        fetch(('http://localhost:3900/career/jobs/'+id),{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(async response =>{
            try {
                const data=await response.json();
                // console.log('response data',data);
                return data;
            } catch (error) {
                console.log(error.message);
            }
        })
        .then(data =>{
            setJob(data);
        })
        .catch((error)=>{
            console.log(error.message);
        })
            
    },[]);

    const handleSubmit = (e) =>{

        e.preventDefault();

        try {
            axios.post("http://localhost:3900/career/register",{
                fullName:fullName,
                email:email,
                mobile:mobile
            })
            .then((response) =>{
                console.log(response);
                window.location="/";
            },
            (error)=>{
                console.log(error);
                let errorMessage=error.response.data;
                toast.error(errorMessage);
            })
            .catch((err) =>{
                console.log(err);
            })
        } catch (error) {
            console.log(error.error);
        }   
    }


    return ( 

        <div className="applicant">
            <Navbar/>
            <article>
                <h1>Apply Here</h1>
                <h1>Job Description: {job&&job.description}</h1><br/>
            </article>
            <div className="applicantBox">
                <div className="formstyle">
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            placeholder="Enter the Full Name"
                            required 
                            value={fullName}
                            onChange={e=>setfullName(e.target.value)}
                        />
                        <input 
                            type="text"
                            placeholder="Email"
                            required 
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                        />
                        <input 
                            type="text"
                            placeholder="Mobile Number"
                            required
                            value={mobile}
                            onChange={e=>setMobile(e.target.value)}
                        />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default ApplicantForm;