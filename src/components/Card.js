import React from 'react';

const Card = ({ email, id, name }) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
            <img style={{ aspectRatio:  '1 / 1', minWidth: 200}} alt="robots" src={`https://robohash.org/${id}?set=set3&size=200x200`}/>
            <div>
                <h2>{ name }</h2>
                <p>{ email }</p>
            </div>
        </div>
    );
}

export default Card;
