// Code DigitalClicker Component Here

import React from "react"



class DigitalClicker extends React.Component {
    state = {
        timesClicked: 0
    }

    timesClickedHandler = () => {
        
        let clicks = this.state.timesClicked + 1
        this.setState({
            timesClicked: clicks
        })
    }

    render () {
        return (
            <button onClick={this.timesClickedHandler}>{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker