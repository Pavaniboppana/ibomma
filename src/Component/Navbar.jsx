import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className="navbar">
    <div className="logo">
     <img src="https://akamai-aws-s3--ib-com-bucket.lokicdn.com/images/logo.svg" alt="" />
     </div>
     <div className="nav1">
     <ul>
     <li><Link className='how' to="/"><i class="fa-solid fa-house" style={{color:"limegreen"}}></i> Home</Link></li>
     <li><Link className='how' to="/about"><i class="fa-solid fa-info" style={{color:"limegreen"}}></i>  About</Link></li>
     <li><Link className='how' to="/bug"><i class="fa-solid fa-bug" style={{color:"limegreen"}}></i>  Bug</Link></li>
     </ul>
     <div className="search">
     <div className="day1">
     <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
     </div>
     <input type="text" placeholder='Search..' />
     </div>
     </div>
     </div>

    </>
  )
}

export default Navbar