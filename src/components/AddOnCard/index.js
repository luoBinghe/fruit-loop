import React from 'react'
import { useGlobalContext } from '../../hooks/useGlobalContext'
import './style.scss'

export default function AddOnCard({ name, quantity, price, img, id ,disabled }){
  const { addProduct } = useGlobalContext()

  const item = {
    price: price,
    id: id,
    name: name,
    img: img,
  }

  return(
    <div className='card-button'>
      <button disabled={disabled} onClick={() => addProduct(item.id)}>
        adicionar ao carrinho
      </button>
    </div>
  )
}