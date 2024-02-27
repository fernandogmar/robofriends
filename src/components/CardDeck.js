import React from 'react';
import Card from './Card';

const CardDeck = ({ robots }) => {
    return (
        <div>
            { robots.map(({ email, id, name }) => <Card email={email} id={id} name={name} key={id}/>) }
        </div>
    );
};

export default CardDeck;
