import React, { Component } from 'react';
import {connect} from 'react-redux';

class MusicDetail extends Component {
    
    render() {
        const {Song} = this.props;
        if(!Song){
        return <div>Select a Music Video</div>
        }
        return (
            <div>
                <h3>Details:</h3>
                <p>Title: {Song.title}
                <br />
                Duration: {Song.duration}
                <br />
                Album: {Song.album}
                <br />
                ReleaseDate: {Song.releaseDate}
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {Song: state.SelectedSong}
}
export default connect (mapStateToProps) (MusicDetail);
