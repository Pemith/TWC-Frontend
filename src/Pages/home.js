import "../CSS/home.css";
import Navbar from "../Components/Navbar";
import {Link} from 'react-router-dom';
import { useEffect, useState } from "react";
import JobList from "./jobList";

const Home = () => {


    const [jobs,setJobs]=useState(null);

    useEffect(() =>{
        fetch('http://localhost:3900/career/jobs',{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(async response =>{
            try {
                const data=await response.json();
                // console.log('response data', data);
                return data;
            } catch (error) {
                console.log("Error Occured");
                console.log(error);
            }
        })
        .then(data => {
            setJobs(data);
        })
        .catch((error) =>{
            console.log(error);
        });
            
    },[]);

    // try {
    //     console.log('Job roles',jobs);
    //     console.log(jobs.length);
    // } catch (error) {
    //     console.log(error.message);
    // }
    return ( 

        <div className="home">
            <Navbar/>
            <h1>ABC Careers</h1>
            <pre>{`Our company is tech comany which is mainly providing SaaS and PaaS for the clients. Mainly we are dealing with 
            the clients all over the world. We have a great culture in our company. There are no bosses in here, 
            We are simply teamed as startup group, where each person is accountable for different 
            part in a project.`}
            </pre>

            <h2>{jobs && <JobList jobs={jobs}/>}</h2>
                
             
        </div>
     );
}
 
export default Home;