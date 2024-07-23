import { useState } from "react";

export default function Player({ initialName, symbol, isActive}) {
    
    const [ playerName, setPlayerName ] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);
    
    let tag = <span className="player-name">{ playerName }</span>; 
    
    function handleEditClick() {
        // if(isEditing) {
        //     setIsEditing(false);
        // }
        // setIsEditing(!isEditing); // This is not the best practice as in react the state update is scheduled.
        // setIsEditing(!isEditing); // ambiguos behaviour
        setIsEditing((editing) => !editing); //best practice is pass the function.
        // setIsEditing((editing) => !editing);
    }

    function handleInputChange(event) {
        console.log(event);
        setPlayerName(event.target.value);
    }
    
    if(isEditing) {
        tag = <input type="text" required  value={ playerName } onChange={handleInputChange}></input>;
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {tag}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{ isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}