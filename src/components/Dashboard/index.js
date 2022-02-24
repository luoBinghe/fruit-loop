import Grid from "../Grid"

import './style.scss'

import { useService } from "../../hooks/useService"
import { useGlobalContext } from '../../hooks/useGlobalContext'

import { formatter } from '../../utils/formmaters'

import { ToastContainer } from 'react-toastify'

export default function Dashboard(){
  const { isError, isLoading } = useService()
  const { fruits } = useGlobalContext()
  console.log(isError)
  return(
    <>
      {isError &&
      <span className="indispo-msg">Desculpe, não é possivel realizar a ação!.</span>
      }
      {fruits.length === 0 && !isError &&
        <span className="indispo-msg">Varejo indisponivel!</span>
      }
      <ToastContainer />  
      <section className="grid">
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
      </>
  )
}