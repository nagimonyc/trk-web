import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../partials/Header';
import backgroundImage2 from '../images/IMG_8105.jpeg';
import backgroundImage1 from '../images/Desktop-Stripe-integration-2.png';

function SignUp() {

  // Initialize Stripe.js
  const stripe = Stripe('pk_live_51OaSWnEQO3gNE6xrKK1pHZXzWux71xpxXpA3nQNtNK30Vz43sCQeJzO7QuMk708tOGvGstsLbBS1jtMCIWZ14UCR00j1Bt80cF');

  useEffect(() => {
    // Only initialize Stripe and Checkout once when the component mounts
    initialize();
  }, []);

  // Fetch Checkout Session and retrieve the client secret
  async function initialize() {
    const fetchClientSecret = async () => {
      const response = await fetch("https://us-central1-trk-app-505a1.cloudfunctions.net/createCheckoutSession", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Example amount and currency - adjust according to your needs
          amount: 299, // $2.99 (IN CENTS)
          currency: 'usd',
          //No email (FOR NOW)
        }),
      });
      const { clientSecret } = await response.json();
      console.log('Client Secret is: ', clientSecret);
      return clientSecret;
    };

    // Initialize Checkout
    const checkout = await stripe.initEmbeddedCheckout({
      fetchClientSecret,
    });

    // Mount Checkout
    checkout.mount('#checkout');
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Page content */}
      <main className="flex-grow flex md:flex-row flex-col">
        <div className="w-full md:w-1/2">
          <img src={backgroundImage2} alt="Background" className="w-full h-auto md:h-full object-cover" />
        </div>
        <div id="checkout" className="w-full md:w-1/2 p-4 md:p-8 bg-white">
          {/* Stripe Checkout will be mounted here */}
        </div>
      </main>
    </div>
  );
}

export default SignUp;