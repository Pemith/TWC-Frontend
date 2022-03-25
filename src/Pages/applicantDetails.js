import "../CSS/applicant.css";

import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Navbar from "../Components/Navbar";

const ApplicantDetails = () => {

    const {id}=useParams();
    const [applicant,setApplicant]=useState(null);
    const token=localStorage.getItem('token');

    useEffect(() =>{
        fetch(('http://localhost:3900/career/applicants/'+id),{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'x-auth-token':token
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
            setApplicant(data);
        })
        .catch((error)=>{
            console.log(error.message);
        })
            
    },[]);

    // try {
    //     console.log(applicant);
    // } catch (error) {
    //     console.log(error.message);
    // }
    return ( 
        
        <div className="applicant">
            <Navbar/>
            <div className="applicantBox">
                {/* <h1>Hi</h1><br/> */}

                <article>
                    <h1>Applicant Name: {applicant && applicant.fullName}</h1>
                    <h1>Email: {applicant && applicant.email}</h1>
                    <h1>Mobile: {applicant && applicant.mobile}</h1>
                </article>

            </div>
        </div>
    );
}
 
export default ApplicantDetails;