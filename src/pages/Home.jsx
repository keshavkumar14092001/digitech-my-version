import React from 'react'
import GlobeGif from '../Assets/Img/GlobeGif.gif';
import HomeContent from '../components/HomeContent';
import WhyChooseUs from '../components/WhyChooseUs';
import IndustryWeServe from '../components/IndustryWeServe';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';
import Overlay from '../components/Overlay';
import NewsLetter from '../components/NewsLetter';

const Home = () => {
  return (
    <>
      <div>
        <div className='bg-[#010718] flex flex-col lg:flex-row justify-around items-center h-[725px]'>
          <div className='w-full lg:w-1/2 h-full'>
            <HomeContent />
          </div>
          <div className='lg:w-1/2 flex items-center justify-center'>
            <img src={GlobeGif} alt='loading' />
          </div>
        </div>
        <div className="bg-[url('../src/Assets/Img/whyChooseUs.svg')]">
          <WhyChooseUs />
        </div>
        <div className='bg-gray-200'>
          <IndustryWeServe />
        </div>
        <div>
          <Testimonials />
        </div>
        <div>
          <Services />
        </div>
        <div className='mainContainer'>
          <Overlay />
        </div>
        <div className="bg-[url('../src/Assets/Img/whyChooseUs.svg')]">
          <NewsLetter />
        </div>
      </div>
    </>
  )
}

export default Home;