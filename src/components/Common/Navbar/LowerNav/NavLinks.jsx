import React from 'react'
import { Link } from 'react-router-dom'

function NavLinks() {
  return (<>
    <ul className="flex justify-around ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/collections">Collections</Link>
            </li>
            <li>
              <Link to="/product" >Product</Link>
            </li>
            <li>
              <a href="#" className="text-Black hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
  </>
  )
}

export default NavLinks