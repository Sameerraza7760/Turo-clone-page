
import React from 'react'
import './../style.css'
import Slider from "react-slick";

function Sliderbar2() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='main-slidebar' >
   
    <Slider {...settings}>
      <div className='Slidebar-container' >
        <div className='slidebar-inner' >
           <div> <img src="https://resources.turo.com/f/81934/416x284/6e085cbe0e/image_outdoors_416x285.jpg" alt="" /></div>
          <div className='slidebar-inner2'>  <h3 className='slidebar-heading' >Find the perfect car <span style={{color:'purple'}} >to conquer the great outdoors</span></h3>
          <p className='slidebar-para' >Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.</p>
          <button className='Slidebar-btn' >Browse Cars</button>
          </div>
        </div>
    
      </div>
      <div>
      <div className='slidebar-inner' >
           <div> <img src="https://resources.turo.com/f/81934/416x284/6e085cbe0e/image_outdoors_416x285.jpg" alt="" /></div>
          <div className='slidebar-inner2'>  <h3 className='slidebar-heading' >Find the perfect car <span style={{color:'purple'}} >to conquer the great outdoors</span></h3>
          <p className='slidebar-para'>Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.</p>
          <button className='Slidebar-btn' >Browse Cars</button>
          </div>
        </div>
        </div>
      <div>
      <div className='slidebar-inner' >
           <div> <img src="https://resources.turo.com/f/81934/416x284/929b21c4fa/image_upgrade_416x285.jpg" alt="" /></div>
          <div className='slidebar-inner2'>  <h3 className='slidebar-heading' >Find the perfect car <span style={{color:'purple'}} >to conquer the great outdoors</span></h3>
          <p className='slidebar-para'>Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.</p>
          <button className='Slidebar-btn' >Browse Cars</button>
          </div>
        </div>
      </div>
      <div>
      <div className='slidebar-inner' >
           <div> <img src="https://resources.turo.com/f/81934/416x284/1e828ae782/image_scenic_416x285.jpg" alt="" /></div>
          <div className='slidebar-inner2'>  <h3 className='slidebar-heading' >Find the perfect car <span style={{color:'purple'}} >to conquer the great outdoors</span></h3>
          <p className='slidebar-para'>Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.</p>
          <button className='Slidebar-btn' >Browse Cars</button>
          </div>
        </div>
      </div>
      <div>
      <div className='slidebar-inner' >
           <div> <img src="https://resources.turo.com/f/81934/416x284/a3870434ac/image_try_416x285.jpg" alt="" /></div>
          <div className='slidebar-inner2'>  <h3 className='slidebar-heading' >Find the perfect car <span style={{color:'purple'}} >to conquer the great outdoors</span></h3>
          <p className='slidebar-para'>Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.</p>
          <button className='Slidebar-btn' >Browse Cars</button>
          </div>
        </div>
      </div>
      <div>
      <div className='slidebar-inner' >
           <div> <img src="https://resources.turo.com/f/81934/416x284/6e085cbe0e/image_outdoors_416x285.jpg" alt="" /></div>
          <div className='slidebar-inner2'>  <h3 className='slidebar-heading' >Find the perfect car <span style={{color:'purple'}} >to conquer the great outdoors</span></h3>
          <p className='slidebar-para'>Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.</p>
          <button className='Slidebar-btn' >Browse Cars</button>
          </div>
        </div>
      </div>
    </Slider>
  </div>
  )
}

export default Sliderbar2