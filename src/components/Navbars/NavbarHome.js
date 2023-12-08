import React, { useState } from "react";
import { AiOutlineSearch, AiFillCloseCircle } from "react-icons/ai";
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
  Button,
  Row,
  Col,
  Modal,
  ModalBody,
} from "reactstrap";
import NavbarImage from "../../assets/img/header-removebg-preview.png";
function NavbarHome({ onSearch }) {
  const [modal, setModal] = React.useState(false);
  const [search, setSearch] = useState();

  return (
    <>
      <Modal isOpen={modal}>
        <ModalBody>
          <div onClick={() => setModal(false)}>
            <AiFillCloseCircle className="text-danger" />
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSearch(search);
            }}
          >
            <Row className="gap-0 align-items-center">
              <Col className="col-9 p-0">
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <AiOutlineSearch size={20} className="text-danger" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search A Pekomon.."
                    type="text"
                  ></Input>
                </InputGroup>
              </Col>
              <Col className="col-3">
                <InputGroup>
                  <Button
                    className="text-primary font-weight-bold"
                    color="warning"
                    size="md"
                    type="submit"
                  >
                    Cari
                  </Button>
                </InputGroup>
              </Col>
            </Row>
          </form>
        </ModalBody>
      </Modal>
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
            ></DropdownToggle>
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
            <Nav className="d-lg-none">
              <NavItem
                onClick={() => {
                  setModal(true);
                }}
              >
                <AiOutlineSearch size={"25"} className="text-white" />
              </NavItem>
            </Nav>
          </div>
          <Collapse className="justify-content-end" isOpen={modal} navbar>
            <Nav navbar style={{ fontSize: "18px" }}>
              <NavItem>
                <Form
                  data-background-color=""
                  onSubmit={(event) => {
                    event.preventDefault();
                    onSearch(search);
                  }}
                >
                  <Row className="gap-0 align-items-center ">
                    <Col className="col-9 p-0">
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <AiOutlineSearch />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          onChange={(event) => setSearch(event.target.value)}
                          placeholder="Search A Pekomon.."
                          type="text"
                        ></Input>
                      </InputGroup>
                    </Col>
                    <Col className="col-3">
                      <InputGroup>
                        <Button
                          className="text-primary font-weight-bold"
                          color="warning"
                          size="md"
                          type="submit"
                        >
                          Cari
                        </Button>
                      </InputGroup>
                    </Col>
                  </Row>
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
