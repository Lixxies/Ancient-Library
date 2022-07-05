import { CSSTransitionGroup } from 'react-transition-group'

function Final(props) {
    return (
        <CSSTransitionGroup
            transitionName="fadingDiv"
            transitionAppear={true}
            transitionAppearTimeout={5000}>
                <div id="finalOuter">
                     <div id="final">
                        <div className="phrases">{props.string}</div>
                    </div>
                </div>  
        </CSSTransitionGroup>
    )
    
}

export default Final