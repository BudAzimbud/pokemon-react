import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    UncontrolledTooltip,
    Form,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
} from "reactstrap";

function NavbarHome() {
    const [collapseOpen, setCollapseOpen] = React.useState(false);

    return (
        <>
            {collapseOpen ? (
                <div
                    id="bodyClick"
                    onClick={() => {
                        document.documentElement.classList.toggle("nav-open");
                        setCollapseOpen(false);
                    }}
                />
            ) : null}
            <Navbar className="fixed-top" color="info" expand="lg">
                <Container >

                    <UncontrolledDropdown className="button-dropdown">
                        <DropdownToggle
                            caret
                            data-toggle="dropdown"
                            href="#pablo"
                            id="navbarDropdown"
                            tag="a"
                            onClick={(e) => e.preventDefault()}
                        >
                            <span className="button-bar"></span>
                            <span className="button-bar"></span>
                            <span className="button-bar"></span>
                        </DropdownToggle>
                        <DropdownMenu aria-labelledby="navbarDropdown">
                            <DropdownItem header tag="a">
                                Dropdown header
                            </DropdownItem>
                            <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                                Action
                            </DropdownItem>
                            <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                                Another action
                            </DropdownItem>
                            <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                                Something else here
                            </DropdownItem>
                            <DropdownItem divider></DropdownItem>
                            <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                                Separated link
                            </DropdownItem>
                            <DropdownItem divider></DropdownItem>
                            <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                                One more separated link
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <div className="navbar-translate">
                        <NavbarBrand
                            href="https://demos.creative-tim.com/now-ui-kit-react/index?ref=nukr-examples-navbar"
                            target="_blank"
                            id="navbar-brand"
                        >
                            Media Konsumen
                        </NavbarBrand>
                        <UncontrolledTooltip target="#navbar-brand">
                            Designed by PT Sopwer Teknologi Indonesia
                        </UncontrolledTooltip>
                        <button
                            className="navbar-toggler navbar-toggler"
                            onClick={() => {
                                document.documentElement.classList.toggle("nav-open");
                                setCollapseOpen(!collapseOpen);
                            }}
                            aria-expanded={collapseOpen}
                            type="button"
                        >
                            <span className="navbar-toggler-bar top-bar"></span>
                            <span className="navbar-toggler-bar middle-bar"></span>
                            <span className="navbar-toggler-bar bottom-bar"></span>
                        </button>
                    </div>
                    <Collapse
                        className="justify-content-end"
                        isOpen={collapseOpen}
                        navbar
                    >

                        <Nav navbar>
                            <NavItem>
                                <Form data-background-color="" onSubmit={(event) => {
                                    event.preventDefault()
                                }}>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="Search..." type="text"></Input>
                                    </InputGroup>
                                </Form>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/index" tag={Link}>
                                    KIRIM SURAT
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/index" tag={Link}>
                                    SURAT PEMBACA
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/index" tag={Link}>
                                    TANGGAPAN
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/index" tag={Link}>
                                    BERITA
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/index" tag={Link}>
                                    OPINI
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/index" tag={Link}>
                                    WAWASAN
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/index" tag={Link}>
                                    REVIEW
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/index" tag={Link}>
                                    TENTANG KAMI
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink
                                    href="/login"
                                    id="login-tooltip"
                                >
                                    <i className="fa-solid fa-user"></i>
                                    <p className="d-lg-none d-xl-none">Masuk</p>
                                </NavLink>
                                <UncontrolledTooltip target="#login-tooltip">
                                    Masuk
                                </UncontrolledTooltip>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarHome;
