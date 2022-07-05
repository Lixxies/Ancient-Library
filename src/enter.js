import jsonData from './jsonData.json';

function Enter(props) {
    const rest = jsonData.Rest
    return (
        <div className="outer">
            <div id="enter" className="text" onClick={() => props.onClick()}>{rest.enter}</div>
        </div>
    )
    
}

export default Enter