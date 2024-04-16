import React from 'react'
import {images} from '../../constants'
const SubHeading = ({title}) => {
  return (
    <div style={{marginBottom:'1rem'}}>
        <p className='p__title'>{title}</p>
        <img src={images.spoon} alt='sppon__image' className='spoon_image'/>
    </div>
  )
}

export default SubHeading
