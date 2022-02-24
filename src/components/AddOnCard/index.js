import React from 'react'
import { useGlobalContext } from '../../hooks/useGlobalContext'
import { toast } from 'react-toastify'
import './style.scss'

export default function AddOnCard({ name, quantity, price, img, id ,disabled }){
  const { addProduct } = useGlobalContext()

  const item = {
    price: price,
    id: id,
    name: name,
    img: img,
  }

  const handleAddProduct = (id) => {
    addProduct(id)
    return toast.success('Produto adicionado ao carrinho',  { 
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