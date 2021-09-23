import React, { Component } from 'react';
import {connect} from 'react-redux';

import {SelectSong} from '../actions';
import './MusicList.css';

class MusicList extends Component {
    renderList(){
        return this.props.SongList.map(song => {
            return(
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                        className="ui button primary"
                        onClick={() => this.props.SelectSong(song)}
                        >
                            Select
                        </button>
                        
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        })
    }
    render() {
        return (
            <div id="MusicList" className="ui divided list">
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {SongList: state.SongList}
}

export default connect(mapStateToProps, {SelectSong})(MusicList);
