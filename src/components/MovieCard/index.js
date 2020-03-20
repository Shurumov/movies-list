import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {Card} from 'antd';

const {Meta} = Card;

export class MovieCard extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    year: PropTypes.string,
    Poster: PropTypes.string,
    onClick: PropTypes.func,
  };

  render() {
    const {title, year, onClick, poster, style} = this.props;

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
        style={style}
      >
        <Meta
          title={title}
          description={year}
        />
      </Card>
    )
  }
}