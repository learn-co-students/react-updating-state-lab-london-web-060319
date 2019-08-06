// Code YouTubeDebugger Component Here
import React, { Component } from "react";

class YouTubeDebugger extends Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p"
        }
      }
    };
  }

  editBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
    console.log(this.state);
  };

  editResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: "720p"
        }
      }
    });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.editBitrate}>
          Bitrate
        </button>
        <button className="resolution" onClick={this.editResolution}>
          Resolution
        </button>
      </div>
    );
  }
}
export default YouTubeDebugger;
