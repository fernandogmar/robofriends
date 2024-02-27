import React from 'react';
import Card from './Card';

const CardDeck = ({ robots }) => {
    const style = {
        root: {
            display: "grid",
            columnGap: "10px",
            rowGap: "10px",
            alignItems: "start",
            justifyContent: "center",
            gridTemplateColumns: "repeat(auto-fit, 300px)"
        }
    };

    return (
        <div style={style.root}>
            { robots.map(({ email, id, name }) => <Card email={email} id={id} name={name} key={id}/>) }
        </div>
    );
};

export default CardDeck;
