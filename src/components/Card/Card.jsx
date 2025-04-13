import React from 'react';

import '../Card/Card.scss'

import Teams from '../Teams/Teams';


class Card extends React.Component {
    constructor() {
        super();

        this.state = {
            informations: [
                {
                    image: 'https://img.freepik.com/free-photo/handsome-young-businessman-suit_273609-6513.jpg?w=826&t=st=1689381650~exp=1689382250~hmac=fc1d11e13f8c801cd2e4216257bd7def60c30071589dbbb05745dddd28f104ff',
                    name : 'Oguntolu Emmanuel',
                    positions: 'CEO of CryptoRumble',
                    id: 1
                },
                {
                    image: 'https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?w=826&t=st=1689381726~exp=1689382326~hmac=e0c520188d980101050fff08d66474d91a29ee0c9945500eeeacf2e20ba5b9ff',
                    name : 'Adams Smith',
                    positions: 'Managing Director',
                    id: 2
                },
                {
                    image: 'https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?w=740&t=st=1689380692~exp=1689381292~hmac=c7e37194aadbd5b3e28a55dd44b09bf13f9e729fd3c8777e64b2a1a13c0d1291',
                    name : 'Becky Lynch',
                    positions: 'Speaker',
                    id: 3
                },
            ]
        }
    }
    render() {
        return (
            <div className='staffs'>
                <h1>Our Amazing Teams</h1>
                <p>Our Organization it's about the people and for the people</p>
                <div className='info'>
                    {
                        this.state.informations.map(({name, positions, id, image}) => (
                            <Teams key={id} name={name} positions={positions} image={image} />
                        ))
                    }
                </div>
                

            </div>
        )
    }
}
export default Card;