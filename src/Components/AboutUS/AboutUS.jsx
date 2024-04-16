import React from 'react'
import { images } from '../../constants'
import "./aboutus.css"
const AboutUS = () => {
  return (
    <div className='container aboutus_page about_bg about__flex_center' id='about'>
        <div className="aboutUS-overLay flex-center_about">
            <img src={images.G} alt="ge" />
        </div>

        <div className="aboutUS-content flex-center_about">

            <div className="aboutUS-context_about">
               <h1 className="headtext__cormorant">About Us</h1>
               <img src={images.spoon} alt="about_spoon" className='spoon_img'/>
              <p className="p__title_home">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Quis <br /> pharetra adipiscing ultrices vulputate posuere tristique. 
                In sed <br /> odio nec aliquet eu proin mauris et.
              </p>
              <a href="#contact"><button type='button' className='global_btn about__btn'>Know more</button></a>
            </div>

            <div className="app__aboutus-content_knife flex-center_about ">
              <img src={images.knife} alt="about_knife" />
            </div>


            <div className="aboutUs_context__history">
              <h1 className="headtext__cormorant">Our History</h1>
              <img src={images.spoon} alt="about_spoon" className="spoon__img" />
              <p className="p__title_home">
                Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. <br /> 
                Risus placerat morbivolutpat habitasse interdum mi <br /> aliquam 
                In sed odio nec aliquet.
              </p>
              <a href="#contact"><button type='button' className='global_btn about__btn'>Know more</button></a>
            </div>
        </div>
    </div>
  )
}

export default AboutUS
