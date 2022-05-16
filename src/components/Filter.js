import React from 'react'
import ReactStars from 'react-rating-stars-component'

const Filter = ({ setFilterText, setfilterrate }) => {

  return (
    <div>
      <div className='search'>
        <h2>search by text</h2>
        <input type="text" onChange={(e) => setFilterText(e.target.value)} />
        <h2>search by rating</h2>
        <ReactStars
          count={5}
          size={24}
          activeColor="#ffd700"
          onChange={(newRating) => setfilterrate(newRating)}
        />
      </div>
    </div>
  )
}

export default Filter