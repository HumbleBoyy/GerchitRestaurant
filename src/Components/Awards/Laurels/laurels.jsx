import React from 'react'
import SubHeading from '../../SubHeading/SubHeading'
import { data, images } from '../../../constants'
import "./laurels.css"

const AwardsCard = ({award: {imgUrl, title, subtitle}})=> (
    <>
      <div className='app__laurels_awards-card'>
        <img src={imgUrl} alt="awards" />
        <div className="app_laurels_awards-card_content">
            <p className='p__title_home'>{title}</p>
            <p className='p__title'>{subtitle}</p>
        </div>
      </div>
    </>
)
const Laurels = () => {
  return (
    <div className='about_bg app_wrapper section_padding'>
        <div className="app__wrapper_info">
             <SubHeading title="Awards & recognition"/>
             <h1 className='headText_title' style={{color:"#DCCA87"}}>Our Laurels</h1>

             <div className="app__laurels_awards">
                {data.awards.map((award)=> 
                <AwardsCard award={award} 
                key={award.title}/>
                )}
             </div>
        </div>

        <div className="app_wrapper_img">
             <img src={images.laurels} alt="laurels_img" />
        </div>
    </div>
  )
}

export default Laurels
