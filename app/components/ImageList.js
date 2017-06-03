import React, { Component, PropTypes } from 'react';
import ImageListItem from './ImageListItem';

class ImageList extends Component {
    static propTypes = {
        images: PropTypes.arrayOf(PropTypes.any).isRequired
    }

    render() {
        return (
            <ul>
                {this.props.images.map(() => <ImageListItem />)}
            </ul>
        );
    }
}

export default ImageList;
