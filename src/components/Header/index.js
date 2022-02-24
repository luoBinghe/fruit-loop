import React from 'react'
import SearchBar from '../SearchBar'
import Logo from './Logo'

import { Link } from 'react-router-dom';

import './style.scss'
import { useGlobalContext } from '../../hooks/useGlobalContext';

export default function Header(){
  const { isLogged, setLoggedIn } = useGlobalContext()

  return(
    <header>
      <section>
        <Logo />
      </section>

      <section>
          <Link to="/">
            Varejo
          </Link>
          <Link to="/card">
            Carrinho
          </Link>
          {isLogged ?
            <Link to="/login" onClick={() => setLoggedIn(false)}>
              Logout
            </Link>
            :
            <Link to="/login">
              Login
            </Link>
          }
      </section>

      <section>
        <SearchBar />
      </section>
    </header>
  )
}