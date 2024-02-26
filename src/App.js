import React, { Component } from 'react';
import CardDeck from './CardDeck';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';

class App extends Component {
    /*constructor() {
        super();

        this.state = {
            robots,
            searchfield: ''
        };
    }*/

    state = {
        robots,
        searchfield: ''
    }

    handleSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter(
            (robot) => robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        );
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox onSearchChange={this.handleSearchChange} />
                <CardDeck robots={filteredRobots} />
            </div>
        );
    }
};

export default App;
