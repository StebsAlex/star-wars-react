import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Board from './component/Board'

const PeopleBoard = () => <Board gameType="people" />;
const StarshipBoard = () => <Board gameType="starships" />;
class App extends Component {
  render() {
    return (
      <div className="App container">
        <h2>Welcome to the Star Wars Api Game</h2>
        <BrowserRouter>
          {/* <Route to='/people' /> */}
          <ul>
            <li>
              <Link to="/people">People Route</Link>
            </li>
            <li>
              <Link to="/starships">StarShip Route</Link>
            </li>
          </ul>
          <Route path="/people" component={PeopleBoard} />
          <Route path="/starships" component={StarshipBoard} />
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
