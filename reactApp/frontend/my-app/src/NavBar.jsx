import { Link, Outlet } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { useState } from "react";

function NavBar() {

    const [currentPage, setCurrentPage] = useState(window.location.pathname);

    const COUNTER = "counter";
    const getSessionCount = () => {
        const sessionCount = sessionStorage.getItem(COUNTER);
        if (sessionCount !== null) {
            return Number(sessionCount);
        }
        else {
            sessionStorage.setItem(COUNTER, 0);
            return 0;
        }
    }

    const incrementCounter = () => {
        const newCounter = getSessionCount() + 1;
        sessionStorage.setItem(COUNTER, newCounter);
    }

    const clearCounter = () => {
        // sessionStorage.clear();
        sessionStorage.removeItem(COUNTER);
        // sessionStorage.setItem(COUNTER, null);
    }

    return (
        <>
            <button onClick={incrementCounter} >Increment counter</button>
            <button onClick={() => { alert(getSessionCount()) }}>Show count</button>
            <button onClick={clearCounter}>Clear counter</button>
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