import { createContext, useContext, useEffect, useState } from "react"

import { api } from '../services/api'
import { useService } from "./useService";

const GlobalContext = createContext();

export function GlobalProvider({ children }){
  const [searchText, setSearchText] = useState('')
  const { setFruits } = useService()

  const handleSeachFruit = async () => {
    const response = await api.get(`fruits?q=${searchText}`)
    setFruits(response.data)
  }

  return(
    <GlobalContext.Provider value={{searchText, setSearchText, handleSeachFruit}}>
      {children}
    </GlobalContext.Provider>
  )
}

export function useGlobalContext(){
  const context = useContext(GlobalContext)

  return context
}