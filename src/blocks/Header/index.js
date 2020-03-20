import React, {Component} from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Input} from 'antd';
import {getMoviesList} from 'store/actions/movies-list.actions';
import {API_METHODS} from 'constants/api-methods';

import './header.scss';



class Header extends Component {
  static propTypes = {
    getMoviesList: PropTypes.func,
  };

  searchFilms = value => {
    const {getMoviesList} = this.props;
    getMoviesList(API_METHODS.MOVIES_LIST(value))
  };

  render() {
    const {Search} = Input;

    return (
      <header className="header container">
        <Search
          enterButton="Search"
          onSearch={this.searchFilms}
          placeholder="Enter movie title"
        />
      </header>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getMoviesList: bindActionCreators(getMoviesList, dispatch),
});

export default connect(null, mapDispatchToProps)(Header);