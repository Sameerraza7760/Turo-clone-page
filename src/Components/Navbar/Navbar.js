import React from 'react'
import './../style.css'

function Navbar() {
  return (
    <>
    <div className='header-container' >
        <div className='header-para' >
            <p><a href="#" style={{color:"gray"}} >Turo is open for business in Australia! Tap to explore cars.</a></p>
        </div>
        <div className='bottom-header' >
              <div className='header-img' >
                <img src="data:image/png;base64,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" alt="" />
              </div>
              <div className='empty-div' >

              </div>
              <div className='header-btn' >
            <div className='header-btn-inner' >
                Become The Host
            </div>

        </div>
        <div className='header-profile' >
        <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <i className="fa-sharp fa-solid fa-bars" style={{color:'black'}} ></i>


  </button>
  <ul className="dropdown-menu dropdown-menu-dark">
  <li><button className="dropdown-item" type="button"> <i className="fa-solid fa-car"></i> Become a Host</button></li>
    <li><button className="dropdown-item" type="button">  <i className="fa-sharp fa-solid fa-key"></i> how turo works</button></li>
    <li><button className="dropdown-item" type="button"> <i className="fa-sharp fa-solid fa-key"></i>  Contract Support</button></li>
    <li><button className="dropdown-item" type="button"> <i className="fa-solid fa-file-contract"></i> Legal</button></li>
    <li><button className="dropdown-item" type="button"> <i className="fa-solid fa-house-crack"></i> Inshurence And Protection</button></li>
    <li><button className="dropdown-item" type="button"> <i className="fa-solid fa-wrench"></i> Host Tools</button></li>
    <li><button className="dropdown-item" type="button"> <i className="fa-solid fa-calculator"></i> Carculator</button></li>
  </ul>
</div>
        </div>
        </div>
    
    </div>
  
 
    </>
  )
}

export default Navbar