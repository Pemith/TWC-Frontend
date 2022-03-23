import { useState } from 'react';
import { Redirect,useHistory } from 'react-router-dom';
import '../CSS/signup.css';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { toast } from "react-toastify";


const Login = () => {

    const tokenKey="token";
    const adminLocalId="adminId";
    const isLoggedIn="isLoggedIn";
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [data]=useState("");
    const history=useHistory();

    setJwt(getJwt());

    function setJwt(jwt){
        axios.defaults.headers.common['x-auth-token']=jwt;
    }

    function getJwt(){
        return localStorage.getItem(tokenKey);
    }

    function getCurrentUser(){
        try {
            const jwt=localStorage.getItem(tokenKey);
            return jwtDecode(jwt);
        } catch (error) {
            return null;
        }
    }

    const handleSubmit = (e) =>{

        e.preventDefault();

        try {
            axios.post("http://localhost:3900/admin/login/",{
                email:email,
                password:password
            })
            .then((response) =>{
                console.log(response);

                let response1=response.headers;
                let response2=Object.values(response1);
                let response3=response2[2];

                let data1=response.data;
                let data2=Object.values(data1);
                let data3=data2[2];

                let adminId=data2[0];
                // console.log("adminId",adminId);
                localStorage.setItem(tokenKey,response3);
                localStorage.setItem(isLoggedIn,true);
                localStorage.setItem(adminLocalId,adminId);

                window.location.reload();
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

    const adminIdCurrent=localStorage.getItem(adminLocalId);
    if(getCurrentUser()){
        return <Redirect to={`/dashboard/${adminIdCurrent}`}/>
    }


    return ( 
        <div className="signup">
            <div className="boxreg">
                <div className="formstyle">
                    <h1>Admin Login</h1>

                    <form onSubmit={handleSubmit}>
                        <input 
                            type="email"
                            required
                            placeholder='Email'
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                        />

                        <input 
                            type="password"
                            required
                            placeholder='Password'
                            value={password}
                            onChange={e => setPassword(e.target.value)} 
                        />

                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Login;