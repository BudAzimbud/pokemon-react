import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Card, CardImg, CardText, CardTitle, CardBody } from 'reactstrap'
function CardImage() {
    return (
        <Col xl={6} sm={12} md={6} style={{ width: '40rem' }}>
            <Link to="/berita/konten-seger" >
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src="https://picsum.photos/318/180"
                        top
                        width="100%"
                    />
                    <CardBody className='text-dark' >
                        <CardTitle tag="h5" >
                            Card Title
                        </CardTitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </CardText>
                        <CardText>
                            <small className="text-muted">
                                Last updated 3 mins ago
                            </small>
                        </CardText>
                    </CardBody>
                </Card>
            </Link>
        </Col>
    )
}

export default CardImage