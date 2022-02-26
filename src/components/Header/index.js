import React from 'react'
import SearchBar from '../SearchBar'
import Logo from './Logo'

import { Link } from 'react-router-dom';

import './style.scss'
import { useGlobalContext } from '../../hooks/useGlobalContext';
import { useNavigate } from 'react-router';

export default function Header(){
  const { isLogged, setLoggedIn, setFruits } = useGlobalContext()
  const navigate = useNavigate()

  const handleClearSearch = () => {
    setFruits([])
    return navigate.push('/')
  }

  return(
    <header>
      <section>
        <Logo />
      </section>

      <section>
          <button onClick={() => handleClearSearch()}>
            Varejo
          </button>
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