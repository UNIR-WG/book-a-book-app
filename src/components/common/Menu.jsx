import React from 'react'
import { MenuItem } from './MenuItem'

export const Menu = () => {
  return (
    <div className="topnav">
      <MenuItem path="/" description="Home" />
      <MenuItem path="/books" description="Libros" />
      <MenuItem path="/loans" description="Préstamos" />
      <MenuItem path="/authors" description="Autores" />
      <MenuItem path="/people" description="Personas" />
      {/* <MenuItem path="/book-search" description="Buscar" /> */}
    </div>
  )
}
