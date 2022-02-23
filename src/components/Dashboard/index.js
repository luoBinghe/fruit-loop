import { useState } from 'react'
import Grid from "../Grid"
import { useService } from "../../hooks/useService"

import './style.scss'

export default function Dashboard(){
  const { fruits, isError, isLoading } = useService()
  const [add, setAdd] = useState(0)

  const handleAddQuantity = (quantity) => {
    if(add >= quantity) return
    setAdd(old => old + 1)
  }

  const handleSubQuantity = () => {
    if(add <= 0) return
    setAdd(old => old - 1)
  }

  return(
    <section className="grid">
      {fruits && 
        fruits.map((fr, index) => (
          <Grid 
            key={index}
            name={fr.name} 
            id={fr.id}
            quantity={fr.quantity} 
            price={fr.price}
            img={fr.img}
            disabled={fr.quantity === 0}
          />
        ))
      }
    </section>
  )
}