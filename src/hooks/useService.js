import { useState, useCallback, useEffect } from 'react'

import { api } from '../services/api'

export function useService(){
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [fruits, setFruits] = useState([])
  console.log('isabela', fruits)
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
  }, [])

  useEffect(() => {
    if(fruits.length === 0){
      getFruits()
    }
  }, [fruits, getFruits])

  return { fruits, isError, isLoading, setFruits }
}