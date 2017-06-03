import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ImageListItem from './ImageListItem';

class ImageList extends Component {
    static propTypes = {
        images: PropTypes.arrayOf(PropTypes.any).isRequired
    }

    render() {
        return (
            <ul>
                {this.props.images.map((image) => <ImageListItem image={image}/>)}
            </ul>
        );
    }
}

export default ImageList;
