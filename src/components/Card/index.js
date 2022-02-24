import { useGlobalContext,  } from '../../hooks/useGlobalContext'
import { useNavigate } from 'react-router'
import jsPDF from "jspdf";

import './style.scss'
import { parseDouble } from '../../utils/formmaters'

export default function Card(){
  const { isLogged, cart, removeProduct, updateProductAmount, clearCard } = useGlobalContext()
  const doc = new jsPDF()
  const navigate = useNavigate()

  const handleGeneratePdf = () => {
    if(!isLogged) navigate('/login')

    cart.forEach(v => {
      doc.text(10, 20, `produto ${v.name}`)
      doc.text(`quantidade ${v.amount}`, 10, 30)
      doc.text(`preço ${v.price}`, 10, 40)
    })
    doc.text(`Valor total: ${total}`, 10, 10)

    
    doc.save('comprovante.pdf')
    navigate('/')
    return clearCard()
  }

  const total = parseDouble(cart.reduce((sumTotal, product) => {
    return sumTotal + product.price * product.amount
  }, 0))

  function handleProductIncrement(id, amount) {
    updateProductAmount({ productId: id, amount: amount + 1 })
  }

  function handleProductDecrement(id, amount) {
    updateProductAmount({ productId: id, amount: amount - 1 })
  }

  function handleRemoveProduct(productId) {
    removeProduct(productId)
  }

  return(
    cart.length > 0 ?
      <div className='card'>
        <div className="card-item">
          {cart.map(item => (
            <div className='grid-card'>
              <section key={item.id}>
                <p>{item.name}</p>
                <button onClick={() => handleProductIncrement(item.id, item.amount)}>
                  +
                </button>
                <img src={item.img} />
                <button onClick={() => handleProductDecrement(item.id, item.amount)}>
                  -
                </button>
                <p>quantidade: {item.amount}</p>
                <p>preço: {item.price}</p>
              </section>
              <button className='remove' onClick={() => handleRemoveProduct(item.id)}>
                remover
              </button>
            </div>
          ))}
      </div>
      <span>total: R$ {total}</span>
      <button className='finally' onClick={() => handleGeneratePdf()}>Finalizar</button>
      </div>
    :
    <span className='span-msg'>
      Não há nada em seu carrinho neste momento...
      <button onClick={() => navigate('/')}>
        ir para o varejo
      </button>
    </span>
  )
}