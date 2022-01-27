import React from 'react'
import './PlayerListItem.css';

const PlayerListItem = ({stats, setPlayerSize, playerSize, partyData, name}) => {
  return(
    <div className="player-list-item-container">

      <div className="player-movement-portrait-container">
        {(partyData[name] !== "" && partyData[name].text.portrait !== "") ? <img alt="" src={partyData[name].text.portrait}/> : <h1 className="no-portrait-content">YOU MUST SET CHARACTER STATS AND PORTRAIT BEFORE USING THE COMBAT MAP!</h1>}
      </div>

      <div className="player-movement-control-bar">
          {/* <button>CLICK THEN CHOOSE LOCATION</button> */}

          <div className="player-movement-size-container">
              <div className={playerSize === 'small' ? 'player-size-button highlighted' : 'player-size-button'} onClick={() => setPlayerSize('small')}>S</div>
              <div className={playerSize === 'medium' ? 'player-size-button highlighted' : 'player-size-button'} onClick={() => setPlayerSize('medium')}>M</div>
              <div className={playerSize === 'large' ? 'player-size-button highlighted' : 'player-size-button'} onClick={() => setPlayerSize('large')}>L</div>
          </div>
          <p className="playerMove-instructions">Select a size for your character miniature that fits the battle map grid.Then drag and drop your character icon to wherever you would like on the map. Click "confirm movement" to finalize.</p>

      </div>
    </div>
  )
}

export default PlayerListItem;