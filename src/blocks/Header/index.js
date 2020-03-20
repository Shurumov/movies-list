import React, {Component} from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom'
import {bindActionCreators} from 'redux';
import {Input, Select} from 'antd';
import {getMoviesList} from 'store/actions/movies-list.actions';
import {setLocal} from 'store/actions/local.actions';
import {API_METHODS} from 'constants/api-methods';

import local from './local'
import './header.scss';
import {ROUTES} from "constants/routes";

const { Option } = Select;

class Header extends Component {
  static propTypes = {
    localState: PropTypes.string,
    getMoviesList: PropTypes.func,
    setLocal: PropTypes.func,
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
    const { localState, setLocal } = this.props;
    const {value} = this.state;
    const {Search} = Input;
    return (
      <header className="header container">
        <Link className="mr-2" to={ROUTES.HOME}>{local[localState].home}</Link>
        <Search
          enterButton={local[localState].searchButton}
          onSearch={this.searchFilms}
          onChange={e => this.onChange(e.target.value)}
          placeholder={local[localState].placeholder}
          value={value}
        />
        <Select
          className="ml-2"
          defaultValue="en"
          onChange={value=>setLocal(value)}
        >
          <Option value="en">en</Option>
          <Option value="ru">ru</Option>
        </Select>
      </header>
    )
  }
}

const mapStateToProps = ({localState}) => ({localState});

const mapDispatchToProps = dispatch => ({
  getMoviesList: bindActionCreators(getMoviesList, dispatch),
  setLocal: bindActionCreators(setLocal, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));