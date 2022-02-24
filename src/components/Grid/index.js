import React from 'react'
import './style.scss'

import AddOnCard from '../AddOnCard'

export default function Grid({name, quantity, price, img, id, disabled}){
  return(
    <div key={id} className='container'>
      <div className='img-style'>
        <img src={img} />
      </div>
      <section className='title'>
        <p>{name}</p>
      </section>
      <section className='info-data'>
          <p>Estoque: {quantity}</p>
          <p>Preço: R${price}</p>
      </section>
      <AddOnCard name={name} quantity={quantity} price={price} img={img} id={id} disabled={disabled} />
    </div>
  )
}