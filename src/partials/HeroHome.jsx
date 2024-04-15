import React from 'react';
import backgroundImage from '../images/Desktop-Stripe-integration-2.png'

function HeroHome() {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="flex justify-center items-center h-screen bg-no-repeat bg-center bg-cover md:bg-contain lg:bg-cover">
      <p className='text-white text-xl'>hello</p>
    </div >
  );
}

export default HeroHome;