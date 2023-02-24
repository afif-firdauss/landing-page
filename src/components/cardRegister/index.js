import React from 'react'
import Button from '../button'

export default function CardRegister() {
  return (
    <div className='card-register'>
      <div className='d-flex'>
        <div className='me-3'>
          <img src="./assets/avatar-green.png" alt="" />
        </div>

        <div className='d-flex justify-content-between align-items-center flex-wrap w-100'>
          <div>
            <h4 className='fs-6 fw-bold'>Atur Keuangan dalam Genggaman</h4>
            <p className='mb-0'>Daftar akun Pegadaian Digital atau masuk ke akunmu untuk transaksi dengan mudah.</p>
          </div>

          <div className='mt-4 mt-lg-0'>
            <Button title="Masuk" className="btn-outline" style={{ padding: '6px 30px' }} />
            <Button title="Daftar" className="btn-primary ms-3" style={{ padding: '6px 30px' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
