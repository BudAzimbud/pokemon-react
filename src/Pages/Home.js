import CardImage from 'components/Card/CardImage'
import React, { useEffect, useState } from 'react'
import { Row, Col } from 'reactstrap'
import axios from 'axios'
import PostLoader from 'components/Loader/PostLoader'
function Home() {

    const [posts, setPosts] = useState([])


    const getPosts = () => {
        axios.get(`${process.env.REACT_APP_URL_BACKEND}/public/posts`).then((res) => {
            console.log(res.data)
            setPosts(res.data)
        })
    }

    useEffect(() => {
        getPosts()
    }, [])


    return (
        <Row>
            <Col xl={9}>

                <Row className="gap-5 p-4 mt-3">
                    {
                        posts.length > 0 ?
                            posts?.map((post, index) => {
                                return <CardImage
                                    key={index}
                                    {...post}
                                />
                            })
                            :
                            (<>
                                <PostLoader />
                                <PostLoader />
                                <PostLoader />
                                <PostLoader />
                            </>)
                    }
                </Row>
            </Col>
            <Col xl={3}>
            </Col>
        </Row>

    )
}

export default Home