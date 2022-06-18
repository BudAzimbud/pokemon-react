import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Card, CardImg, CardText, CardTitle, CardBody } from 'reactstrap'
import Moment from 'react-moment';

function CardImage(props) {
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
                        <CardTitle tag="h5" style={{ fontWeight: 'bold' }} >
                            {props.title}
                        </CardTitle>
                        <CardText>
                            {props.description}
                        </CardText>
                        <CardText>
                            <small className="text-muted">
                                updated <Moment toNow>{props.created}</Moment>
                            </small>
                        </CardText>
                    </CardBody>
                </Card>
            </Link>
        </Col>
    )
}

export default CardImage