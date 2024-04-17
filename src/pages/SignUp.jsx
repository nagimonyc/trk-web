import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import StripeCheckout from '../partials/StripeCheckout';
import backgroundImage2 from '../images/IMG_8105.jpeg';
import backgroundImage1 from '../images/Desktop-Stripe-integration-2.png';

function SignUp() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="flex-grow flex md:flex-row flex-col">
        <div className="w-full md:w-1/2 flex flex-col">
          {/* Using TailwindCSS utilities directly to manage the layout */}
          <img src={backgroundImage2} alt="Background" className="w-full h-full object-cover" />
        </div>
        <div id="checkout" className="w-full md:w-1/2 p-4 md:p-8 bg-white">
          <StripeCheckout />
          {/* Stripe Checkout will be mounted here */}
        </div>
      </main>
    </div>
  );
}

export default SignUp;