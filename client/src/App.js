import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Signup, Signin, AddMovie } from './components/pages';
import { Header } from './components/organisms';
import { GlobalStyles } from './components/atoms';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/movie/add" component={AddMovie} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
