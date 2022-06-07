import React from 'react'
import './places.css';

import Place from '../../components/place/Place';
import america from './../../assets/america.png'
import london from './../../assets/london.png'
import france from './../../assets/france.png'
import spain from './../../assets/spain.png'

const Places = () => {
  return (
    <div className='onesite__places'>
      <div className='onesite__place-header'>
        <h1>We are available in many well known countries</h1>
      </div>
      <div className='onesite__places-container'>
        <Place imgURL={america} country='America'/>
        <Place imgURL={spain} country='Spain'/>
        <Place imgURL={london} country='london'/>
        <Place imgURL={france} country='france'/>
      </div>
    </div>
  )
}

export default Places