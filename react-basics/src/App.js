import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonExample from "./Components/ButtonExample/ButtonExample";
import GitHubCards from "./Components/GitHubCards/GitHubCards";
import PlayNine from "./Components/PlayNine/PlayNine";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <ButtonExample/>
                <GitHubCards/>
                <PlayNine/>
            </div>
        );
    }
}

export default App;
