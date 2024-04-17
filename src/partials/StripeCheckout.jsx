import React, { useState, useEffect } from 'react';
// import { View, Text, Image, StyleSheet, Button } from 'react-native';

function StripeCheckout() {

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
}
export default StripeCheckout;
