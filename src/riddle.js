import React from 'react';
import jsonData from './jsonData.json';
import Final from './final'
import { CSSTransitionGroup } from 'react-transition-group'

const riddles = jsonData.Riddles

const rest = jsonData.Rest

let index

class Riddle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            win: false,
            loss: false,
            giveUp: false,
            badLuck: false
        }
    }

    renderRiddle() {
        let arr = riddles.slice()
        let num = Math.floor(Math.random() * 11)
        if (num <= arr.length - 1) {
            index = num
            return arr[num].riddle
        } else {
            this.setState({
                badLuck: true
            })
        }
    }

    handleClickBreak() {
        let input = document.getElementById("answer").value
        let correct = riddles[index].answer
        if (input.toLowerCase() == correct) {
            this.setState({
                win: true
            })
        } else if (input == "") {
            return
        } else {
            this.setState({
                loss: true
            })
        }
        
    }

    handleClickGiveUp() {
        this.setState({
            giveUp: true
        })
    }

    render() {
        if (this.state.badLuck) {
            return (
                <Final string={rest.wrongScroll}/>
            )
        } else if (this.state.win) {
            return (
                <Final string={rest.win}/>
            )
        } else if (this.state.loss) {
            return (
                <Final string={rest.loss}/>
            )
        } else if (this.state.giveUp) {
            return (
                <Final string={rest.giveUp}/>
            )
        }

        return (
            <CSSTransitionGroup
            transitionName="fadingDiv"
            transitionAppear={true}
            transitionAppearTimeout={5000}>
                <div className="inputOuter">
                    <div className="phrases seal">{this.renderRiddle()}</div>
                        <div className="input">
                            <input type="text" id="answer" name="answer" />
                            <div id="btnDiv">
                                <button className="break" type="button" onClick={() => this.handleClickBreak()}>Break the seal!</button>
                                <button className="giveUp" type="button" onClick={() => this.handleClickGiveUp()}>Give up</button>
                            </div>
                        </div>
                </div>
            </CSSTransitionGroup>
        )
    }
}

export default Riddle