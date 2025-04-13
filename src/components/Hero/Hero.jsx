import React from 'react';

import './Hero.scss';

import CryptoHero from '../Hero/crypto-hero.jpg'

const Hero = () => {
    return (
        <div className='hero-container'>
            <img src={CryptoHero} alt="Hero" />
            <div className='hero-text'>
                <h1>Trade, Exchange, and Buy Cryptocurrencies.</h1>
                <p>You’ll need to open an account with a crypto exchange unless you already own cryptocurrency. The best crypto brokerages on the market include Coinbase, eToro and Gemini. </p>
                <button>Get Started</button>
            </div>
        </div>
    )
}

export default Hero;