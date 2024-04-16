import React from 'react'
import "./MenuItem.css"
const MenuItem = ({title, price, tags}) => {
  return (
    <div className='menuItem'>
      <div className="menuItem_header">
         <div className="menuItem__name">
             <p className='p__title' style={{color:"#DCCA87"}}>{title}</p>
             <p className='p__title' style={{color:"#AAAAAA"}}>{tags}</p>
         </div>
         <div className="menuItem__dash"/>
         <div className="menuItem__price">
                 <p  className='p__title'>{price}</p>
          </div>
      </div>
    </div>
  )
}

export default MenuItem
