import React from 'react'
import './../App.css'
import logo from './../img/icon&logo/logo.PNG'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header id="showcase">
        <div className="header">
          <div className="column logo-header animate__animated animate__flipInX">
            <img src={logo} className="ui medium image" />
          </div>
          <nav className="ui stackable inverted menu header-menu doubling">
            <Link to='/' className="item active">
              Home
            </Link>
            <Link to='/product' className="item">
            Messages
            </Link>
            <a className="item">
              Friends
            </a>
            <a className="item">
              Messages
            </a>
            <a className="item">
              Messages
            </a>
          </nav>
        </div>
      </header>
  )
}
