import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Card, CardImg,  CardTitle, CardBody, Badge } from 'reactstrap'
import Moment from 'react-moment';
import {BiComment} from 'react-icons/bi'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import './CardImage.css'
import { colorBudge } from 'helper/color';
function CardImage(props) {

    const styleVerified = props.author.isVerified ? "text-info" : "text-secondary"
    return (
        <Col xl={6} sm={12} md={6} className="wrapper-card font-monserrat" >
            <Link to={"berita/" + props.slug} >
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src="https://picsum.photos/318/180"
                        top
                        width="100%"
                    />
                    <CardBody  >
                       <CardTitle tag={"h5"} style={{color:"#5e5873" }} className="fw-bold">{props.title}</CardTitle>
                       <div className='d-flex align-items-center gap-2' >
                           <img src={"https://picsum.photos/700"} className="mr-2" alt='card' style={{widht:40 , height:40 , borderRadius:'50%'}} />
                           <div  style={{fontSize:'12px' , color:'#b9b9c3'}}>by <span className='fw-bold text-secondary'>{props.author.fullName} <BsFillPatchCheckFill className={styleVerified} /></span> | <Moment fromNow>{props.createdAt}</Moment></div>
                       </div>
                       <div className='mt-3'>
                       {
                        props.tags.map((tag, index) => {
                            return (
                                <Badge key={index} className="mr-1" color={colorBudge[Math.floor(Math.random() * colorBudge.length)]} href="#pablo" onClick={e => e.preventDefault()}>
                                    {tag}
                                </Badge>
                            )
                        })
                        }
                       </div>
                       <div className='mt-2' style={{color:'#6e6b7b'}}>
                            {props.description}
                       </div>
                       <div className='mt-2 border-top py-2  d-flex justify-content-between'>
                            <Link className='text-secondary fw-bold'  to={"/berita/"+props.slug}><BiComment /> 76 Comments</Link>
                            <Link className='text-purple' to={"/berita/"+props.slug}>Read More</Link>
                       </div>
                    </CardBody>
                </Card>
            </Link>
        </Col >
    )
}


export default CardImage

