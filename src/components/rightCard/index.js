import CardProduct from '../cardProduct'
import React from 'react'
import { listProduct } from '../../utils/Constant'

export default function RightCard() {
  return (
    <div className='right-card'>
      <h1 className='right-card__title'>Mau transaksi apa hari ini?</h1>
      {listProduct.map((data, index) => {
        return (
          <CardProduct data={data} key={index} />
        )
      })}
      <div className='right-card__info'>
        <span>Lihat Semua produk</span>
      </div>
    </div>
  )
}
