import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import FetchIntervalContainer from './Modules/FetchInterval/Container/FetchIntervalContainer';
import FetchUserContainer from './Modules/FetchUser/Container/FetchUserContainer';
import PostContainer from './Modules/Post/Container/PostContainer';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <Router>
        <ToastContainer />
        <Switch>
          <Route exact path="/" component={FetchUserContainer} />
          <Route exact path="/autofetch" component={FetchIntervalContainer} />
          <Route exact path="/post" component={PostContainer} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
