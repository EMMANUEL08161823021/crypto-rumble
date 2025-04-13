import React from 'react';
import './About.scss';

import Picture from '../About/about-rumble-removebg-preview (1).png'

const About = () => {
    return ( 
        <div className='about'>
            <h1>ABOUT US</h1>
            <div className='details'>
                <div className='crypto-texts'>
                    <div className='text'>
                        <h2>Crypto Rumble</h2>
                        <p>Crypto Rumble refers to a business or entity that operates within the crytocurrency industry. It can include various types of entities, such as cryptocurrency exchanges, blockchain development companies, crypto wallets, decentralized finance(DeFi) platforms,
                            token issuers, crypto investment funds, and more. This organization is involved in activities related to cryptocurrencies, blockchain technoloy, and the boarder crypto ecosystem.
                            We provide services, products, or solutions that facilitate the use, exchange, investment, or development of cryptocurrencies and blockchain-based applications. 
                        </p>
                    </div>
                    <div className='text'>
                        <h2>Our Visions & Missions</h2>
                        <p>As Crypto business owners, our vision is to revolutionize finance through blackchain technology, creating a decentralized and inclusive ecosystem. Our mission is to drive
                            blockchain adoption, develop innovative crypto solutions, prioritize security and truth, foster financial inclusion, support
                            regulatory compliance, and engage with our community. We strive to empower individuals and businesses worldwide with greater financial freedom
                            and accessibility.
                        </p>
                    </div>
                </div>
                <div className='detailsImg'>
                    <img src={Picture} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About;