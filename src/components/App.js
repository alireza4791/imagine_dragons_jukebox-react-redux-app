import React, { Component } from 'react';

import MusicList from './MusicList';
import MusicDetail from './MusicDetail';
import MusicVideo from './MusicVideo';

class App extends Component {
    render() {
        return (
            <div className="ui container grid">
                <div className="ui row">
                    <div className="column eight wide">
                        <MusicList />
                    </div>
                    <div className="column eight wide">
                        <MusicDetail />
                    </div>
                </div>
                <div className="ui row">
                    <div className="column sixteen wide">
                        <MusicVideo />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
