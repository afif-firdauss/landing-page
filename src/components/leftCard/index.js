import React from 'react'
import CardPrice from '../cardPrice';

export default function LeftCard() {
  return (
    <div className='left-card mt-lg-0 mt-5'>
      <h2 className='left-card__title'>Tabungan Emas</h2>
      <p className='fs-6'>Tanggal: 24 February 2023</p>
    
      <CardPrice />
    </div>
  )
}
