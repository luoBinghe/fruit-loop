import React from 'react'
import { useGlobalContext } from '../../hooks/useGlobalContext'
import './style.scss'

export default function AddOnCard({ name, quantity, price, img, id ,disabled }){
  const { handleAddItem } = useGlobalContext()

  const item = {
    price: price,
    id: id,
    name: name,
    img: img,
  }

  return(
    <div className='card-button'>
      <button disabled={disabled} onClick={() => handleAddItem(item)}>
        adicionar ao carrinho
      </button>
    </div>
  )
}