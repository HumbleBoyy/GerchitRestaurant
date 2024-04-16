
import { useState } from "react";
import SubHeading from "../../SubHeading/SubHeading";
import "./subscribe.css"

const Subscribe = () => {
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = () => {
        setSubscribed(!subscribed)

    }
  return (
    <div className='container subscribe__mini_page'>
        <div className="subscribe_contents_wrapper">
            <div className="subscribe_texts">
                  <SubHeading title="Newsletter"/>
                  <h1 className="p__title_home subscribe__title_big">Subscribe to Our Newsletter</h1>
                  <p className="p__title subscribe__title_p">And never miss latest Updates!</p>
            </div>

            <div className="subscribe_input_and_button">
                <input type="email" className="subscribe_input" placeholder="Email adress"/>
                <button onClick={handleSubscribe}>{subscribed ? "Subscribed" : "Subscribe"}</button>
            </div>
        </div>
    </div>
  )
}

export default Subscribe;
