import React from 'react'
import './style.scss'

export default function Grid({name, quantity, price, img, id, onHandleSub, onHandleAdd, total, disabled}){
  return(
    <div id={id} className='container'>
      <img src={img} />
      <section className='title'>
        <p>{name}</p>
      </section>
      <section className='info-data'>
          <p>Estoque: {quantity}</p>
          <p>Preço: R${price}</p>
      </section>
      <div className='quantity'>
        <button onClick={onHandleAdd}>+</button>
        <p>{total}</p>
        <button onClick={onHandleSub}>-</button>
      </div>
      <div className='card'>
        <button disabled={disabled}>
          adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}