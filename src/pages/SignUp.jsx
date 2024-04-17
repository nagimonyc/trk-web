import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StripeCheckout from '../partials/StripeCheckout';
import backgroundImage2 from '../images/IMG_8105.jpeg';
import backgroundImage1 from '../images/Desktop-Stripe-integration-2.png';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // replace '#root' with the id of your app's root element



function SignUp() {

  const [modalIsOpen, setModalIsOpen] = useState(true); // Initialize the modal state

  // Function to open the modal
  const openModal = () => {
    setModalIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#1E1D1F'
          },
        }}
      >
        <h1 style={{ color: 'white' }}>Welcome to Nagimo</h1>
        <p style={{ color: 'white' }}>Please sign in or sign up below.</p>
        <div style={{}}>
          <label htmlFor='email' style={{ display: 'block', color: 'white' }}>Email</label>
          <input className="" placeholder="you@email.com" type="email" id="email" style={{ borderRadius: 7.5, height: 42, width: '100%' }} />
          <button style={{ fontWeight: '550', fontSize: 16, backgroundColor: 'white', borderRadius: 7.5, height: 42, width: '100%' }}>Continue with Email</button>
        </div>
        <button onClick={closeModal}>Close</button> {/* Button to close the modal */}
      </Modal >
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
    </div >
  );
}

export default SignUp;