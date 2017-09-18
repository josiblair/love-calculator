import React, { Component } from 'react';

class FirstName extends Component { 


    render() {
        return (
            <div>
                <h4>Name One:</h4>
                <input onChange={(e) => { this.props.updateNameOne(e.target.value) }} />
            </div>
        )
    }

}

export default FirstName;