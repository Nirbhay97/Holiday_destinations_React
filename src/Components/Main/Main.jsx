import React, { useState } from "react";
import "./main.css";
import img from "../../Assets/img.jpg";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { CiGrid2H } from "react-icons/ci";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "bora",
    location: "new zealnd",
    fees: "344",
    description: "the epitome",
  },

  {
    id: 2,
    imgSrc: img,
    destTitle: "bora",
    location: "new zealnd",
    fees: "344",
    description: "the epitome",
  },

  {
    id: 3,
    imgSrc: img,
    destTitle: "bora",
    location: "new zealnd",
    fees: "344",
    description: "the epitome",
  },

  {
    id: 4,
    imgSrc: img,
    destTitle: "bora",
    location: "new zealnd",
    fees: "344",
    description: "the epitome",
  },

  {
    id: 5,
    imgSrc: img,
    destTitle: "bora",
    location: "new zealnd",
    fees: "344",
    description: "the epitome",
  },

  {
    id: 6,
    imgSrc: img,
    destTitle: "bora",
    location: "new zealnd",
    fees: "344",
    description: "the epitome",
  },

  {
    id: 7,
    imgSrc: img,
    destTitle: "bora",
    location: "new zealnd",
    fees: "344",
    description: "the epitome",
  },

  {
    id: 8,
    imgSrc: img,
    destTitle: "bora",
    location: "new zealnd",
    fees: "344",
    description: "the epitome",
  },

  {
    id: 9,
    imgSrc: img,
    destTitle: "bora",
    location: "new zealnd",
    fees: "344",
    description: "the epitome",
  },
];

const Main = () => {
  const [iconToggle, setIconToggle] = useState(true);
  const handleClick = (value) => {
    if (iconToggle !== value) {
      setIconToggle(value);
    }
  };
  console.log(iconToggle);
  return (
    <section className="main container section">
      <div className="mainBar">
        <div className="secTitle">
          <h3 className="title">Events</h3>
        </div>
        <div className="secIcon">
          <div
            style={iconToggle ? { backgroundColor: "#27E1C1" } : {}}
            className="iconsecondparent active-1"
          >
            <TfiLayoutGrid3Alt
              className="icons iconfirst"
              onClick={() => handleClick(true)}
            />
          </div>

          <div
            style={iconToggle ? {} : { backgroundColor: "#27E1C1" }}
            className="iconfirstparent active-1"
          >
            <CiGrid2H
              className="icons iconssecond"
              onClick={() => handleClick(false)}
            />
          </div>
          <div className="filter">
            <label htmlFor="price"></label>
            <select id="price" className="filter">
              <option disabled>Select</option>
              <option>low-high</option>
              <option>high-low</option>
            </select>
          </div>
        </div>
      </div>
      <div className="event">
        <div className="sidebar">
          Eligendi fuga dignissimos ipsa sapiente maiores,
          adipisci sunt sed ad assumenda, veritatis quo odit alias, voluptatibus
          expedita deserunt aut doloribus obcaecati consequatur repudiandae
          dolore placeat. Veniam dolore repellat fugit molestiae dignissimos
          quibusdam facilis, ullam voluptate obcaecati nisi rerum corrupti?
          Laudantium, natus aut. Accusamus, ipsa distinctio recusandae soluta
          deserunt ab? Sit maxime veniam velit pariatur, ut ipsa, mollitia
          asperiores quisquam consequatur voluptas laboriosam blanditiis
          doloribus aspernatur?
        </div>
        <div className={iconToggle ? "tiles" : "secContent"}>
          {/* here did notign */}
          {iconToggle &&
            Data.map(
              ({ id, imgSrc, destTitle, location, fess, description }) => {
                return (
                  <div key={id} className="singleDestination">
                    <div className="imageDiv">
                      <img src={imgSrc} alt={destTitle} />
                    </div>

                    <div className="cardInfo">
                      <h4 className="destTitle">{destTitle}</h4>
                      {/* <span className="continent flex">
                                         
                                    </span> */}
                      <p className="cardPara">Here the events will be put</p>

                      <div className="cardAttributes">
                        <div className="cardAttri">Music</div>
                        <div className="cardAttri">1 year</div>
                      </div>

                      <div className="pricesAttributes">
                        <div className="priceFirst">234 |</div>
                        <div className="priceFirst">1 year |</div>
                        <div className="priceFirst">5 year</div>
                      </div>

                      <div className="pricesAttributes">
                        <a href="#" className="bd-button inline-block">
                          <h4 className="bd-heading">Details</h4>
                        </a>

                        <a href="#" className="bd-button inline-block">
                          <h4 className="bd-heading">Details</h4>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }
            )}

          {!iconToggle &&
            Data.map(
              ({ id, imgSrc, destTitle, location, fess, description }) => {
                return (
                  <div key={id} className="singleDestinationMobile">
                    <div className="imageDivMobile">
                      <img src={imgSrc} alt={destTitle} />
                    </div>

                    <div className="cardInfo">
                      <div className="card-left">
                        <h4 className="destTitle">{destTitle}</h4>
                        {/* <span className="continent flex">
                                         
                                    </span> */}
                        <p className="cardPara">Here the events will be put</p>

                        <div className="cardAttributes">
                          <div className="cardAttri">Music</div>
                          <div className="cardAttri">1 year</div>
                        </div>
                      </div>
                      <div className="card-right">
                        <div className="pricesAttributes">
                          <div className="priceFirst">234 |</div>
                          <div className="priceFirst">1 year |</div>
                          <div className="priceFirst">5 year</div>
                        </div>

                        <div className="pricesAttributesButton">
                          <a href="#" className="bd-button inline-block">
                            <h4 className="bd-heading">Details</h4>
                          </a>

                          <a href="#" className="bd-button inline-block">
                            <h4 className="bd-heading">Details</h4>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
        </div>
      </div>
    </section>
  );
};

export default Main;
