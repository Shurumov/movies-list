import React, {Component} from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom'
import {bindActionCreators} from 'redux';
import {Input} from 'antd';
import {getMoviesList} from 'store/actions/movies-list.actions';
import {API_METHODS} from 'constants/api-methods';

import './header.scss';
import {ROUTES} from "constants/routes";

class Header extends Component {
  static propTypes = {
    getMoviesList: PropTypes.func,
  };

  state = {
    value: ''
  };

  onChange = value => {
    this.setState({
      value: value
    })
  };

  searchFilms = async (value) => {
    const {getMoviesList, history} = this.props;
    await getMoviesList(API_METHODS.MOVIES_LIST(value));
    this.onChange('');
    history.push(ROUTES.HOME);
  };

  render() {
    const {value} = this.state;
    const {Search} = Input;
    return (
      <header className="header container">
        <Link className="mr-2" to={ROUTES.HOME}>Home</Link>
        <Search
          enterButton="Search"
          onSearch={this.searchFilms}
          onChange={e => this.onChange(e.target.value)}
          placeholder="Enter movie title"
          value={value}
        />
      </header>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getMoviesList: bindActionCreators(getMoviesList, dispatch),
});

export default withRouter(connect(null, mapDispatchToProps)(Header));