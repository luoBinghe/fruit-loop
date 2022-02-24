import { createContext, useContext, useState } from "react"

const GlobalContext = createContext();

export function GlobalProvider({ children }){
  const [searchText, setSearchText] = useState('')
  const [fruits, setFruits] = useState([])

  const [isLogged, setIsLogged] = useState(false)

  const [cardItem, setItemInCard] = useState()

  const handleAddItem = (item) => {
    setItemInCard(item)
  }

  const handleLoggeUser = () => {
    setIsLogged(true)
  }

  return(
    <GlobalContext.Provider value={{searchText, setSearchText, fruits, setFruits, isLogged, setIsLogged, handleLoggeUser, cardItem, handleAddItem }}>
      {children}
    </GlobalContext.Provider>
  )
}

export function useGlobalContext(){
  const context = useContext(GlobalContext)

  return context
}