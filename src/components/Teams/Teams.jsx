import React from 'react';

import '../Teams/Teams.scss';

const Teams = ({name, positions, image}) => (
    <div className='teams'>
        <img src={image} alt="picture" />
        <h1>{name}</h1>
        <p>{positions}</p>
    </div>
)

export default Teams;