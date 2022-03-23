import { Link,useHistory } from "react-router-dom";
import "../CSS/navbar.css";
import React from "react";

const Navbar = () => {

  const history=useHistory();
  const tokenKey="token";
  const isLoggedIn="isLoggedIn";
  const clientLocalId="clientId";
  const adminLocalId="adminId";

  const loggedIn=localStorage.getItem(isLoggedIn);
  const adminIdCurrent=localStorage.getItem(adminLocalId);
  
  const login = (e) =>{
    history.push('/login');
  };

  const logOut= (e) =>{
    localStorage.removeItem(tokenKey);
    localStorage.removeItem(isLoggedIn);
    localStorage.removeItem(clientLocalId);

    window.location='/';
  }
  return (
    <>
      <nav className="navbar">

      {!loggedIn && (
        
        <React.Fragment>
          <Link to="/"><h2>ABC Innovations</h2></Link>
            <ul>
              <li>
                <button onClick={login}>Log In</button>
              </li>
          </ul> 
        </React.Fragment>   
      )}

      {loggedIn && (

        <React.Fragment>
          <Link to={'/dashboard/'+adminIdCurrent}><h2>ABC Innovations</h2></Link>
          <ul>
            <li>
              <button onClick={logOut}>Log Out</button>
            </li>
          </ul> 
        </React.Fragment>
      )}

      </nav>
    </>
  );
};

export default Navbar;