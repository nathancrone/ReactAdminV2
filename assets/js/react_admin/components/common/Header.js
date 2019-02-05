import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoadingStatus from './LoadingStatus';

const Header = ({ loading }) => {
    return (
        <nav>
            <Link to="/">Home</Link>
            {" | "}
            <Link to="/courses">Courses</Link>
            {" | "}
            <Link to="/about">About</Link>
            {loading && <LoadingStatus interval={100} dots={20} />}
        </nav>
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;