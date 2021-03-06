import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: '#fff'
};

let fakeServerData = {
  user: {
    name: 'Lucas',
    playlists: [
      {
        name: 'My favorites',
        songs: [
          { name: 'Beat It', duration: 195000 },
          { name: "God's Plan", duration: 202000 },
          { name: 'Revenge', duration: 205000 }
        ]
      },
      {
        name: 'My ego',
        songs: [
          { name: 'Africa', duration: 295000 },
          { name: 'Africa', duration: 295000 },
          { name: 'Africa', duration: 295000 }
        ]
      },
      {
        name: 'My sad',
        songs: [
          { name: 'Love is all', duration: 165000 },
          { name: 'SAD!', duration: 257000 },
          { name: 'Goodbye My Friend', duration: 239000 }
        ]
      },
      {
        name: 'My party',
        songs: [
          { name: 'Party in the USA!', duration: 195000 },
          { name: 'Toxic', duration: 125000 },
          { name: 'Brick House', duration: 223000 }
        ]
      },
    ]
  }
}

class PlaylistCounter extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, width: "40%", display: 'inline-block' }}>
        <h2>{this.props.playlists.length} playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)
    return (
      <div style={{ ...defaultStyle, width: "40%", display: 'inline-block' }}>
        <h2>{Math.round((totalDuration / 1000) / 60 / 60)} hours</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img />
        <input type="text" />
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, display: 'inline-block', width: "25%" }}>
        <img />
        <h3>Playlist Name</h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = { serverData: {} }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ serverData: fakeServerData });
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
          <div>
            <h1 style={{ ...defaultStyle, 'font-size': '54px' }}>
              {this.state.serverData.user.name}'s Playlist
            </h1>
            <PlaylistCounter playlists={this.state.serverData.user.playlists} />
            <HoursCounter playlists={this.state.serverData.user.playlists} />
            <Filter />
            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
          </div> : <h1 style={defaultStyle}>LOADING...</h1>
        }
      </div>
    );
  }
}

export default App;
