import React from "react"
import ContentLoader from "react-content-loader"
import { Col } from "reactstrap"

const HomeLoader = (props) => (
    <Col xl={3} sm={6} md={3} style={{ marginRight:"10px" }}>
        <ContentLoader viewBox="0 0 600 280" backgroundColor="#E7E7E7"
            foregroundColor="#ecebeb" height={400} width={800} {...props}>
            <rect x="3" y="3" rx="10" ry="10" width="300" height="180" />
            <rect x="6" y="190" rx="0" ry="0" width="292" height="20" />
            <rect x="4" y="215" rx="0" ry="0" width="239" height="20" />
            <rect x="4" y="242" rx="0" ry="0" width="274" height="20" />
        </ContentLoader>
    </Col>
)

export default HomeLoader
