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
import NavbarInput from "@material-tailwind/react/NavbarInput";
import Icon from "@material-tailwind/react/Icon";
import Dropdown from "@material-tailwind/react/Dropdown"
import DropdownItem from "@material-tailwind/react/DropdownItem"
import DropdownLink from "@material-tailwind/react/DropdownLink"
import { Link } from "react-router-dom";
import { Context } from "../Context/AuthContext";
import { useSelector } from "react-redux";

export default function Header() {

    const [openNavbar, setOpenNavbar] = useState(false);
    const { isAuthenticated, user } = useSelector((state) => state.getUserReducer);

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
                            <Link to="/qa">
                                <NavItem href ripple="light">
                                    <Icon name="question_mark" size="xl" />
                                    Q&#38;A
                                </NavItem>
                            </Link>
                            <Link to="/projects">
                                    <NavItem ripple="light">
                                        <Icon name="work" size="xl" />
                                        Projects
                                    </NavItem>
                            </Link>
                            <Link to="/coding">
                                <NavItem ripple="light">
                                    <Icon name="code" size="xl" />
                                    Coding Questions
                                </NavItem>
                            </Link>
                            <Link to={user ? "/Profile" : "/login"}>
                                <NavLink href="/navbar" ripple="light">
                                    <Icon name="account_circle" size="xl" />
                                    { user ? user?.name : "Login" } 
                                </NavLink>
                            </Link>
                            <Link to={user ? "/Profile" : "/login"}>
                                <NavLink href="/navbar" ripple="light">
                                    Logout
                                </NavLink>
                            </Link>
                        </Nav>
                    </NavbarCollapse>
                </NavbarContainer>

            </Navbar>
        </>
    );
}