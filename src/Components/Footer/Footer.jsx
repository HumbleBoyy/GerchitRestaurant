import React from 'react'
import "./footer.css"
import SubHeading from "../SubHeading/SubHeading"
import { images } from '../../constants'
const Footer = () => {
  return (
    <div className='container footer_end_of_the_site'>
       <div className="footer_items__wrapper">
          <div className="footer__left_items">
             <h2 className='footer_Contact'>Contact Us</h2>
             <p className='adress_p'>9 W 53rd St, New York, NY 10019, USA</p>
             <p className="adress_p">+1 212-344-1230</p>
             <p className="adress_p">+1 212-555-1230</p>
          </div>

          <div className="footer__center_items">
             <h1 className='footer_gerchit'>Gerícht</h1>
             <p className='adress_p'>"The best way to find yourself is to lose yourself in the service of others.”</p>
             <SubHeading/>
             <div className="socila_media_icons">
               <img src={images.insta} alt="insta" />
               <img src={images.faceB} alt="faceB" />
               <img src={images.twit} alt="twit" />
             </div>
          </div>

          <div className="footer__right_items">
             <h2 className='footer_Contact'>Working Hours</h2>
             <p className='adress_p'>
               Monday-Friday: <br />
               08:00 am -12:00 am
             </p>
             <p className='adress_p'>
                Saturday-Sunday: <br />
                07:00am -11:00 pm
             </p>
          </div>
       </div>
       <p className='adress_p' style={{textAlign:"center", marginTop:"0.5rem"}}>2024 Gerícht. All Rights reserved.</p>
    </div>
  )
}

export default Footer
