import React, { Component } from 'react';


class SecondName extends Component {

    render() {
        return (
            <div>
                <h4 class="inputName">Name Two:</h4>
                <input  onChange={(e) => { this.props.updateNameTwo(e.target.value)} } />
            </div>
        )
    }
}

export default SecondName;