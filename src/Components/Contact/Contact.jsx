import { images } from "../../constants"
import SubHeading from "../SubHeading/SubHeading"
import Subscribe from "./Subscribe/Subscribe"
import "./contact.css"

const Contact = () => {
  return (
    <div className="container " id="contact">
      <div className="contact__section">
      <div className="contact__page_left">
          <div className="contact_page__title">
            <SubHeading title="Contact" className="contactUs"/>
            <h1 className="p__title_home contact__findUS">Find US</h1>
            <p className="p__title">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>

            <div className="opening__hours_info">
              <h1 className="p__title_home opening_hours_title">Opening Hours</h1>
              <p className="p__title opening__hours_p">Mon - Fri: 10:00 am - 02:00 am</p>
              <p className="p__title opening__hours_p">Sat - Sun: 10:00 am - 03:00 am</p>
              <button className="global_btn" style={{marginTop:"1rem"}}>Visit Us</button>
            </div>
          </div>
       </div>

       <div className="contact-section__right_img">
          <img src={images.findus} alt="Ccoteil image" />
       </div>
      </div>

       <Subscribe/>
    </div>
  )
}

export default Contact
