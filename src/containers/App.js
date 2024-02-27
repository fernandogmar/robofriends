import React, { useEffect, useMemo, useState } from 'react';
import CardDeck from '../components/CardDeck';
import ErrorBoundry from '../components/ErrorBoundry';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';

const App = () => {
    const [ robots, setRobots ] = useState([]);
    const [ searchfield, setSearchfield] = useState('');

    useEffect(
        () => {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then(setRobots)
        },
        []
    );

    const filteredRobots = useMemo(
        () => robots.filter(
            (robot) => robot.name.toLowerCase().includes(searchfield.toLowerCase())
        ),
        [robots, searchfield]
    );

    const handleSearchChange = (event) => {
        setSearchfield(event.target.value);
    }

    if(robots.length) {
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox onSearchChange={handleSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardDeck robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }

    return (
        <div className="tc">
            <h1 className="f1">Loading...</h1>
        </div>
    );
};

export default App;
