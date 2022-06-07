import React from 'react'
import './place.css';

const Place = ({imgURL, country}) => {
  return (
    <div className="onesite__place">
      <div className='onesite__place-img'>
        <img src={imgURL} alt={country} />
      </div>
      <h2>{country}</h2>
    </div>
  )
}

export default Place