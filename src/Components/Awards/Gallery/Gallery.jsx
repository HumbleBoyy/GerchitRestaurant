import React, { useRef } from 'react'
import SubHeading from '../../SubHeading/SubHeading'
import { images } from '../../../constants'
import { BsArrowLeftShort, BsArrowRightShort, BsInstagram } from 'react-icons/bs'
import "./gallery.css"
const Gallery = () => {
    const scrollRef = useRef(null)

    const scroll = (direction)=> {
        const {current} = scrollRef;

        if(direction === "left"){
            current.scrollLeft -= 300;
        }else{
            current.scrollLeft +=300;
        }
    }
  return (
    <div className='app__gallery flex__center'>
       <div className="app__gallery_content">
          <SubHeading title="Instagram"/>
          <h1 className='headText__title'>Photo Gallery</h1>
          <p className="p__title" style={{ color: '#AAAAAA', marginTop: '2rem' }}>
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. <br /> Volutpat mattis ipsum
            turpis elit elit scelerisque egestas mu.
        </p>
        <button type='button' className='global_btn' style={{marginTop:"1rem"}}>View more</button>
       </div>

       <div className="app__gallery-images">
          <div className="app__gallery-images_container" ref={scrollRef}>
               {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, idx)=> (
                 <div className="app__gallery-images_card flex-center" key={`gallery_image-${idx + 1}`}>
                     <img src={image} alt="gallery_image" />
                     <BsInstagram className="gallery__image-icon" />
                 </div>
               ))}
          </div>
          <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
       </div>
    </div>
  )
}

export default Gallery
