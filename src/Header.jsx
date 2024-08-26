import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className='header'>
    <h1>Atlassian</h1>
    <ul>
    <li><a href='#.com'>Products</a></li>
    <li><a href='#.com'>Teams</a></li>
    <li><a href='#.com'>Support</a></li>
    <li><a href='#.com'>Try</a></li>
    <li><a href='#.com'>Buy</a></li>
    </ul>
    <input type="text" placeholder='Search' />
    </div>
  )
}

export default Header