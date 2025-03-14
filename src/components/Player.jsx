import { useState } from "react";
const Player = ({ initialName, symbol, isActive, onNameChange }) => {

    // cambio nome player
    const [playerName, setPlayerName] = useState(initialName);
    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    //edit state
    const [isEditing, setIsEditing] = useState(false);
    function handleEditClick() {
        setIsEditing(editing => !editing)
        if (isEditing) {
            onNameChange(symbol, playerName)
        }
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    if (isEditing) {
        editablePlayerName = (
            <input type="text" onChange={handleChange} value={playerName} />
        );
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
        </li>
    );
}

export default Player;