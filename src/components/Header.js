import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'
import index from  '../pages/index'

class Header extends React.Component {
  render () {
    return (
      <header id='header'>
        <div className='inner'>
          {/* <a href='index' className='image avatar'>
            <img src={avatar} alt='' />
          </a> */}
          <h1>A.D.Faris portfolio page</h1>
          <span>email: adfaris@gmail.com</span>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
