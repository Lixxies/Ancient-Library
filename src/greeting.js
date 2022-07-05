import { useState } from 'react';
import Answer from './answer';
import jsonData from './jsonData.json';
import { CSSTransitionGroup } from 'react-transition-group'

function Greeting(props) {
    const greeting = jsonData.Greeting
    const [fade, setFade] = useState(false)

    if (props.next) {
        return (
            <Answer />
        )
    }
    return (
            
            <div id="greeting">
                <CSSTransitionGroup
                transitionName="fadingDiv"
                transitionAppear={true}
                transitionAppearTimeout={5000}>
                    <div key={1} className="phrases greetPhr">{greeting[props.index]}</div>
                </CSSTransitionGroup>
                <div className="skip">
                     <button type="button" onClick={() => props.onClick()}>Next</button>
                </div> 
             </div>
        
    )   
}

export default Greeting