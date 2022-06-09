import React from 'react'
import './places.css';

import Place from '../../components/place/Place';
import america from './../../assets/america.png'
import london from './../../assets/london.png'
import france from './../../assets/france.png'
import spain from './../../assets/spain.png'
import india from './../../assets/india.jpg'
import sydney from './../../assets/sydney.jpg'

const Places = () => {
  return (
    <div className='onesite__places'>
      <div className='onesite__places-header'>
        <h1>We are available in many well-known countries</h1>
      </div>
      <div className='onesite__places-container'>
        <Place imgURL={america} country="america" />
        <Place imgURL={france} country="france" />
        <Place imgURL={india} country="india" />
        <Place imgURL={sydney} country="sydney" />
        <Place imgURL={london} country="london" />
        <Place imgURL={spain} country="spain" />
      </div>
    </div>
  )
}

export default Places