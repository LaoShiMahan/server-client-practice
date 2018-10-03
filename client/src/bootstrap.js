import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import reducers from './reducers';

import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

// import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

import SignIn from './components/signIn';
import SignUp from './components/signUp';
import Dashboard from './components/dashboard';


function main() {
    ReactDOM.render(
        <Provider store={createStoreWithMiddleware(reducers)}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/signin" component={ SignIn } />
                    <Route exact path="/signup" component={ SignUp } />
                    <Route exact path="/dashboard" component={ Dashboard } />
                </Switch>
            </BrowserRouter>
        </Provider>
        , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
