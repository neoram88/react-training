import React from 'react';

export default class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { seconds: 0,
        timerPaused: false };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
        if(!this.state.timerPaused){
            this.tick()
        }
    }, 1000);
  }

  componentDidUpdate(){
    console.log("componentDidUpdate>>")
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  
  static getDerivedStateFromProps(props, state){
    console.log("getDerivedStateFromProps>>");
  }


  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  startTimer() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  resetTimer() {
    this.setState(prevState => ({
        seconds: 0
     }));
     clearInterval(this.interval);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  render() {
    console.log("render>>")
    return (
      <div>
        Seconds: {this.state.seconds}
        <button onClick={()=>{this.startTimer()}}>Start Timer</button>
        <button onClick={()=>{this.pauseTimer()}}>Pause Timer</button>
        <button onClick={()=>{this.resetTimer()}}>Reset Timer</button>
      </div>
    );
  }
}
