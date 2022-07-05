import React from 'react';
import jsonData from './jsonData.json';

import Riddle from './riddle';
import Final from './final'
import AllScrolls from './allScrolls'
import { CSSTransitionGroup } from 'react-transition-group'

const rest = jsonData.Rest

class Answer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            power: false,
            learning: false,
            showRiddle: false
        }
    }

    handleClickP() {
        this.setState({
            power: true
        })
    }

    handleClickL() {
        this.setState({
            learning: true
        })
    }

    handleClickR() {
        this.setState({
            showRiddle: true,
            learning: false
        })
    }

    render() {
        if (this.state.power) {
            return (
                <Final string={rest.closedDoors}/>
            )
        } else if (this.state.learning) {
            return (
                    <AllScrolls onClick={() => this.handleClickR()}/>
            )
        } else if (this.state.showRiddle) {
            return (
                <Riddle />
            ) 
        }

        return (
            <CSSTransitionGroup
            transitionName="fadingDiv"
            transitionAppear={true}
            transitionAppearTimeout={5000}>
                <div className="replyDiv">  
                    <div id="reply">
                        <div className="text">
                            <div className="power" onClick={() => this.handleClickP()}>{rest.replyPower}</div>
                        </div>
                        <div className="text">
                            <div className="learning" onClick={() => this.handleClickL()}>{rest.replyLearning}</div>
                        </div>
                    </div>     
                </div> 
           </CSSTransitionGroup>
        )
    }
    
} 

export default Answer