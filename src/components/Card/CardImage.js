import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Card, CardImg, CardText, CardTitle, CardBody, Badge } from 'reactstrap'
import Moment from 'react-moment';
import { BsPatchCheckFill, BsChat } from 'react-icons/bs'
function CardImage(props) {

    const colorBudge = ["primary", "info", "success", "danger", "warning", "neutral", "default"]

    const styleVerified = props.author.isVerified ? { color: 'blue' } : { color: 'grey' }

    return (
        <Col xl={6} sm={12} md={6} style={{ width: '40rem' }}>
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
                                    <Badge key={index} color={colorBudge[Math.floor(Math.random() * colorBudge.length)]} href="#pablo" onClick={e => e.preventDefault()}>
                                        {tag}
                                    </Badge>
                                )
                            })
                        }
                        <CardTitle tag="h5" style={{ fontWeight: 'bold' }} >
                            {props.title}
                        </CardTitle>
                        <CardText>
                            {props.description}
                        </CardText>
                        <CardText style={{ display: 'flex', fontSize: "25px", justifyContent: "space-between", }} >
                            <small className="text-muted">
                                updated <Moment toNow>{props.created}</Moment>
                            </small>
                            <small className="text-muted" style={{ alignItems: 'center' }}>
                                {"20K"} {<BsChat />}
                            </small>
                            <small className="text-muted" style={{ alignItems: 'center' }}>
                                {props.author.fullName} {<BsPatchCheckFill style={styleVerified} />}
                            </small>
                        </CardText>
                    </CardBody>
                </Card>
            </Link>
        </Col >
    )
}

export default CardImage