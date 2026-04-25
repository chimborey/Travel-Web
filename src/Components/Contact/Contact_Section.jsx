import React from 'react'
import { Link } from 'react-router-dom'

const Contact_Section = () => {
  return (
    <section className=' w-full overflow-hidden bg-white rounded_Book rounded-lg py-5 px-5 relative'>
      <Link to={'https://maps.app.goo.gl/QAZxhqy9CG1b54tG8'}>
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUtbQyOWZBreVYlm36sjg88p1iB262tAnL8YEqlpL2ziWOzXB9xe7CLIezg1DSpvWhadoUNNnAJlyBBaWmz6XLSKpuWPfI8ZwjU3Y-zShPSIPKRDhQa6LM0D2ot6H02KRFg4m1IHZNbdsb2ruhwjC-c1ACJsJ7XA8x_RFleMnVRZtIPSyG7XS-D7YAS2gQ/s2720/PhnomPenh-Bus-PublicTransport-GoogleMaps-Cambodia-Screenshot-KhmerInterface.webp" alt="" className=' w-full h-96 rounded-lg' />
        <div className=' absolute inset-0 bg-black/45'/>
        <div className=' absolute top-3 left-3 bg-white rounded-lg px-3 py-3'>
          <h3 className='text-black text-md capitalize'>phnom penh</h3>
        </div>
      </Link>
    </section>
  )
}

export default Contact_Section