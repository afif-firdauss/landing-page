import React, { useState } from 'react'

export default function ButtonGroup() {
  const [active, setActive] = useState(0)
  const label = ['1 Minggu', '1 Bulan', '6 Bulan', '1 Tahun'];

  return (
    <div className='mb-4 button-group'>
      {label.map((item, index) => {
        return (
          <div key={index} className={`button-group__item ${active === index && 'active'}`} onClick={() => setActive(index)}>
            {item}
          </div>
        )
      })}
    </div>
  )
}
