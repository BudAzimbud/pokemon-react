import CardImage from 'Component/CardImage'
import React from 'react'
import { Row, Container } from 'reactstrap'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <Container>
            <Row className="ml-1 gap-5 p-4">
                <CardImage />
                <CardImage />
                <CardImage />
                <CardImage />
            </Row>
        </Container>
    )
}

export default Home