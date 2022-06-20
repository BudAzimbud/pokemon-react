import React, { useState } from "react";

// reactstrap components
import {
    Button,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
} from "reactstrap";

// core components
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import { useHistory, useParams } from "react-router";
import axios from "axios";
import Moment from "react-moment";

function DetailNew() {
    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
    const { slug } = useParams()
    const history = useHistory()
    const [data, setData] = useState({})

    React.useEffect(() => {
        document.body.classList.add("landing-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("landing-page");
            document.body.classList.remove("sidebar-collapse");
        };
    }, []);

    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL_BACKEND}/public/posts/${slug}`).then((res) => {
            console.log(res.data)
            setData(res.data)
        })
    }, [slug])

    return (
        <Row>
            <Col xl={9}>
                <div className="py-4" >
                    <div className=" mt-3">
                        <LandingPageHeader title={data.title} />
                        <div className="section section-about-us">
                            <Container>
                                <Row>
                                    <Col className="ml-auto mr-auto text-center" md="8">
                                        <h2 className="title">{data.description}</h2>
                                        <div className="description">
                                            <h5>{data.description}</h5>
                                            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                                                <p>
                                                    Pada <Moment format="D MMM YYYY"   >{data.createdAt}</Moment>
                                                </p>
                                                <p>Oleh {"ramdani"}</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="separator separator-primary"></div>
                                <div className="section-story-overview">
                                    {/* <Row>
                                <Col md="6">
                                    <div
                                        className="image-container image-left"
                                        style={{
                                            backgroundImage:
                                                "url(" + require("assets/img/login.jpg").default + ")",
                                        }}
                                    >
                                        <p className="blockquote blockquote-info">
                                            "Over the span of the satellite record, Arctic sea ice has
                                            been declining significantly, while sea ice in the
                                            Antarctichas increased very slightly" <br></br>
                                            <br></br>
                                            <small>-NOAA</small>
                                        </p>
                                    </div>
                                    <div
                                        className="image-container"
                                        style={{
                                            backgroundImage:
                                                "url(" + require("assets/img/bg3.jpg").default + ")",
                                        }}
                                    ></div>
                                </Col>
                                <Col md="5">
                                    <div
                                        className="image-container image-right"
                                        style={{
                                            backgroundImage:
                                                "url(" + require("assets/img/bg1.jpg").default + ")",
                                        }}
                                    ></div>
                                    <h3>
                                        So what does the new record for the lowest level of winter
                                        ice actually mean
                                    </h3>
                                    <p>
                                        The Arctic Ocean freezes every winter and much of the
                                        sea-ice then thaws every summer, and that process will
                                        continue whatever happens with climate change. Even if the
                                        Arctic continues to be one of the fastest-warming regions of
                                        the world, it will always be plunged into bitterly cold
                                        polar dark every winter. And year-by-year, for all kinds of
                                        natural reasons, there’s huge variety of the state of the
                                        ice.
                                    </p>
                                    <p>
                                        For a start, it does not automatically follow that a record
                                        amount of ice will melt this summer. More important for
                                        determining the size of the annual thaw is the state of the
                                        weather as the midnight sun approaches and temperatures
                                        rise. But over the more than 30 years of satellite records,
                                        scientists have observed a clear pattern of decline,
                                        decade-by-decade.
                                    </p>
                                    <p>
                                        The Arctic Ocean freezes every winter and much of the
                                        sea-ice then thaws every summer, and that process will
                                        continue whatever happens with climate change. Even if the
                                        Arctic continues to be one of the fastest-warming regions of
                                        the world, it will always be plunged into bitterly cold
                                        polar dark every winter. And year-by-year, for all kinds of
                                        natural reasons, there’s huge variety of the state of the
                                        ice.
                                    </p>
                                </Col>
                            </Row> */}
                                </div>
                            </Container>
                        </div>

                        <div className="section section-contact-us text-center">
                            <Container>
                                <h2 className="title">Want to work with us?</h2>
                                <p className="description">Your project is very important to us.</p>
                                <Row>
                                    <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                                        <InputGroup
                                            className={
                                                "input-lg" + (firstFocus ? " input-group-focus" : "")
                                            }
                                        >
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="now-ui-icons users_circle-08"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="First Name..."
                                                type="text"
                                                onFocus={() => setFirstFocus(true)}
                                                onBlur={() => setFirstFocus(false)}
                                            ></Input>
                                        </InputGroup>
                                        <InputGroup
                                            className={
                                                "input-lg" + (lastFocus ? " input-group-focus" : "")
                                            }
                                        >
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="now-ui-icons ui-1_email-85"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="Email..."
                                                type="text"
                                                onFocus={() => setLastFocus(true)}
                                                onBlur={() => setLastFocus(false)}
                                            ></Input>
                                        </InputGroup>
                                        <div className="textarea-container">
                                            <Input
                                                cols="80"
                                                name="name"
                                                placeholder="Type a message..."
                                                rows="4"
                                                type="textarea"
                                            ></Input>
                                        </div>
                                        <div className="send-button">
                                            <Button
                                                block
                                                className="btn-round"
                                                color="info"
                                                href="#pablo"
                                                onClick={(e) => {
                                                    history.push("/login")
                                                    e.preventDefault()
                                                }}
                                                size="lg"
                                            >
                                                Send Message
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div></Col>
            <Col >
            </Col>
        </Row>


    );
}

export default DetailNew;
