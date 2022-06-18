import CardImage from 'components/Card/CardImage'
import React, { useEffect, useState } from 'react'
import { Row, Col } from 'reactstrap'
import axios from 'axios'
function Home() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get(`https://katakonsumen-pb2c4lmpla-et.a.run.app/public/posts`).then((res) => {
            console.log(res.data)
            setPosts(res.data)
        })
    }, [])


    return (
        <Row>
            <Col xl={9}>
                <Row className="gap-5 p-4">
                    {posts?.map((post, index) => {
                        return <CardImage
                            key={index}
                            description={post.description}
                            title={post.title}
                            slug={post.slug}
                            created={post.createdAt}
                        />
                    })}

                </Row>
            </Col>
            <Col xl={3}>
                hallo
            </Col>
        </Row>

    )
}

export default Home