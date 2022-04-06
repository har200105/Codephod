import React, { useContext, useState } from "react";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavItem from "@material-tailwind/react/NavItem";
import NavLink from "@material-tailwind/react/NavLink";
import Icon from "@material-tailwind/react/Icon";
import { Link } from "react-router-dom";
import { Context } from "../Context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { loadUser } from "../Redux/Actions/userAction";
import {useNavigate } from 'react-router-dom';

export default function Header() {

    const [openNavbar, setOpenNavbar] = useState(false);
    const { isAuthenticated, user } = useSelector((state) => state.getUserReducer);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const logout = async () => {
        localStorage.removeItem("jwt");
        dispatch(loadUser());
        navigate("/");
    }

    return (
        <>
            <Navbar color="green" navbar>
                <NavbarContainer>
                    <NavbarWrapper>
                        <Link to="/">
                            <NavbarBrand>Codephod</NavbarBrand>
                        </Link>
                        <NavbarToggler
                            color="white"
                            onClick={() => setOpenNavbar(!openNavbar)}
                            ripple="light"
                        />
                    </NavbarWrapper>

                    <NavbarCollapse open={openNavbar}>
                        <Nav rightSide>
                            <Link to="/">
                                <NavItem ripple="light">
                                    <Icon name="home" size="xl" />
                                    Home
                                </NavItem>
                            </Link>
                            {/* <Link to="/qa">
                                <NavItem href ripple="light">
                                    <Icon name="question_mark" size="xl" />
                                    Q&#38;A
                                </NavItem>
                            </Link> */}
                            <Link to="/projects">
                                    <NavItem ripple="light">
                                        <Icon name="work" size="xl" />
                                        Projects
                                    </NavItem>
                            </Link>
                            <Link to="/coding">
                                <NavItem ripple="light">
                                    <Icon name="code" size="xl" />
                                    Coding
                                </NavItem>
                            </Link>
                            <Link to={user ? "/Profile" : "/login"}>
                                <NavLink href="/navbar" ripple="light">
                                    <Icon name="account_circle" size="xl" />
                                    { user ? user?.name : "Login" } 
                                </NavLink>
                            </Link>
                            {
                                user &&
                            <Button onClick={()=>logout()} >
                                <NavLink ripple="light">
                                    Logout
                                </NavLink>
                                </Button>
                            }
                        </Nav>
                    </NavbarCollapse>
                </NavbarContainer>
            </Navbar>
        </>
    );
}