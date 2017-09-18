import React, { Component } from 'react';
import axios from 'axios';

import quotation from '../quotes.png';

class RandomQuotes extends Component {
    constructor() {
        super();

        this.state={
            quote: ''
        }

        this.randomQuote = this.randomQuote.bind(this);
    }

    randomQuote() {
        let baseURL="http://localhost:4000/api/getquotes" 
        axios.get(baseURL).then(response => { 
            this.setState({ 
                quote: response.data
            }) 
        })
    }

    render() {
        return (
            <div>
                <button className="quoteButton" onClick={() => this.randomQuote() }>Get the Quote of the Day Here!</button>
                <p className="quote"><img src={quotation} alt="" />{ this.state.quote }<img src={quotation} alt="" /></p>
            </div>
        )
    }
}

export default RandomQuotes;