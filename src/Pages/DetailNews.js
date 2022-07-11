import React, { useState } from "react";

// reactstrap components
import {
    Container,
    Row,
    Col,
    Badge,
} from "reactstrap";

// core components
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import {  useParams } from "react-router";
import axios from "axios";
import Moment from "react-moment";
import {MdDateRange} from 'react-icons/md'
import {AiOutlineUser} from 'react-icons/ai'
import { colorText } from "helper/color";
import '../App.css'
function DetailNew() {
  
    const { slug } = useParams()
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
            setData(res.data)
        })
        document.title="KataKonsumen - "+slug
    }, [slug])

    return (
        <Row>
            <Col xl={9}>
                <div className="py-4" >
                    <div className=" mt-3">
                        <LandingPageHeader title={data.title} />
                        <h2 className="title">{data.title}</h2>
                            <div className="d-flex gap-4 s  text-secondary small">
                                <p className="d-flex justify0-content-center">
                                <MdDateRange size={20}/><span> <Moment format="D MMM YYYY">{data.createdAt}</Moment></span>
                                </p>
                                <p className="ml-4 d-flex justify0-content-center">
                                <AiOutlineUser size={20}/><span> {data?.author?.fullName}</span>
                                </p>
                                {
                                    data?.tags?.map((tag, index) => {
                                        return (
                                            <p className="ml-4 d-flex justify-content-center">
                                                <span className="fw-bold">{tag.toUpperCase()}</span>
                                            </p>
                                        )
                                    })
                                }
                               
                              
                            </div>
                          
                            <div className="text-secondary h5">{data.description}</div>
                            <div className="section-story-overview">
                                <Row className="container">
                                    <div className="blogwrapper" dangerouslySetInnerHTML={{ __html: data.content }} />
                                </Row>
                            </div>
                    </div>
                </div></Col>
            <Col >
            </Col>
        </Row>


    );
}

export default DetailNew;
