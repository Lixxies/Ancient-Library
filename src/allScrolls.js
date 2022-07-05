import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

function Scroll(props) {
    return (
        <div className="scroll" onClick={() => props.onClick()}></div>
    )
}

class AllScrolls extends React.Component {


    renderScroll() {
        return (
            <Scroll onClick={() => this.props.onClick()}/>
        )
    }

    render() {
        return (
            <CSSTransitionGroup
            transitionName="fadingDiv"
            transitionAppear={true}
            transitionAppearTimeout={5000}>
                <div id="scrollsOuter">
                    <div id="scrollsDiv">
                        <div id="firstLine" className="lineDiv">
                            {this.renderScroll()}
                            {this.renderScroll()}
                        </div>
                        <div id="secondLine" className="lineDiv">
                            {this.renderScroll()}
                            {this.renderScroll()}
                            {this.renderScroll()}
                        </div>
                        <div id="thirdLine" className="lineDiv">
                            {this.renderScroll()}
                            {this.renderScroll()}
                            {this.renderScroll()}
                            {this.renderScroll()}
                        </div>
                    </div>
                </div> 
            </CSSTransitionGroup>    
        )
    }

    
}

export default AllScrolls