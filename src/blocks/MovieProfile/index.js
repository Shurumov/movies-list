import React, {Component, Fragment} from "react";
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {Row, Col, Empty, Descriptions} from 'antd';

import {clearState, getMovieData} from "store/actions/movie.actions";
import {API_METHODS} from "constants/api-methods";
import styles from "constants/styles";

const {Item: Characteristic} = Descriptions;

class MovieProfile extends Component {
  static propTypes = {
    movieState: PropTypes.object,
    getMovieData: PropTypes.func,
    clearState: PropTypes.func,
  };

  componentDidMount() {
    const {getMovieData, match: {params: {id}}} = this.props;
    getMovieData(API_METHODS.MOVIE_ID(id))
  }

  componentWillUnmount() {
    const { clearState } = this.props;
    clearState();
  }

  render() {
    const {movieState = {}} = this.props;
    const {gutter} = styles;

    const {
      Title,
    } = movieState;
    return (
      <Row gutter={gutter}>
        <Col
          md={24}
          lg={8}
          xl={6}
        >
          <img
            src={movieState.Poster}
            alt={movieState.Title}
            style={{
              width: '100%',
              maxWidth: '300px',
              marginBottom: gutter,
            }}
          />
        </Col>
        <Col
          md={24}
          lg={16}
          xl={18}
        >
        {Object.keys(movieState).length > 0 ? (
          <Descriptions title={Title}>
            {Object.keys(movieState).map(item => {
              if (['Ratings', 'Plot', 'Poster', 'Response'].includes(item)) {
                return null;
              }
              return <Characteristic label={item} key={item}>{movieState[item]}</Characteristic>
            })}
          </Descriptions>
        ) : null}
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = ({
                           movieState
                         }) => ({movieState});
const mapDispatchToProps = dispatch => ({
  getMovieData: bindActionCreators(getMovieData, dispatch),
  clearState: bindActionCreators(clearState, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(MovieProfile)