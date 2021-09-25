import React from 'react';
import beers from './assets/beers.png';
import newbeer from './assets/new-beer.png';
import randombeer from './assets/random-beer.png';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <div>
        <img src={beers} alt="beers" />
        <h1>
          <NavLink to="/list">All Beers</NavLink>
        </h1>
        <p>
          Text
        </p>
      </div>
      <div>
        <img src={randombeer} alt="random-beer" />
        <h1>
          <NavLink to="/random-beer">Random Beer</NavLink>
        </h1>
        <p>
          Text
        </p>
      </div>
      <div>
        <img src={newbeer} alt="new-beer" />
        <h1>
          <NavLink to="/beers/create">New Beer</NavLink>
        </h1>
        <p>
          Text
        </p>
      </div>
    </div>
  );
};

export default HomePage;