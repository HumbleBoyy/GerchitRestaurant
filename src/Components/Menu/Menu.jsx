import SubHeading from '../SubHeading/SubHeading'
import { data, images } from '../../constants';
import MenuItem from '../MenuItem/MenuItem';
import "./menu.css"
const Menu = () => {
  return (
    <div className='container specialMenu menu_flex__center' id='menu'>
        <div className="specailMenu__title">
        <SubHeading title="Menu that fits your palatte" />
        <h1 className='menu__headText'>Today&apos;s Special</h1>
        </div>


        <div className="menu__Special_menu">
            <div className="specialMenu__drinks menu_flex__center">
               <p className="menu__Heading_title">Wine & Beer</p>
            <div className="menu__items">
            {data.wines.map((wine, index)=> (
              <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
            ))}
            </div>
            </div>

            <div className="menu__center_image">
                <img src={images.menu} alt="menu__Image" />
            </div>


            <div className="specialMenu__coctails menu_flex__center">
              <p className="menu__Heading_title">Coctails</p>
            <div className="menu__items">
            {data.wines.map((coctail, index)=> (
              <MenuItem key={coctail.title + index} title={coctail.title} price={coctail.price} tags={coctail.tags}/>
            ))}
         </div>
         </div>
        </div>

        <div style={{marginTop:15}}>
            <a href="#contact"><button  className='global_btn'>View more</button></a>
        </div>
    </div>
  )
}

export default Menu
