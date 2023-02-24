import React from 'react';
import Button from '../button';
import { useMediaQuery } from 'react-responsive'

export default function Header() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 992px)'
  })

  return (
    <header className='header'>
      <div className='container d-flex flex-column flex-lg-row justify-content-lg-between justify-content-center'>
        <div className='text-center'>
          <img src={`./assets/${isDesktop ? 'logo' : 'logo-center'}.svg`} alt="pegadaian logo" loading='eager' />
        </div>

        <div className='d-flex flex-wrap flex-row align-items-center mt-5 mt-lg-0 justify-content-between gap-4'>
          <div className='d-flex align-items-center me-3'>
            <img src='/assets/avatar.svg' alt="avatar" loading='eager' />
            <span className='ms-3 text-white'>Halo, Sahabat!</span>
          </div>

          <div>
            <Button title="Masuk" className="btn-primary me-3" />
            <Button title="Daftar" className="btn-secondary" />
          </div>
        </div>
      </div>
    </header>
  )
}
