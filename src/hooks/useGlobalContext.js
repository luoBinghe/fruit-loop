import { createContext, useContext, useState } from "react"
import { toast } from "react-toastify";
import { api } from "../services/api";

const GlobalContext = createContext();

export function GlobalProvider({ children }){
  const [searchText, setSearchText] = useState('')
  const [fruits, setFruits] = useState([])

  const [isLogged, setIsLogged] = useState(false)

  const [cart, setCart] = useState(() => {
    const storagedCart = localStorage.getItem('@Varejao:cart:cart');
  
      if (storagedCart) {
        return JSON.parse(storagedCart);
      }
  
      return [];
    });
  
    const addProduct = async (productId) => {
      try {
        const updateCart = [...cart]
        const productExists = updateCart.find(product => product.id === productId)
  
        const currentAmount = productExists ? productExists.amount : 0
        const amount = currentAmount + 1

  
        if(productExists){
          productExists.amount = amount
        } else {
          const product = await api.get(`/fruits/${productId}`)
  
          const newProduct = {
            ...product.data,
            amount: 1
          }
  
          updateCart.push(newProduct)
        }
  
        setCart(updateCart)
        localStorage.setItem('@Varejao:cart', JSON.stringify(updateCart))
      } catch(e) {
        console.error('Erro na adição do produto')
      }
    }
  
    const removeProduct = (productId) => {
      try {
        const updatedCart = [...cart]
        const productIndex = updatedCart.findIndex(product => product.id === productId)
  
        if(productIndex >= 0){
          updatedCart.splice(productIndex, 1)
          setCart(updatedCart)
          localStorage.setItem('@Varejao:cart', JSON.stringify(updatedCart))
        } else {
          throw Error()
        }
      } catch(e) {
        console.error('Erro na remoção do produto');
      }
    }
  
    const updateProductAmount = async ({
      productId,
      amount,
    }) => {
    try {
      if(amount <= 0){
        return 0
      }

      const updatedCart = [...cart]
      const productExists = updatedCart.find(product => product.id === productId)

      if(amount > productExists.quantity){
        return
      }

      if(productExists){
        productExists.amount = amount
        setCart(updatedCart)
        localStorage.setItem('@Varejao:cart', JSON.stringify(updatedCart))
      } else {
        throw Error()
      }

    } catch(e) {
      console.error(e)
    }
  }

  const clearCard = () => {
    const updatedCart = []
    setCart(updatedCart)
      localStorage.setItem('@Varejao:cart', JSON.stringify(updatedCart))
  }

  const handleLoggeUser = () => {
    setIsLogged(true)
  }

  return(
    <GlobalContext.Provider value={{searchText, setSearchText, fruits, setFruits, isLogged, setIsLogged, handleLoggeUser, cart, addProduct, removeProduct, updateProductAmount, clearCard }}>
      {children}
    </GlobalContext.Provider>
  )
}

export function useGlobalContext(){
  const context = useContext(GlobalContext)

  return context
}