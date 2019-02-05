import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import Header from './common/Header';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import CoursesPage from './course/CoursesPage';
import CourseManagePage from './course/CourseManagePage';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header loading={this.props.loading} />
                <div>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/courses" component={CoursesPage} />
                        <Route exact path="/course" component={CourseManagePage} />
                        <Route path="/course/:id" component={CourseManagePage} />
                        <Route path="/about" component={AboutPage} />
                    </Switch>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        loading: state.ajaxCallsInProgress > 0
    };
}

export default withRouter(connect(mapStateToProps)(App));
