import React from 'react'

function Results({ results }) {
  return (
    <div className='results'>
      {results.length > 0 ? results.map((item => {
        return (
          <div className='result'>
            <img src={item.strMealThumb} alt={item.strMeal} className='resultImage'/>
            <div class="overlay">
              <h4 className='image-header'>{item.strMeal}</h4>
            </div>
          </div>
        )
      })):''}
    </div>
  )
}

export default Results