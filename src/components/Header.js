import React from 'react'
import './../App.css'
import logo from './../img/icon&logo/logo.PNG'
import TestState from './testHook/TestState'
import HookFile from './testHook/HookFile'
import { Link,  BrowserRouter as Router,
  Route,} from 'react-router-dom'
import Product from './Product'
export default function Header() {
  return (
    <Router>
      <header id="showcase">
          <div className="header">
            <div className="column logo-header animate__animated animate__flipInX">
              <img src={logo} className="ui medium image" />
            </div>
            <nav className="ui stackable inverted menu header-menu doubling">
            
              <Link to='/' className="item active">
                  Home
                </Link>
                <Link to='/hookfile' className="item">
                Messages
                </Link>
                <Link to='/form' className="item">
                Form
                </Link>
            </nav>
          </div>
      </header>
      <Route path='/' exact component={TestState}></Route>
      <Route path='/hookfile' exact component={HookFile}></Route>
      <Route path='/form' exact component={Product}></Route>

    </Router>
  )
}
