import React from 'react'
import NavIcons from './NavIcons'

function HeaderUpper() {
  return (
    <div className="container mx-auto flex justify-around items-center">
    {/* Logo or brand */}
    <a href="#" className="text-black text-lg font-bold">
      Your Brand
    </a>
    <NavIcons />
  </div>
  )
}

export default HeaderUpper