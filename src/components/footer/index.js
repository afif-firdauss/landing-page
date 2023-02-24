import React from 'react';
import Col from 'react-bootstrap/Col';

export default function Footer() {
  const tautanList = ['Tentang Pegadaian Digital', 'Promo', 'Pusat Bantuan', 'Syarat & Ketentuan', 'Kebijakan Privasi', 'Hubungi Kami'];

  return (
    <footer>
      <div className='footer py-5'>
        <div className='container'>
          <div className='row'>
            <Col lg={4} md={12}>
              <h5>Tautan Cepat</h5>
              <ul className="footer-tautan">
                {tautanList.map((list, index) => {
                  return (
                    <li key={index}>{list}</li>
                  )
                })}
              </ul>
            </Col>

            <Col lg={4} md={12} className="mt-5 mt-lg-0">
              <h5>Download Pegadaian Digital</h5>

              <div className='mb-5'>
                <img src="./assets/google-play.png" alt="google play" height={40} className="me-2 pointer" />
                <img src="./assets/appstore.png" alt="appstore" height={40} className="pointer" />
              </div>

              <h5>PT. Pegadaian terdaftar dan diawasi oleh</h5>
              <div>
                <img src="./assets/ojk.png" alt="ojk" height={80} />
              </div>
            </Col>

            <Col lg={4} md={12} className="mt-5 mt-lg-0">
              <h5>Kantor Pusat Pegadaian</h5>

              <div>
                <div className='d-flex align-items-start'>
                  <img src="./assets/address-icon.svg" alt="" />
                  <p className='mb-0 ms-2'>Jl. Kramat Raya 162 Jakarta Pusat 10430 <br/>Indonesia</p>
                </div>
                <div className='mt-4 d-flex'>
                  <div className='d-flex align-items-start'>
                    <img src="./assets/phone.svg" alt="" />
                    <p className='mb-0 ms-2'>021 3155 550</p>
                  </div>
                  <div className='d-flex align-items-start ms-3'>
                    <img src="./assets/box-mail.svg" alt="" />
                    <p className='mb-0 ms-2'>021 3155 550</p>
                  </div>
                </div>
              </div>

              <div className='mt-4'>
                <img src="./assets/call-center.svg" alt="" />
              </div>
            </Col>
          </div>
        </div>
      </div>

      <div className='container my-4'>
        <span>Copyright © 2021 PT. Pegadaian. All Rights Reserved.</span>
      </div>
    </footer>
  )
}
