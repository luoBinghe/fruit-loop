import { useState, useCallback, useEffect } from 'react'

import { api } from '../services/api'
import { useGlobalContext } from './useGlobalContext'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";

export function useService(){
  const location = useLocation();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  
  const { searchText, fruits, setFruits, setSearchText  } = useGlobalContext()

  const getFruits = useCallback(async () => {
    setIsLoading(true)
    try{
      const response = await api.get('fruits')
      setFruits(response.data)
      setIsLoading(false)
    }catch(error){
      console.error(error)
      setIsLoading(false)
      setIsError(true)
    }
  }, [setFruits])

  const handleSeachFruit = async () => {
    const newText = searchText.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    try{
      const response = await api.get(`fruits?q=${newText}`)
      if(response.data.length === 0) return toast.error('Desculpe, produto não existe!')

      setFruits(response.data)
    }catch(error){
      console.error(error)
      setIsLoading(false)
      setIsError(true)
    }finally{
      setSearchText('')
    }

    if(location.pathname !== '/'){
      navigate('/')
    }
  }

  useEffect(() => {
    if(fruits.length === 0){
      getFruits()
    }
  }, [fruits, getFruits])

  console.log(fruits)

  return { isError, isLoading, handleSeachFruit }
}