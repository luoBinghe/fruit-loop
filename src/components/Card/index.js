import { useGlobalContext,  } from '../../hooks/useGlobalContext'
import { useNavigate } from 'react-router'


import './style.scss'
import { parseDouble } from '../../utils/formmaters'

export default function Card(){
  const { isLogged, cart, removeProduct, updateProductAmount } = useGlobalContext()
  // const [totalPrice, setPrice] = useState()
  const navigate = useNavigate()

  const handleGeneratePdf = () => {
    if(!isLogged) navigate('/login')

    console.log('aaaa')
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