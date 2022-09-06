import { Link, Outlet } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { useState } from "react";

function NavBar() {

    const [currentPage, setCurrentPage] = useState(window.location.pathname);

    return (
        <>
            <Nav>
                <ListGroupItem className={currentPage === "/" ? "list-group-item-active" : ""} >
                    <Link to="/" onClick={() => { setCurrentPage("/") }}>Home</Link>
                </ListGroupItem>
                <ListGroupItem className={currentPage === "/createCustomer" ? "list-group-item-active" : ""} >
                    <Link to="/createCustomer"
                        onClick={() => { setCurrentPage("/createCustomer") }}>Create</Link>
                </ListGroupItem>
            </Nav>
            <Outlet></Outlet>
        </>
    )

}

export default NavBar;