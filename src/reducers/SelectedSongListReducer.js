export const SelectedSongListReducer = (state = null, action) => {
    switch (action.type) {
        case 'SONG_SELECTED':
            return action.payload
        default:
            return state;
    }
}

export default SelectedSongListReducer;