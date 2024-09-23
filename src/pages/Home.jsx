import React from 'react';
import Hero from '../components/Hero';
import Hero1 from '../components/Hero1';


import LatestCollection from '../components/LatestCollection';
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import NewsLetterBox from '../components/NewsLetterBox';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Hero1/>
      
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home
