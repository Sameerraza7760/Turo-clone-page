import React from 'react'
import  { Component, useState ,useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";
import './../style.css'

function Slidebar1() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5 ,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1493,
            settings: {
              slidesToShow: 3.9,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1313,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1124,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 940,
              settings: {
                slidesToShow: 2.2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 870,
              settings: {
                slidesToShow: 2.2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 780,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 690,
              settings: {
                slidesToShow: 1.8,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 615,
              settings: {
                slidesToShow: 1.6,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 565,
              settings: {
                slidesToShow: 1.4,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 515,
              settings: {
                slidesToShow: 1.4,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1.1,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 418,
              settings: {
                slidesToShow: 1.1,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 390,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2
              }
            }
          ]
      };
    
    
      const slider1Cars = [
        { imgSrc: "https://resources.turo.com/f/81934/386x308/9bf274f19e/image_make_jeep-2x.jpg", title: "Jeep" },
        { imgSrc: "https://resources.turo.com/f/81934/386x308/7dcf9bff19/image_make_tesla-2x.jpg", title: "Tesla" },
        { imgSrc: "https://resources.turo.com/f/81934/386x308/ef857a4438/image_make_subaru-2x.jpg", title: "Subaru" },
        { imgSrc: "https://resources.turo.com/f/81934/386x308/7e7ce60797/image_make_porsche-2x.jpg", title: "Porsche" },
        { imgSrc: "https://resources.turo.com/f/81934/386x308/0c4f5f5186/image_make_bmw-2x.jpg", title: "BMW" },
        { imgSrc: "https://resources.turo.com/f/81934/386x308/065308f2c4/image_make_mb-2x.jpg", title: "Mercedes-Benz" },
        { imgSrc: "https://resources.turo.com/f/81934/386x308/2809ca8702/image_make_toyota-2x.jpg", title: "Toyota" },
        { imgSrc: "https://resources.turo.com/f/81934/386x308/994b145776/image_make_nissan-2x.jpg", title: "Nissan" },
        { imgSrc: "https://resources.turo.com/f/81934/386x308/a470b4f290/image_make_lambo-2x.jpg", title: "Lamborghini" },
        { imgSrc: "https://resources.turo.com/f/81934/386x308/0431f873ac/image_make_ford-2x.jpg", title: "Ford" },
      ];
    
      return (
        <div>
            
          <div>
            
          <div className='heading-div' ><h2 className="slider1Heading"> Browse by make</h2></div>
    
            <Slider {...settings} className = "mainSlider" style={{ width : '65%' , margin: '0 auto', }}>
              {slider1Cars.map((carItem) => {
                return (
                  <div className="carDiv" key = "{carItem}" style={{width:"100%"}}  >
                    <Card
                    className="sliderCard" id="card"
                    style={{ width: "12rem", marginLeft: "0px", height:"200px" ,margin:'0 auto'}}
                    key = "{carItem}"
                  >
                    <Card.Img variant="top" src={carItem.imgSrc} />
                    <Card.Body>
                      <Card.Title className="titleHeading"> {carItem.title} </Card.Title>
                    </Card.Body>
                  </Card>
                  </div>
                );
              })}
            </Slider>
            <br /><br /><br /><br />
          </div>
        </div>
      );
    }
 

export default Slidebar1