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
        let baseURL="https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en"
        axios.get(baseURL).then(response => { 
            this.setState({ 
                quote: response.data.quoteText
            }) 
        })
    }

    render() {
        return (
            <div>
                <button className="quoteButton" onClick={() => this.randomQuote() }>Get Quote of the Day Here!</button>
                <p className="quote"><img src={quotation} alt="" />{ this.state.quote }<img src={quotation} alt="" /></p>
            </div>
        )
    }
}

export default RandomQuotes;