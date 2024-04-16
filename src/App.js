import './App.css';
import Home from './Components/Home/Home';
import AboutUS from './Components/AboutUS/AboutUS';
import Menu from './Components/Menu/Menu';
import Navbar from './Components/Navbar/Navbar';
import Awards from './Components/Awards/Awards';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { useEffect, useState } from 'react';
import { BiLoader} from 'react-icons/bi';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    const fetchData = async ()=>{
      try{
        
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false)

      }catch(error){
        alert.error("Error fetching data: ", error)
      }
    }

    fetchData();
  }, [])
  return (
    <>

    <div>
      {isLoading ? (
           <BiLoader
           type="pacman"
           timeout={3000} // 3 secs timeout for the loader
           className='loader'
         />

      ): (
        <>
            {/* Navbar section */}
         <Navbar/>
       {/* Navbar section */}
      {/* Navbar section */}
        <Home/>
      {/* Navbar section */}


      {/* Navbar section */}
        <AboutUS/>
      {/* Navbar section */}

      {/* Navbar section */}
         <Menu/>
      {/* Navbar section */}

      {/* Awards section */}
         <Awards/>
      {/* Awards section */}

      {/* Awards section */}
        <Contact/>
      {/* Awards section */}

      {/* Awards section */}
        <Footer/>
      {/* Awards section */}

        </>
      )}
    </div>
    </>
  )
}

export default App
