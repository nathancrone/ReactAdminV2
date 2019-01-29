import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </nav>
                <div>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/about" component={AboutPage} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;