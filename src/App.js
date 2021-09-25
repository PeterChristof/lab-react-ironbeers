import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import BeersList from './BeersList';
import NewBeer from './NewBeer';
import BeerDetails from './BeerDetails';
import RandomBeer from './RandomBeer';
import HomePage from './Home';
import Header from './Header';

function App() {
  return (
    <>
     <Header/>
    <Route exact path="/" component={HomePage}/>
    
    <Switch>  
      <Route exact path="/list" component={BeersList}/>
      <Route exact path="/beers/create" component={NewBeer}/>
      <Route exact path="/beers/:id" component={BeerDetails}/>
      <Route exact path="/random-beer" component={RandomBeer}/>
    </Switch>
    </>
  );
}

export default App;


// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { Switch, Route } from "react-router-dom";
// import HomePage from "./Home";
// import Header from './Header';
// import BeersList from './BeersList';

// function App() {
//   return (
//     <div className="App">
     
//      {/* <Header /> */}
//       <Switch>
//       <Route exact path="/" component={HomePage} />
//       {/* <Route exact path="/beers" component={Beers} /> */}
//       <HomePage/>
      
//      </Switch>

//     </div>
//   );
// }

// export default App;
