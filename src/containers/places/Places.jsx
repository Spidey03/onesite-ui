import React from 'react'
import './places.css';

import Place from '../../components/place/Place';
import {america, london, france, spain, india, sydney } from './import'
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