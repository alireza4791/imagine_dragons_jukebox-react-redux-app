import React, { Component } from 'react';
import {connect} from 'react-redux';

class MusicVideo extends Component {
    render() {
        const {Song} = this.props;

        if(!Song){
            return <div>video will start playing after you choose a Music Video</div>
        }
        else{
            return(
                <iframe width="700" height="375" src={Song.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            )
        }
        
    }
}

const mapStateToProps = (state) => {
    return {Song: state.SelectedSong}
}

export default connect (mapStateToProps) (MusicVideo);
