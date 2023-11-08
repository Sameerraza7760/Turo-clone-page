import React from 'react'
import  { Component, useState ,useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";
import './../style.css'

function Slidebar3() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6 ,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1313,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
            {
                breakpoint: 1124,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 940,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 870,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 780,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2
              }
            },
            {
                breakpoint: 746,
                settings: {
                  slidesToShow: 2.8,
                  slidesToScroll: 2
                }
              },
            {
              breakpoint: 690,
              settings: {
                slidesToShow: 2.2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 615,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 565,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 515,
              settings: {
                slidesToShow: 1.7,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1.7,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 418,
              settings: {
                slidesToShow: 1.6,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 393,
              settings: {
                slidesToShow: 1.1,
                slidesToScroll: 2
              }
            },
            {
                breakpoint: 296,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 2
                }
              }
          ]
      };
      const destination = [
        { imgSrc: "https://resources.turo.com/f/81934/240x240/76b4007676/illo_city_losangeles_hover-2x.png", title: "Los Angeles" },
        { imgSrc: "https://resources.turo.com/f/81934/240x240/ebf31d579f/illo_city_miami_hover-2x.png", title: "Miami" },
        { imgSrc: "https://resources.turo.com/f/81934/240x240/ee089eef85/illo_city_honolulu_hover-2x.png", title: "Honolulu" },
        { imgSrc: "https://resources.turo.com/f/81934/240x240/7f00f3cc97/illo_city_sydney_hover-2x.png", title: "Syedney" },
        { imgSrc: "https://resources.turo.com/f/81934/240x240/957c774400/illo_city_london_hover-2x.png", title: "London" },
        { imgSrc: "https://resources.turo.com/f/81934/240x240/34f2d3a05f/illo_city_dallas_hover-2x.png", title: "Torranto" },
        { imgSrc: "https://resources.turo.com/f/81934/240x240/8a4598d799/illo_city_jerseycity_hover-2x.png", title: "Jersey City" },
        { imgSrc: "https://resources.turo.com/f/81934/240x240/3f9757ed81/illo_city_sanfrancisco_hover-2x.png", title: "San Fransisco" },
        { imgSrc: "https://resources.turo.com/f/81934/240x240/1a1efd8d1e/illo_city_atlanta_hover-2x.png", title: "Atlanta" },
        { imgSrc: "https://resources.turo.com/f/81934/240x240/b20a87cb5f/illo_city_phoenix_hover-2x.png", title: "Phoenix" },
      ];
  return (
    <div>
            
          <div style={{marginTop:'100px'}} >
            
          <div className='heading-div' ><h2 className="slider1Heading"> Browse by make</h2></div>
    
            <Slider {...settings} className = "mainSlider" style={{ width : '65%' , margin: '0 auto', }}>
              {destination.map((desitem) => {
                return (
                  <div className="carDiv" key = "{desitem}" style={{width:"100%"}}  >
                    <Card
                    className="sliderCard" id="card"
                    style={{ width: "10rem", marginLeft: "0px", height:"190px" ,margin:'0 auto',padding:'10px'}}
                    key = "{desitem}"
                  >
                    <Card.Img variant="top" src={desitem.imgSrc} />
                    <Card.Body>
                      <Card.Title className="titleHeading" style={{marginLeft:'-30px',fontSize:'15px',cursor:'pointer',fontFamily:'sans-serif',fontWeight:'bold'}} > {desitem.title} </Card.Title>
                    </Card.Body>
                  </Card>
                  </div>
                );
              })}
            </Slider>
            <br /><br /><br /><br />
          </div>
        </div>
  )
}

export default Slidebar3