import React from 'react'
import './styles.scss'
import homeImage from '../../images/homeImage.png'

const Home = () => {
   return (
      <div className='containerHome'>
         <img src={homeImage} className='homeImage' alt='HomeImage' />
      </div>
   )
}

export default Home