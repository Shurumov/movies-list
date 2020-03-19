import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import './loader.scss'

export class Loader extends PureComponent {
  static propTypes = {
    isShow: PropTypes.bool,
  };

  render() {
    const {children, isShow} = this.props;
    return (
      <div className="loader">
        {isShow && (
          <div className="loader__overlay">
            <div className="loader__spinner"/>
          </div>
        )}
        {children}
      </div>
    )
  }
}