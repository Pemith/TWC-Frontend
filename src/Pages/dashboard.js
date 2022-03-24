import "../CSS/home.css";
import Navbar from "../Components/Navbar";
import {Link} from 'react-router-dom';
import { useEffect, useState } from "react";

import ApplicationList from "./applicationList";
const Dashboard = () => {

    const [applicants,setApplicants]=useState(null);

    const addRole = (e) =>{
        window.location='/addrole';
    }

    useEffect(() =>{
        fetch('http://localhost:3900/career/applicants',{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(async response =>{
            try {
                const data=await response.json();
                // console.log('response data',data);
                return data
            } catch (error) {
                console.log(error.message);
            }
        })
        .then(data =>{
            setApplicants(data);
        })
        .catch((error)=>{
            console.log(error.message);
        })
    },[]);
    return ( 
        
        <div className="home">
            <Navbar/>
            <h2>Applicants who applied for the vacancies</h2>
            <h2>{applicants && <ApplicationList applicants={applicants}/>}</h2>
            <button onClick={addRole}>Add Job Role</button>
        </div>
     );
}
 
export default Dashboard;