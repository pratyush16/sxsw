import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

class sxswhack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerState: new MediaPlayerState({autoPlay: true, muted: true}), // init with muted, autoPlay
    };
  }
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')} />
        <View
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          <Video
            style={{height: 2.25, width: 4}}
            source={[
              asset('video.mp4', {format: 'mp4'}),
              asset('video.webm', {format: 'webm'}),
            ]}
            playerState={this.state.playerState}
          />
          <VideoControl style={{height: 0.2, width: 4}} playerState={this.state.playerState} />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('sxswhack', () => sxswhack);
