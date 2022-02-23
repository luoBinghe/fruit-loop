import React from 'react'
import './style.scss'

export default function Grid({name, quantity, price, img, id, disabled}){
  return(
    <div key={id} className='container'>
      <img src={img} />
      <section className='title'>
        <p>{name}</p>
      </section>
      <section className='info-data'>
          <p>Estoque: {quantity}</p>
          <p>Preço: R${price}</p>
      </section>
      <div className='card'>
        <button disabled={disabled}>
          adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}