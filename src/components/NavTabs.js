import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.min.css";

function NavTabs({ currentPage, handlePageChange }) 
{
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"} >Home</Nav.Link>
            <Nav.Link href="#about" onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}>About</Nav.Link>
            <Nav.Link href="#contact"  onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      

     
    </>
  );
}
// {
//   return (
//     <ul className="nav nav-tabs">
//       <li className="nav-item">
//         <a
//           href="#home"
          // onClick={() => handlePageChange("Home")}
          // className={currentPage === "Home" ? "nav-link active" : "nav-link"}
//         >
//           Home
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#about"
          // onClick={() => handlePageChange("About")}
          // className={currentPage === "About" ? "nav-link active" : "nav-link"}
//         >
//           About
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#projects"
//           onClick={() => handlePageChange("Projects")}
//           className={currentPage === "Projects" ? "nav-link active" : "nav-link"}
//         >
//           Projects
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#contact"
          //onClick={() => handlePageChange("Contact")}
          //className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
//         >
//           Contact
//         </a>
//       </li>
//     </ul>
//   );
  
// }

export default NavTabs;
