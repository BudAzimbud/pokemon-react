import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Card, CardImg, CardText, CardTitle, CardBody, Badge } from 'reactstrap'
import Moment from 'react-moment';
import { BsPatchCheckFill, BsChat } from 'react-icons/bs'
import './CardImage.css'
function CardImage(props) {

    const colorBudge = ["primary", "info", "success", "danger", "warning", "neutral", "default"]

    const styleVerified = props.author.isVerified ? { color: 'blue' } : { color: 'grey' }

    return (
        <Col xl={6} sm={12} md={6} className="wrapper-card">
            <Link to={"berita/" + props.slug} >
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src="https://picsum.photos/318/180"
                        top
                        width="100%"
                    />
                    <CardBody className='text-dark' >
                        {
                            props.tags.map((tag, index) => {
                                return (
                                    <Badge key={"index"} className="mr-1" color={colorBudge[Math.floor(Math.random() * colorBudge.length)]} href="#pablo" onClick={e => e.preventDefault()}>
                                        {tag}
                                    </Badge>
                                )
                            })
                        }
                        <CardTitle tag="h4" className='fw-bold'  >
                            {props.title}
                        </CardTitle>
                        <CardText >
                            {props.description}
                        </CardText>
                        <CardText className='d-flex justify-content-between  font-footer' >
                            <p>
                                updated <Moment toNow>{props.created}</Moment>
                            </p>
                            <p className=" align-items-center" >
                                {"20K"} {<BsChat />}
                            </p>
                            <p className="align-items-center" >
                                {props.author.fullName} {<BsPatchCheckFill style={styleVerified} />}
                            </p>
                        </CardText>
                    </CardBody>
                </Card>
            </Link>
        </Col >
    )
}

export default CardImage