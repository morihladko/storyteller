import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageListItem extends Component {
    static propTypes = {
        image: PropTypes.any.isRequired
    }

    render() {
      return (
          <li>here be image
            <img src={this.props.image.preview} style={{width: '50px'}}/>
          </li>
      );
    }
}

export default ImageListItem;
