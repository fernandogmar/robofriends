import React, { Component } from 'react';
import CardDeck from '../components/CardDeck';
import ErrorBoundry from '../components/ErrorBoundry';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends Component {
    /*constructor() {
        super();

        this.state = {
            robots: [],
            searchfield: ''
        };
    }*/

    state = {
        robots: [],
        searchfield: ''
    }

    componentDidMount() {
        /*this.setState({
            robots: await fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
        });*/
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then(robots => this.setState({ robots }))
    }

    handleSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(
            (robot) => robot.name.toLowerCase().includes(searchfield.toLowerCase())
        );

        if(robots.length) {
            return (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox onSearchChange={this.handleSearchChange} />
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

    }
};

export default App;
