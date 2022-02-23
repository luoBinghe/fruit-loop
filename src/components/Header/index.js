import React from 'react'
import SearchBar from '../SearchBar'
import Logo from './Logo'

import './style.scss'

export default function Header(){
  return(
    <header>
      <section>
        <Logo />
      </section>

      <section>
        <a>Login</a>
        <a>Frutas</a>
        <a>Carrinho</a>
      </section>

      <section>
        <SearchBar />
      </section>
    </header>
  )
}