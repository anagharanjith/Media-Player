import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Header() {
  return (
  <Navbar className="bg-info">
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand className='fw-bolder d-flex align-item-center' style={{color:'white'}}>
          <i className="fa-solid fa-beat me-3 fa-photo-film"></i>
            {' '}
            Media Player
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>  )
}

export default Header