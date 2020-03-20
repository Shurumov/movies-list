import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {Card} from 'antd';
import styles from 'constants/styles'

const {Meta} = Card;

export class MovieCard extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    year: PropTypes.string,
    Poster: PropTypes.string,
    onClick: PropTypes.func,
  };

  render() {
    const {title, year, onClick, poster} = this.props;
    const {gutter} = styles;

    return (
      <Card
        onClick={onClick}
        className="cursor-pointer"
        hoverable
        cover={poster ? (
          <img
            alt={title}
            src={poster}
          />
        ) : null
        }
        style={{
          marginBottom: gutter,
          width: '100%'
        }}
      >
        <Meta
          title={title}
          description={year}
        />
      </Card>
    )
  }
}