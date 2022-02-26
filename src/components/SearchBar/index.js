import React from 'react'

import './style.scss'

import searchIcon from '../../utils/images/search.png'
import { ToastContainer } from 'react-toastify'

import { useGlobalContext } from '../../hooks/useGlobalContext'
import { useService } from '../../hooks/useService'

export default function SearchBar(){
  const { handleSeachFruit } = useService()
  const { searchText, setSearchText } = useGlobalContext()

  return(
    <div className='input-style'>
      <ToastContainer />
      <input value={searchText} onChange={(e) => setSearchText(e.target.value)} />  
      <button onClick={handleSeachFruit}>
        <img src={searchIcon}/>
      </button>
    </div>
  )
}