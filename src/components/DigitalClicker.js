import React from 'react'

//In the components/DigitalClicker.js file, create a DigitalClicker React component.

export default class DigitalClicker extends React.Component{


//This component has an initial state property called timesClicked, which is initially defined as 0.

  constructor() {
    super();
    this.state = {
      timesClicked: 0
};
}

handleClick = () => {
  this.setState(prevState => ({
    timesClicked: prevState.timesClicked + 1
  }))
}

//The component renders out a button with a label that shows the timesClicked value. This means that, at the start, your button should just say 0.

render(){
  return(
    <button onClick={this.handleClick}>{this.state.timesClicked}</button>
  );
}

}
