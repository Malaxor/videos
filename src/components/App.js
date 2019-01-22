import React, { Component } from 'react';
import youtube from '../api/youtube';
// COMPONENTS
import SearchBar from './SearchBar';
import VideoList from './VideoList';

class App extends Component {

    state = {
        videos: [],
        selectedVideo: null
    }
    onTermSubmit = async term => {
      const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({ videos: response.data.items });
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar
                    onFormSubmit={this.onTermSubmit}
                />
                <VideoList 
                    videos={this.state.videos}
                />
            </div>
        );
    }
}
export default App;