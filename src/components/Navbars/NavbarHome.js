import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
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
                            href="/"
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

                        <Nav navbar style={{ fontSize: '18px' }}>
                            <NavItem>
                                <Form data-background-color=""
                                    onSubmit={(event) => {
                                        event.preventDefault()
                                    }}>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <AiOutlineSearch />
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
                            {/* <NavItem>
                                <NavLink to="/index" tag={Link} onClick={(e) => e.preventDefault()}>
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
                            </NavItem> */}
                            {/* <NavItem>
                                <UncontrolledDropdown nav>
                                    <DropdownToggle
                                        aria-haspopup={true}
                                        caret
                                        color="default"
                                        data-toggle="dropdown"
                                        href="#pablo"
                                        id="navbarDropdownMenuLink"
                                        nav
                                        onClick={e => e.preventDefault()}
                                    >
                                        Topik Lainnya
                                    </DropdownToggle>
                                    <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                                        <DropdownItem
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                        >
                                            Action
                                        </DropdownItem>
                                        <DropdownItem
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                        >
                                            Another action
                                        </DropdownItem>
                                        <DropdownItem
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                        >
                                            Something else here
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </NavItem> */}

                            <NavItem >
                                <Link to={"/login"}>
                                    <NavLink
                                        id="login-tooltip"
                                    >
                                        <AiOutlineUser />
                                        <p className="d-lg-none d-xl-none">Masuk</p>
                                    </NavLink>
                                </Link>
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
