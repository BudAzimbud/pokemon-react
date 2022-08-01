import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
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
import Swal from "sweetalert2";
import axios from "axios";
function NavbarHome() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
    const history = useHistory()
    const location = useLocation()
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
      <Navbar className="fixed-top " color="info" expand="lg">
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
          <div className="navbar-translate align-items-center">
            <NavbarBrand
              href="/"
              id="navbar-brand"
              style={{ fontSize: "20px" }}
            >
              KataKonsumen
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
            <Nav navbar style={{ fontSize: "18px" }}>
              <NavItem>
                <Form
                  data-background-color=""
                  onSubmit={(event) => {
                    event.preventDefault();
                  }}
                >
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
                <NavLink target={"_blank"} href="https://katakonsumen-portal.web.app"  tag={'a'}>
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
                            {localStorage.getItem("access_token")?
                             <NavItem>
                             <UncontrolledDropdown nav>
                               <DropdownToggle
                                 aria-haspopup={true}
                                 caret
                                 color="default"
                                 data-toggle="dropdown"
                                 href="#pablo"
                                 id="navbarDropdownMenuLink"
                                 nav
                                 onClick={(e) => e.preventDefault()}
                               >
                                 <img
                                   alt="Card image cap"
                                   src="https://picsum.photos/318/180"
                                   top
                                   className="rounded-circle"
                                   width="30px"
                                   height={"30px"}
                                 />
                               </DropdownToggle>
                               <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                                 <DropdownItem
                                   href="#pablo"
                                   onClick={(e) => e.preventDefault()}
                                 >
                                   Profile
                                 </DropdownItem>
                                 <DropdownItem
                                   href="#pablo"
                                   onClick={(e) => e.preventDefault()}
                                 >
                                   Setting
                                 </DropdownItem>
                                 <DropdownItem
                                   href="#pablo"
                                   onClick={(e) => {e.preventDefault()
                                    localStorage.removeItem("access_token")
                                    history.push(location.pathname)
                                }}
                                 >
                                   Logout
                                 </DropdownItem>
                               </DropdownMenu>
                             </UncontrolledDropdown>
                           </NavItem>:    
                                <NavItem>
                                <Link
                                  to={"#"}
                                  onClick={(event) => {
                                    event.preventDefault();
                                    Swal.fire({
                                      html: `
                                                        <div class="container py-4">
                                                        <p>Kata konsumen</p>
                                                        <div class="bg-dark text-light px-5 p-top-10">
                                                            <h3 class="px-2 bg-light   text-secondary ">Sign in</h3>
                                                        </div>      
                                                        <div class="mt-3">
                                                        <input type="text" required id="username" class="form-control rounded p-3" placeholder="Username">
                                                        <input type="password" required id="password" class="form-control rounded p-3 mt-4" placeholder="Password">
                                                        </div>
                                                        <div class="mt-3 text-center">
                                                            <p>Or</p>
                                                        </div>
                                                        <a href="/" class="h2 " >
                                                        <i class="fa-brands fa-google"></i>
                                                        </a>
                                                        </div>`,
                                      confirmButtonText: "Sign in",
                                      focusConfirm: false,
                                      showCloseButton: true,
                                      preConfirm: () => {
                                        const username =
                                          Swal.getPopup().querySelector("#username").value;
                                        const password =
                                          Swal.getPopup().querySelector("#password").value;
                                        let response = true
                                        axios
                                          .post(
                                            `${process.env.REACT_APP_URL_BACKEND}/auth/signin`,
                                            {
                                              email: username,
                                              password: password,
                                            }
                                          )
                                          .then((res) => {
                                            localStorage.setItem(
                                              "access_token",
                                              res.data.accessToken
                                            );
                                            return history.push(location.pathname)
                                          })
                                          .catch((err) => {
                                            console.log(err);
                
                                            response = false;
                                          });
                                        if (!response) {
                                          Swal.showValidationMessage(`Your account is wrong`);
                                        }
                                      },
                                    });
                                  }}
                                >
                                  <NavLink id="login-tooltip">
                                    <AiOutlineUser />
                                    <p className="d-lg-none d-xl-none">Masuk</p>
                                  </NavLink>
                                </Link>
                                <UncontrolledTooltip target="#login-tooltip">
                                  Masuk
                                </UncontrolledTooltip>
                              </NavItem>
                        }
         

         
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarHome;
