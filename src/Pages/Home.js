import CardImage from 'components/Card/CardImage'
import React from 'react'
import { Row, Col } from 'reactstrap'

function Home() {
    return (
        <Row>
            <Col xl={9}>
                <Row className="gap-5 p-4">
                    <CardImage />
                    <CardImage />
                    <CardImage />
                    <CardImage />
                </Row>
            </Col>
            <Col xl={3}>
                test
            </Col>

        </Row>

    )
}

export default Home