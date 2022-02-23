import React from 'react'

import './style.scss'

import searchIcon from '../../utils/images/search.png'

import { useGlobalContext } from '../../hooks/useGlobalContext'

export default function SearchBar(){
  const { searchText, setSearchText, handleSeachFruit } = useGlobalContext()

  return(
    <div className='input-style'>
      <input value={searchText} onChange={(e) => setSearchText(e.target.value)} />  
      <button onClick={handleSeachFruit}>
        <img src={searchIcon}/>
      </button>
    </div>
  )
}