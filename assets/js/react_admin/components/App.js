import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import Header from './common/Header';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import CoursesPage from './course/CoursesPage';
import CourseManagePage from './course/CourseManagePage';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <div>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/courses" component={CoursesPage} />
                        <Route path="/course" component={CourseManagePage} />
                        <Route path="/course/:id" component={CourseManagePage} />
                        <Route path="/about" component={AboutPage} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;