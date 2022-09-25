import React, { useState } from "react";
import { AiOutlineSearch,  } from "react-icons/ai";
// reactstrap components
import {
  Collapse,
  DropdownToggle,

  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";
import NavbarImage from '../../assets/img/header-removebg-preview.png'
function NavbarHome({onSearch}) {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [search , setSearch] = useState()
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
      <Navbar className="fixed-top " color="danger" expand="lg">
        <Container className="align-items-center">
          <UncontrolledDropdown className="button-dropdown">
            <DropdownToggle
              caret
              data-toggle="dropdown"
              href="#pablo"
              id="navbarDropdown"
              tag="a"
              onClick={(e) => e.preventDefault()}
            >
            </DropdownToggle>
          </UncontrolledDropdown>
          <div className="navbar-translate align-items-center">
            <NavbarBrand
              href="/"
              id="navbar-brand"
              style={{ fontSize: "20px" }}
            >
              <img width={50} height={50} src={NavbarImage} alt="pokemon" />
              <span>Poke Mon</span>
            </NavbarBrand>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar style={{ fontSize: "18px" }}>
              <NavItem>
                <Form
                  data-background-color=""
                  onSubmit={(event) => {
                    event.preventDefault();
                    onSearch(search)
                  }}

                >
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <AiOutlineSearch />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input  onChange={(event)=>setSearch(event.target.value)} placeholder="type Pokemon hit enter.." type="text"></Input>
                  </InputGroup>
                </Form>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarHome;
