import React, { Component } from 'react';
import Calculate from './Calculate';



class Compatibility extends Component {
    constructor() {
        super();

        this.state={
            calculate: null
        }
    }

    render(){
        
        return (
            <div>
                <button className="calculateButton" onClick={()=> { console.log(this.props.nameTwo)
                    this.props.nameOne && this.props.nameTwo ? 
                      this.setState({ calculate: Calculate() }) : this.setState({ calculate: null });
                    }}>CALCULATE!</button>

                <div className="displayCompat"> 
                    <h3>Your Compatibility Score is...</h3>
                    <div className="compatScore">{this.state.calculate}%</div>
                    
                </div>

            </div>
        )
    }
}

export default Compatibility;