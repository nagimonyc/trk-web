import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../partials/Header';

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

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Welcome. We exist to make entrepreneurism easier.</h1>
              </div>

              {/* Form */}
              <div className="max-w-lg mx-auto">
              <div id="checkout">
              </div>
              </div>

            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default SignUp;