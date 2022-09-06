import { Link, Outlet } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import ListGroupItem from "react-bootstrap/ListGroupItem";

function NavBar() {

    return (
        <>
            <Nav>
                <ListGroupItem>
                    <Link to="/">Home</Link>
                </ListGroupItem>
                <ListGroupItem>

                </ListGroupItem>
            </Nav>
            <Outlet></Outlet>
        </>
    )

}

export default NavBar;