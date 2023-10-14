import './Home.css';
import Hero from './Home/Hero';
import Faq from './Home/Faq';
import Team from './Home/Team'
import Footer from './Home/Footer';
import Main from './Home/Main';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function Home() {

  useEffect(()=>{
    AOS.init({
      duration : 600,
      delay :200
    });
  },[])


  return (
    
    <div className='w-[100vw] bg-[#240046]'>
      <Hero />
      <Main/>
      <Faq/>
      <Team/>
      <Footer/>
    </div>
    

  );
}

export default Home;
