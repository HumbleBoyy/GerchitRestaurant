import SubHeading from '../SubHeading/SubHeading'
import { images } from '../../constants'
import './home.css'

const Home = () => {
  return (
    <>
    
    <div className='container home__app_top' id='home'>
        <div className="home__app_wrapper">
           <SubHeading title="Chase the new flavour"/>
           <h1 className='home__page_title'>The Key To Fine Dining</h1>
           <p className="p__title_home" style={{ margin: '2rem 0' }}>
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat <br /> 
            morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
           <a href="#menu"><button className='global_btn'>Explore Menu</button></a>
        </div>

        <div className='home__app__image'>
            <img src={images.welcome} alt="Welcome_image" />
        </div>
    </div>
    </>
  )
}

export default Home
