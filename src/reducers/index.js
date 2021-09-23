import {combineReducers} from 'redux';

import SongListReducer from './SongListReducer';
import SelectedSongListReducer from './SelectedSongListReducer';



export default combineReducers({
    SongList: SongListReducer,
    SelectedSong: SelectedSongListReducer
});