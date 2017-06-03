import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class Board extends Component {
    onDrop(files) {
        this.images = files;
    }

    render() {
        return (
            <div>
                <Dropzone onDrop={this.onDrop} disableClick accept="image/*" />
            </div>
        );
    }
}

export default Board;
