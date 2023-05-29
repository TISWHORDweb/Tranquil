import React, { useEffect, useState } from 'react'
import Prof from '../img/pexels-megan-ruth-16642703.jpg'
import img1 from '../img/pexels-alexander-rondón-15206807.jpg'
import img2 from '../img/pexels-sevil-yeva-15895543.jpg'
import img3 from '../img/pexels-néo-rioux-9489163.jpg'
import { Carousel } from "react-bootstrap";
import articles from '../news.json'

function Banner() {

    let [data, setData] = useState([])
    useEffect(() => {
        setData(articles);
        // console.log(data.articles[0])
    })

    return (
        <div>
            <div className="Banner">
                <div className="sets">
                    <div className="set1">
                        <div className="">
                            <img src={Prof} alt="Profile image" />
                        </div>
                        <div className="ms-3">
                            <h2 className='m-0'>Welcome back, Brian!</h2>
                            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                            </svg> You have 2 new messages and 15 new tasks</p>
                        </div>
                    </div>
                    <div className="set2">
                        <button className='message'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                        </svg> Messages</button>
                        <button className='setting'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                        </svg>Settings</button>
                    </div>
                </div>
                <div className="section">
                    <div className="cards mb-4">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="set">
                                    <div className="opt1">
                                        <p className='m-0'>Summary</p>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                        </svg></span>
                                    </div>
                                    <center>
                                        <div className="due mt-4" >
                                            <h1 className='m-0'>21</h1>
                                            <p>Due Tasks</p>
                                        </div>
                                        <div className="down">
                                            <p>Completed: <b>13</b></p>
                                        </div>
                                    </center>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="set">
                                    <div className="opt1">
                                        <p className='m-0'>Overdue</p>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                        </svg></span>
                                    </div>
                                    <center>
                                        <div className="task mt-4">
                                            <h1 className='m-0'>17</h1>
                                            <p>Tasks</p>
                                        </div>
                                        <div className="down">
                                            <p>From yesterday: <b>9</b></p>
                                        </div>
                                    </center>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="set">
                                    <div className="opt1">
                                        <p className='m-0'>Issues</p>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                        </svg></span>
                                    </div>
                                    <center>
                                        <div className="open mt-4">
                                            <h1 className='m-0'>24</h1>
                                            <p>Open</p>
                                        </div>
                                        <div className="down">
                                            <p>Closed today: <b>19</b></p>
                                        </div>
                                    </center>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="set">
                                    <div className="opt1">
                                        <p className='m-0'>Features</p>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                        </svg></span>
                                    </div>
                                    <center>
                                        <div className="proposal mt-4">
                                            <h1 className='m-0'>38</h1>
                                            <p>Proposals</p>
                                        </div>
                                        <div className="down">
                                            <p>Implemented: <b>16</b></p>
                                        </div>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
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
                    <div className="tables">
                        <div className="top">
                            <div className="">
                                <p className='m-0'>Github Issues Summary</p>
                            </div>
                            <div className="">
                                <button className='last'>Last Week</button>
                                <button className='this'>This Week</button>
                            </div>
                        </div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Avatar</th>
                                    <th scope="col">First name</th>
                                    <th scope="col">Last name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th><img src={img1} alt="" /></th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Otto</td>
                                    <td className='action'>
                                        <div className="svg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                            </svg>
                                        </div>
                                        <div className="list">
                                            <ul>
                                                <li>View</li>
                                                <li>Edit</li>
                                                <li>Delete</li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                <th><img src={img2} alt="" /></th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Otto</td>
                                    <td className='action'>
                                        <div className="svg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                            </svg>
                                        </div>
                                        <div className="list">
                                            <ul>
                                                <li>View</li>
                                                <li>Edit</li>
                                                <li>Delete</li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                <th><img src={img3} alt="" /></th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Otto</td>
                                    <td className='action'>
                                        <div className="svg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                            </svg>
                                        </div>
                                        <div className="list">
                                            <ul>
                                                <li>View</li>
                                                <li>Edit</li>
                                                <li>Delete</li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner