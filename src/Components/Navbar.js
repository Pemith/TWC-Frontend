import { Link,NavLink } from "react-router-dom";
import "../CSS/navbar.css";
import React from "react";

const Navbar = () => {

  return (
    <>
      <nav className="navbar">

      <Link to="/"><h2>Careers</h2></Link>         
        
      </nav>
    </>
  );
};

export default Navbar;