import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';

import ImageList from './imageList';
import {addImage, addImages} from '../actions/board';

class Board extends Component {

    onDrop = (files) => {
      this.props.addImages(files);
    }

    render() {
        return (
            <div>
                <Dropzone onDrop={this.onDrop} disableClick accept="image/*" />
                <ImageList images={this.props.images}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    images: state.board.images,
});

const mapDispatchToProps = dispatch => ({
    addImage: image => dispatch(addImage(image)),
    addImages: images => dispatch(addImages(images))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Board);
