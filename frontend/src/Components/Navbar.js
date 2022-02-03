import React, { useState } from "react";
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

export default function Header() {
    const [openNavbar, setOpenNavbar] = useState(false);

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
                                {/* <Dropdown
                                color="transparent"
                                placement="bottom-start"
                                buttonText={
                                    <div className="flex items-center text-xs uppercase">
                                    <Icon name="work" size="2xl" />
                                    &nbsp;Projects
                                </div>
                                }
                                size="regular"
                                rounded={false}
                                block={false}
                                ripple="light"
                            >
                                <DropdownItem color="green" ripple="light">
                                    Latest Projects
                                </DropdownItem>
                                <DropdownLink
                                    href="#"
                                    color="green"
                                    ripple="light"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Proposals
                                </DropdownLink>
                            </Dropdown> */}
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
                            <Link to="/profile">
                                <NavLink href="/navbar" ripple="light">
                                    <Icon name="account_circle" size="xl" />
                                    Profile
                                </NavLink>
                            </Link>
                        </Nav>
                        <NavbarInput type="text" placeholder="Search here" />
                    </NavbarCollapse>
                </NavbarContainer>

            </Navbar>
        </>
    );
}