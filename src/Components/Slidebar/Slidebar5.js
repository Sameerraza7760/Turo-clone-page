import React from 'react'
import  { Component, useState ,useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";
import './../style.css'


function Slidebar5() {
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
                  slidesToShow: 1.5,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 720,
                settings: {
                  slidesToShow: 1.3,
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
      const slidebar5 = [
        { imgSrc: "https://images.turo.com/media/driver/edc4lzlWTHGwKOpT3WF4Og.160x160.jpg", title: "All Start Host" ,name: "Kevin M",rewiew:"lyan was highly responsive and helful thorughout the trip",Date:'Donna S -nov 2022'},
        { imgSrc: "https://images.turo.com/media/driver/bL03pkUGQ4GgZv-y1XzKRw.160x160.jpg", title: "All Start Host",name:"Artem S",rewiew:"lyan was highly responsive and helful thorughout the trip",Date:'Donna S -nov 2022' },
        { imgSrc: "https://images.turo.com/media/driver/f_VkwIWpQ-WIMrha_oRisQ.160x160.jpg", title: "All Start Host", name: 'Derric.H',rewiew:"lyan was highly responsive and helful thorughout the trip",Date:'Donna S -nov 2022' },
        { imgSrc: "https://images.turo.com/media/driver/kFR_K6gDQ4ivXlIQXyaC-w.160x160.jpg", title: "All Start Host", name: "Muhammad A",rewiew:"lyan was highly responsive and helful thorughout the trip" ,Date:'Donna S -nov 2022' },
        { imgSrc: "https://images.turo.com/media/driver/qvlYSNqeStqcMJv2Lbq8MA.160x160.jpg", title: "All Start Host",name:"Cars From AR",rewiew:"lyan was highly responsive and helful thorughout the trip",Date:'Donna S -nov 2022' },
        { imgSrc: "https://images.turo.com/media/driver/GYXLNy3eTj-9112VMxeI0g.160x160.jpg", title: "All Start Host",  name:"Laura W",rewiew:"lyan was highly responsive and helful thorughout the trip",Date:'Donna S -nov 2022' },
        
        { imgSrc: "https://images.turo.com/media/driver/zpaZmE29QHaLypyAXccC-A.160x160.jpg", title: "All Start Host", name:"igore K" ,rewiew:"lyan was highly responsive and helful thorughout the trip",Date:'Donna S -nov 2022' },
        { imgSrc: "https://images.turo.com/media/driver/ij04bT3rTlGLf_MFHCIh1g.160x160.jpg", title: "All Start Host",name:'ivan A',rewiew:"lyan was highly responsive and helful thorughout the trip",Date:'Donna S -nov 2022' },
        { imgSrc: "https://images.turo.com/media/driver/JV-AMDaxTJKU7IhDg562ag.160x160.jpg", title: "All Start Host",name:'Amir A',rewiew:"lyan was highly responsive and helful thorughout the trip",Date:'Donna S -nov 2022' },
        
      ];
  return (
    <>
    <div className='slidebar5-heading' >
        <h2 style={{fontSize:'40px',fontWeight:'900'}} className='heading-slidebar5' >
        Meet the hosts
        </h2>
    </div>


<div className='slidebar5'>
            
<div  >
  
<div className='heading-div' ><h2 className="slider1Heading"> Browse by make</h2></div>

  <Slider {...settings} className = "mainSlider" style={{ width : '65%' , margin: '0 auto', }}>
    {slidebar5.map((item) => {
      return (
        <div className="carDiv1" key = "{item}" style={{width:"100%"}}  >
          <Card
          className="SliderCard5" id="Card1"
          style={{ width: "90%", marginLeft: "0px", height:"300px" ,margin:'0 auto', border: '0.4 solid gray'}}
          key = "{carItem}"
        >
          <Card.Img variant="top" src={item.imgSrc} style={{borderRadius:'50px',height:'70px',width:'70px' ,marginTop:'10px',marginLeft:'10px'}} />
    
          <Card.Body>
                 <p className='para-inside-card'  > {item.name}</p>
            <Card.Title className="titleHeading" style={{marginLeft:'10px',fontSize:'13px',cursor:'pointer',fontFamily:'sans-serif',fontWeight:'bold'}} > {item.title} </Card.Title>
            <p id='rewiew' style={{height:'20%'}} >{item.rewiew}</p>
            <p className='date-inside-card' >{item.Date}</p>
          </Card.Body>
        </Card>
        </div>
      );
    })}
  </Slider>
  <br /><br /><br /><br />
</div>
</div>

</>

  )
}

export default Slidebar5