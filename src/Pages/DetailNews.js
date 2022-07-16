import React, { useState } from "react";

// reactstrap components
import {
    Row,
    Col,
} from "reactstrap";

// core components
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import {  useParams } from "react-router";
import axios from "axios";
import Moment from "react-moment";
import {MdDateRange} from 'react-icons/md'
import {FaUser} from 'react-icons/fa'
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
                <div className="py-1" >
                <LandingPageHeader title={data.title} />
                <div className="d-flex  gap-2  text-secondary cursor-hand small mt-3">
                    <p className="d-flex  justify-content-center ">
                    <MdDateRange size={20}/>&nbsp;<span> <Moment format="D MMM YYYY">{data.createdAt}</Moment></span>
                    </p>
                    <p className="ml-4 d-flex justify-content-center">
                    <FaUser size={17}/>&nbsp;<span>{data?.author?.fullName}</span>
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
                          
            <h2 className="title py-0 px-4">{data.title}</h2>
                <div className="text-secondary h5 px-4 ">{data.description}</div>
                
                <div className="section-story-overview px-4">
                        <div className="blogwrapper" dangerouslySetInnerHTML={{ __html: data.content }} />
                </div>
                </div></Col>
            <Col sm={12} >
            </Col>
        </Row>


    );
}

export default DetailNew;
