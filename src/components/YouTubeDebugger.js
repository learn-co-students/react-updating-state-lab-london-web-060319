// Code YouTubeDebugger Component Here

import React from "react"

class YouTubeDebugger extends React.Component {
    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }
      bitrateHandler = () => {
          console.log("bitrate")
          this.setState({
            settings: {
            ...this.state.settings,
            bitrate: 12
            }
          })
          
      }
      resolutionHandler = () => {
        console.log("resolution")
        this.setState({
            settings: {
            ...this.state.settings,
            video: {
                resolution: "720p"
            }
            }
          })
    }
    render () {
        return (
            <div>
            <button className="bitrate" onClick={this.bitrateHandler}>Bitrate: {this.state.settings.bitrate}</button>
            <button className="resolution" onClick={this.resolutionHandler}>Resolution: {this.state.settings.video.resolution}</button>
            </div>
        )
    }
}

export default YouTubeDebugger