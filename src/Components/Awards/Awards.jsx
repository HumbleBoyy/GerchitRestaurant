import "./awards.css"
import { images } from '../../constants';
import SubHeading from '../SubHeading/SubHeading'
import Video from "./VideoPlay/Video";
import Laurels from "./Laurels/laurels";
import Gallery from "./Gallery/Gallery";
const Awards = () => {
  return (
    <div className="container about_bg awards_section" id="awards">
       <div className="awards__secondContainer">
       <div className="awardsPage__main_image">
         <img src={images.chef}/>
      </div>
      <div className="awards__wrapper_info">
         <SubHeading title={"Chef's word"}/>
         <h1 className="head_text">What we believe in</h1>


         <div className="awards_chef_content">
            <div className="awards_chef_content_quote">
               <img src={images.quote} className="chef__image" alt="quote_image"/>
               <p className="p__title">Lorem ipsum dolor sit amet,  consectetur adipiscing elit <br />   auctor sit .</p>
            </div>
            <p className="p__opensans"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, 
             aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
         </div>
         <div className="awards_chef__sign">
            <p className="kevinLuo">Kevin Luo</p>
            <p className="p__title">Chef & Founder</p>
            <img src={images.sign} alt="sign image" />
         </div>
      </div>
       </div>
       <Video/>
       <Laurels/>
       <Gallery/>
    </div>
  )
}

export default Awards
