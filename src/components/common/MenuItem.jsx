import React from 'react'
import { Link } from 'react-router-dom'

export const MenuItem = ({ path, description }) => {
  return (
    <>
      <Link to={ path }><span>{ description }</span></Link>
    </>
    
  )
}
