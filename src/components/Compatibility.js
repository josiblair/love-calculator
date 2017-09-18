import React, { Component } from 'react';
import Calculate from './Calculate';



class Compatibility extends Component {
    constructor() {
        super();

        this.state={
            calculate: Calculate(),
            message: '',
            showNumber : false
        }
        this.sendMessage = this.sendMessage.bind(this);
    }

    sendMessage() {
        if(this.state.calculate <= 25) {
               this.setState({
                   message: "Don't bother with this one. Close your eyes, pick a stranger, and ask them out. Chances are you'll have better luck with them."
               })
        } else if(this.state.calculate > 25 && this.state.calculate <= 49) {
            this.setState({
                message: "We predict a breakup in 10, 9, 8... You get the picture. This just ain't gonna work."
            })
        } else if(this.state.calculate > 49 && this.state.calculate <= 75) {
            this.setState({
                message: "There's a slim chance this might work. It's gonna be tough, but whatever, YOLO."
            })
        } else if(this.state.calculate > 75 && this.state.calculate <= 90) {
            this.setState({
                message: "Our sophisticated algorithms say that it won't work out, but why not give it a shot? We're sure you can beat probability"
            })
        } else if(this.state.calculate > 90 && this.state.calculate <= 100) {
            this.setState({
                message: "Wow. This is rare. This is a match made in heaven. Go make out, NOW."
            })
        }
        this.setState({showNumber: true})
    }

    render(){
        
        return (
            <div>
                <button className="calculateButton" onClick={()=> {
                    this.props.nameOne && this.props.nameTwo ? 
                      this.sendMessage() : null;
                    }}>CALCULATE!</button>

                <div className="displayCompat"> 
                    <h3>Your Compatibility Score is...</h3>
                    <div className="compatScore">{this.state.showNumber ? this.state.calculate : ''}%</div>
                    <div className="displayMessage">{ this.state.message }</div>
                    
                </div>

            </div>
        )
    }
}

export default Compatibility;