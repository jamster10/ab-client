import React from 'react'
import logo from '../../img/logo.png'
import './HeaderBar.css';

export default function HeaderBar() {
  return (
    <header className="HeaderBar">
      <img className="logo" src={logo} alt="Apartment Builder"/>
    </header>
  )
}
