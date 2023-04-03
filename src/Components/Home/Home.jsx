import React from "react"
import './home.css'
import video from '../../Assets/video.mp4'
import  {GrLocation} from 'react-icons/gr'

const Home = () =>{
    return (
        <section className="home">
            <div className="overlay"></div>
            <video src = {video} muted autoPlay loop type = "video/mp4"></video>

            <div className="homeContent container">
                <div className="textDiv">
                    <span className="smallText">
                        Our packages
                    </span>

                    <h1 className="homeTitle">
                        Search your holiday
                    </h1>
                </div>

                <div className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">
                            Search here
                        </label>
                        <div className="input flex">
                            <input type="text" placeholder="Enter name "/>
                            <GrLocation className="icon"/>
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="date">
                            Select date
                        </label>
                        <div className="input flex">
                            <input type="date"/>       
                        </div>
                    </div>

                    <div className="priceInput">
                       <div className="label_total flex">
                        <label htmlFor="price">Max</label>
                            <h3 className="total">
                                $3454
                            </h3>
                       </div>
                       <div className="input flex">
                        <input type="range" max="5000" min="100"/>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home