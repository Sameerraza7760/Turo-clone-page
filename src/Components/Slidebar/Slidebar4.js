import React from 'react'
import  { Component, useState ,useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";
import './../style.css'

function Slidebar4() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3 ,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1313,
                settings: {
                  slidesToShow: 2.5,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 1260,
                settings: {
                  slidesToShow: 2.2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
            {
                breakpoint: 1124,
                settings: {
                  slidesToShow: 2.1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 990,
              settings: {
                slidesToShow: 1.7,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 879,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 786,
              settings: {
                slidesToShow: 1.4,
                slidesToScroll: 2
              }
            },
            {
                breakpoint: 754,
                settings: {
                  slidesToShow: 1.2,
                  slidesToScroll: 2
                }
              },
            {
              breakpoint: 690,
              settings: {
                slidesToShow: 1.1,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 615,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 565,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 515,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 418,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 393,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2
              }
            },
            {
                breakpoint: 293,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 2
                }
              }
          ]
      };
      const slidebar4 = [
        { imgSrc: "https://resources.turo.com/f/81934/328x262/61e1aebed5/image_experience_convertibles.jpg", title: "Convertibles" },
        { imgSrc: "https://resources.turo.com/f/81934/328x262/6a22a954a4/image_experience_allwheeldrive.jpg", title: "All-wheel drive" },
        { imgSrc: "https://resources.turo.com/f/81934/328x262/294b8f8aec/image_experience_classiccars.jpg", title: "Classic cars" },
        { imgSrc: "https://resources.turo.com/f/81934/328x262/0d5b069ff2/image_experience_petfriendly.jpg", title: "Pet-friendly" },
        { imgSrc: "https://resources.turo.com/f/81934/328x262/1d0c1a5bd7/image_experience_deluxesuperdeluxe.jpg", title: "Deluxe & Super Deluxe" },
        { imgSrc: "https://resources.turo.com/f/81934/328x262/8e60a37cc1/image_experience_electric.jpg", title: "Electric" },
        
      ];
  return (
    <div className='slidebar4'>
            
    <div  >
      
    <div className='heading-div' ><h2 className="slider1Heading"> Browse by make</h2></div>

      <Slider {...settings} className = "mainSlider" style={{ width : '65%' , margin: '0 auto', }}>
        {slidebar4.map((item) => {
          return (
            <div className="carDiv" key = "{item}" style={{width:"100%"}}  >
              <Card
              className="SliderCard" id="Card"
              style={{ width: "20rem", marginLeft: "0px", height:"300px" ,margin:'0 auto',border:'none'}}
              key = "{carItem}"
            >
              <Card.Img variant="top" src={item.imgSrc} />
              <Card.Body>
                <Card.Title className="titleHeading" style={{marginLeft:'10px',fontSize:'19px',cursor:'pointer',fontFamily:'sans-serif',fontWeight:'bold'}} > {item.title} </Card.Title>
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

export default Slidebar4