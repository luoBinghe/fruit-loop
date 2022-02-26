import React from 'react'
import { useGlobalContext } from '../../hooks/useGlobalContext'
import { toast } from 'react-toastify'
import './style.scss'

export default function AddOnCard({ name, quantity, price, img, id ,disabled }){
  const { cart, addProduct } = useGlobalContext()

  const item = {
    price: price,
    id: id,
    name: name,
    img: img,
  }
  console.log(cart)
  const handleAddProduct = (id) => {
    const findProduct = cart.find(prd => prd.id === id)

    if(!findProduct){
      addProduct(id)
      return toast.success('Produto adicionado ao carrinho',  { 
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER
      })
    }else if(findProduct.quantity > findProduct?.amount) {
      addProduct(id)
      return toast.success('Produto adicionado ao carrinho',  { 
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER
      })
    }

    return toast.warning('Fora de estoque',  { 
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_CENTER
    })
  }

  return(
    <div className='card-button'>
        <button disabled={disabled} onClick={() => handleAddProduct(item.id)}>
          adicionar ao carrinho
        </button>   
    </div>
  )
}