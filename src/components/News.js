import React, { useEffect, useState } from 'react'
import { Carousel } from "react-bootstrap";
import articles from '../news.json'

function News() {

    let [data, setData] = useState([])
    useEffect(() => {
        setData(articles);
        // console.log(data.articles[0])
    },[setData])

    return (
        <div>
            <div className="News">
                <div className="news mb-4">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header" >
                                <div className="card-title m-0">Recents News</div>
                            </div>
                            <div className="card-body">
                                <Carousel showArrows={false}>
                                    {data.articles?.map(e => (
                                        <Carousel.Item key={e.id} className="news">
                                            <div class="row">
                                                <div class="col-md-6 pe-0">
                                                    <img style={{ width: "100%", height: "260px", objectFit: "cover" }} src={e.urlToImage} alt="" />
                                                </div>
                                                <div class="col-md-6 p-0">
                                                    <div class="ps-3 p-2">
                                                        <span class="bg-soft-pink p-2 rounded font-14">{e.author}</span>
                                                        <h4 class=" font-weight-bold newsHeading" >{e.title}</h4>
                                                        <p class="m-0 font-14 text-muted newsSummary">{e.description}</p>
                                                        <button class="btn mt-2">Read More</button>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <img
                                                        className="testimonialImages d-block w-50"
                                                        src={review.urlToImage}
                                                        alt={review.author}
                                                    /> */}

                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                                {/* <div className="news" key={e.id}>
                                                    <div class="row">
                                                        <div class="col-md-6 pe-0">
                                                            <img style={{width: "100%", height:"260px", objectFit:"cover"}} src={e.urlToImage} alt="" />
                                                        </div>
                                                        <div class="col-md-6 p-0">
                                                            <div class="ps-3 p-2">
                                                                <span class="bg-soft-pink p-2 rounded font-14">{e.author}</span>
                                                                <h4 class=" font-weight-bold newsHeading" >{e.title}</h4>
                                                                <p class="m-0 font-14 text-muted newsSummary">{e.description}</p>
                                                                <button class="btn mt-2">Read More</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div> */}
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News