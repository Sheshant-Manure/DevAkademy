import React from 'react'
import logo from '../../assets/logo.png'

const Logo = () => {
  return (
    <img style={{userSelect:'none'}} src={logo} alt='Logo' draggable='false' />
  )
}

export default Logo