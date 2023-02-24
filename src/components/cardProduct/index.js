import React from 'react'

export default function CardProduct({ data }) {
  return (
    <div className='card-product mt-4 d-flex justify-content-between pointer'>
      <div className='d-flex align-items-center'>
        <img src={`./assets/product-${data.img}.svg`} alt={data.name} height={32} />
        <span className='ms-3'>{data.name}</span>
      </div>

      <div>
        <img src="./assets/arrow-right.svg" alt="" />
      </div>
    </div>
  )
}
