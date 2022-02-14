import React from 'react'

function NavBar({ handleClick }) {
  return (
    <div>
      <ul className='nav-items'>
        <li>
          <a href="#" onClick={() => handleClick('curry')}>Curry</a>
        </li>
        <li>
          <a href="#" onClick={() => handleClick('chicken')}>Chicken</a>
        </li>
        <li>
          <a href="#" onClick={() => handleClick('seafood')}>Seafood</a>
        </li>
        <li>
          <a href="#" onClick={() => handleClick('pizza')}>Pizza</a>
        </li>
        <li>
          <a href="#" onClick={() => handleClick('burger')}>Burger</a>
        </li>
        <li>
          <a href="#" onClick={() => handleClick('cake')}>Cake</a>
        </li>
        <li>
          <a href="#" onClick={() => handleClick('biryani')}>Biryani</a>
        </li>
        <li>
          <a href="#" onClick={() => handleClick('tart')}>Tarts</a>
        </li>
        <li>
          <a href="#" onClick={() => handleClick('cheese')}>Cheese</a>
        </li>
        <li>
          <a href="#" onClick={() => handleClick('bread')}>Bread</a>
        </li>
      </ul>
    </div>
  )
}

export default NavBar