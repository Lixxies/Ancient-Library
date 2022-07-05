import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Greeting from './greeting';
import Enter from './enter';

import jsonData from './jsonData.json';

const greeting = jsonData.Greeting

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            fade: false,
            showGreeting: false,
            showAnswer: false
        }
    }

    handleClickEnter() {
        this.setState({
            showGreeting: true
        })
    }

    handleClickGreeting() {
        if (this.state.count < greeting.length - 1) {
            this.setState({
                count: this.state.count + 1
            })
        } else if (this.state.count === greeting.length - 1) {
            this.setState({
                fadeOut: true,
                showAnswer: true
            })
        } else {
            return
        }
    }
   
    render() { 
        if (this.state.showGreeting) {
            return (
                <Greeting 
                    index={this.state.count}
                    next={this.state.showAnswer}
                    onClick={() => this.handleClickGreeting()}
                />
            )
        }
        return (
            <Enter onClick={() => this.handleClickEnter()}/>
        )
    }
}


// ----------------------------------------------------------------
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />)