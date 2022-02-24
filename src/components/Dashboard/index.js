import Grid from "../Grid"

import './style.scss'

import { useService } from "../../hooks/useService"
import { useGlobalContext } from '../../hooks/useGlobalContext'

import { formatter } from '../../utils/formmaters'

export default function Dashboard(){
  const { isError, isLoading } = useService()
  const { fruits } = useGlobalContext()
  console.log(isError)
  return(
    <section className="grid">
      {isError &&
        <p>Desculpe, não é possivel realizar a ação!.</p>
      } 
      {fruits && 
        fruits.map((fr, index) => (
          <Grid 
            key={index}
            name={fr.name} 
            id={fr.id}
            quantity={fr.quantity} 
            price={formatter(fr.price)}
            img={fr.img}
            disabled={fr.quantity === 0}
          />
        ))
      }
    </section>
  )
}