import { useGlobalContext } from '../../hooks/useGlobalContext'
import { useNavigate } from 'react-router'

import './style.scss'

export default function Card(){
  const { isLogged, cardItem } = useGlobalContext()
  const navigate = useNavigate()

  const handleGeneratePdf = () => {
    if(!isLogged) navigate('/login')

    console.log('aaaa')
  }

  return(
    <div className="card">
      {cardItem &&
        <>
        <section>
          <img src={cardItem.img} />
          <button>
            +
          </button>
          <button>
            -
          </button>
        </section>
        <span>total: 600,00</span>
        <button className='finally' onClick={() => handleGeneratePdf()}>Finalizar</button>
        </>
      }
    </div>
  )
}