import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div style={{height:'300px'}} className='container mt-5 w-100'>
      <div className="footer-content d-flex justify-content-between">
        <div style={{width:'400px'}} className="media">
          <h5 className='d-flex' >
          <i style={{height:'35px'}} className="fa-solid me-2 fa-photo-film"></i>
            Media Player
          </h5>
          <p style={{textAlign:'justify'}}>Designed and built with all the love in the world by the Bootstrap team with the  help of our contributors.</p>
          <span>Code Licenced by MIT,docs CC BY 3.0. Currently <br /> v5.3.2. </span>
        </div>
        <div className="links d-flex flex-column">
          <h5 style={{height:'35px'}}>Links</h5>
          <Link to={'/'}  style={{textDecoration:'none',color:'white'}} >Landing Page</Link>
          <Link to={'/home'}  style={{textDecoration:'none',color:'white'}} >Home Page</Link>
          <Link to={'/watch'} style={{textDecoration:'none',color:'white'}} >Watch History</Link>
        </div>
        <div className="guides d-flex flex-column">
        <h5 style={{height:'35px'}}>Guides</h5>
        <a href="http:/react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}>React JS</a>
        <a href="http:/react.com/en/main" target='_blank' style={{textDecoration:'none',color:'white'}}>React Routing</a>
        <a href="http:/react-bootstrap.github.io/" target='_blank' style={{textDecoration:'none',color:'white'}}>React Bootstrap</a>
        </div>
        <div className="contact">
        <h5 style={{height:'35px'}}>Contact Us</h5>
        <div className="d-flex">
          <input type="text" className='form-control me-1' placeholder='Email-id Please' />
          <button className='btn btn-info'><i style={{height:'17px'}} className='fa-solid fa-arrow-right align-item-center'></i></button>
        </div>
        <div className="icons d-flex justify-content-between mt-3">
          <a href="http://" target='_blank' style={{textDecoration:'none',color:'white'}}>
            <i className='fa-brands fa-twitter fa-lx'></i>
          </a>
          <a href="http://" target='_blank' style={{textDecoration:'none',color:'white'}}>
            <i className='fa-brands fa-instagram fa-lx'></i>
          </a>
          <a href="http://" target='_blank' style={{textDecoration:'none',color:'white'}}>
            <i className='fa-brands fa-facebook fa-lx'></i>
          </a>
          <a href="http://" target='_blank' style={{textDecoration:'none',color:'white'}}>
            <i className='fa-brands fa-github fa-lx'></i>
          </a>
          <a href="http://" target='_blank' style={{textDecoration:'none',color:'white'}}>
            <i className='fa-brands fa-linkedin fa-lx'></i>
          </a>
          <a href="http://" target='_blank' style={{textDecoration:'none',color:'white'}}>
            <i style={{height:'17px'}} className='fa-solid fa-phone fa-lx'></i>
          </a>
        </div>
        </div>
      </div>
      <p className='text-center mt-5'>Copyright &copy;2024 Media Player .Built with React</p>
    </div>
  )
}

export default Footer