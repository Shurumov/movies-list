import React, {Component, Fragment} from "react";
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Row, Col, Empty} from 'antd';

import {clearState} from 'store/actions/movies-list.actions'
import {MovieCard} from 'components';

import styles from 'constants/styles'

class MoviesList extends Component {
  static propTypes = {
    moviesList: PropTypes.array,
  };

  render() {
    const {moviesList} = this.props;
    const {gutter} = styles;

    return (
      <Fragment>
        {moviesList.length > 0 ? (
          <Row gutter={gutter} content="top">
            {moviesList.map(item => (
              <Col
                sm={24}
                md={12}
                lg={8}
                xl={6}
                key={item.imdbID}
                style={{
                  display: 'flex'
                }}
              >
                <MovieCard
                  title={item.Title}
                  year={item.Year}
                  poster={item.Poster}
                />
              </Col>
            ))}

          </Row>
        ) : <Empty/>
        }
      </Fragment>
    )
  }
}

const mapStateToProps = ({
                           moviesListState: {moviesList},
                         }) => ({moviesList});

const mapDispatchToProps = dispatch => ({
  clearState: bindActionCreators(clearState, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList)