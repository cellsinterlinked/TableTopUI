import React, { useEffect, useState, useRef } from 'react';

import './Combat.css';

import { GiPieceSkull } from 'react-icons/gi';
import PlayerMovement from './PlayerMovement';
import PlayerInitiative from './PlayerInitiative';
import Draggable from 'react-draggable';

const Combat = ({
  sendPlayerPosition,
  users,
  partyPosition,
  name,
  array,
  monsterData,
  role,
  stats,
  combatMap,
  partyData,
  partyRolls,
  partyStats,
  sendPlayerRoll,
  battleGroup,
  setBattleGroup,
  updateBattleGroup,
  updateKillFeed
}) => {
  const [newMonsterData, setNewMonsterData] = useState(
    monsterData ? [...monsterData] : []
  );

  const [playerSize, setPlayerSize] = useState(
    partyPosition && partyPosition[partyPosition.find((x) => x.name === name)]
      ? partyPosition[partyPosition.find((x) => x.name === name)].position.size
      : 'small'
  );

  const [newPartyPosition, setNewPartyPosition] = useState(
    partyPosition ? [...partyPosition] : []
  );

  useEffect(() => {
    if (monsterData) {
      setNewMonsterData([...monsterData]);
    } else {
      setNewMonsterData([]);
    }
  }, [monsterData]);

  useEffect(() => {
    if (partyPosition) {
      setNewPartyPosition([...partyPosition]);
    } else {
      setNewPartyPosition([]);
    }
  }, [partyPosition]);

 

  const [playerLocation, setPlayerLocation] = useState(
    partyPosition && partyPosition.find((x) => x.name === name)
      ? partyPosition.find((x) => x.name === name).position
      : { x: 50, y: 50 }
  );

  const endTurn = () => {
    let position = {
      x: playerLocation.x,
      y: playerLocation.y,
      size: playerSize,
    };
    console.log(position);
    sendPlayerPosition(position);
    console.log(partyPosition);
  };

  return (
    <div className="combat-outer-border">
      {/* <button onClick={wtfIsGoingOn}>CHeck for shit</button> */}
      <PlayerInitiative
        partyData={partyData}
        partyRolls={partyRolls}
        users={users}
        battleGroup={battleGroup}
        setBattleGroup={setBattleGroup}
        updateBattleGroup={setBattleGroup}
        updateKillFeed={updateKillFeed}
      />
      <div className="outer-combat-wrapper">
      <div id="contentContainer">
        {role && role !== 'DM' && playerLocation && (
          <Draggable
            bounds="parent"
            defaultClassName="absolute"
            defaultPosition={{ x: playerLocation.x, y: playerLocation.y }}
            onDrag={(e, ui) => {
              const x = playerLocation.x;
              const y = playerLocation.y;

              let updatedLocation = {
                ...playerLocation,
                x: x + ui.deltaX,
                y: y + ui.deltaY,
              };
              setPlayerLocation(updatedLocation);
            }}
          >
            <div
              className={
                partyPosition &&
                partyPosition.find((x) => x.name === name)
                  ? ` drag-wrapper ${
                      partyPosition.find((x) => x.name === name).position.size
                    }`
                  : ' drag-wrapper small'
              }
            >
              <div className="drag-pic-wrapper">
              <img alt="" src={stats.portrait}></img>

              </div>
              <div className="drag-cover"></div>
            </div>
          </Draggable>
        )}

        {newMonsterData && monsterData &&
          newMonsterData.map((monster) => (
            <div className="absolute"   style={{
              left: `${monster.xPosition}px`,
              top: `${monster.yPosition}px`,
              transition: 'left 0.5s ease-in, top 0.5s ease-in',
            }}>
            <div
              id={monster.id}
              key={monster.id}
              className={`drag-wrapper ${monster.size}`}
              
            >
              {monster.dead === true ? (
                <div className="drag-pic-wrapper">
                  <GiPieceSkull className="dead-token" />

                </div>
              ) : (
                <div className="drag-pic-wrapper">
                  <img alt="" src={monster.icon}></img>

                </div>
              )}
                       <div className="monster-drag-cover"></div>
              </div>
            </div>
          ))}

        {/* {Object.keys(partyPosition).filter(player => player !== name).map((user, index) =>  <div 
          className={`${partyPosition[user].position.size} circle`}
          key={user} 
          id={user}  
          style={{left: `${partyPosition[user].position.x}px`, 
                  top: `${partyPosition[user].position.y}px`, 
                  position: "absolute", 
                  zIndex: `${array[index]}`,
                  borderRadius: "50%" ,
                  transition: "left 0.5s ease-in, top 0.5s ease-in"}} 
           
          >
            {partyData[user] && <img 
          alt="" 
          src={partyData[user].text.portrait}
          className="youSuck"
          >
          </img>}
          </div> )} */}

        {newPartyPosition.filter((player) => player.name !== name)
          .map((user, index) => (
            <div
              className={`${user.position.size} circle`}
              key={user.name}
              id={user.name}
              style={{
                left: `${user.position.x}px`,
                top: `${user.position.y}px`,
                position: 'absolute',
                zIndex: `${array[index]}`,
                borderRadius: '50%',
                transition: 'left 0.5s ease-in, top 0.5s ease-in',
              }}
            >
              {partyData[index] && (
                <img
                  alt=""
                  src={partyData[user.name].text.portrait}
                  className="youSuck"
                ></img>
              )}
            </div>
          ))}

        {combatMap && (
          <img className="combat-image" alt="" src={combatMap}></img>
        )}
      </div>
      </div>

      <PlayerMovement
        endTurn={endTurn}
        stats={stats}
        partyPosition={partyPosition}
        setPlayerSize={setPlayerSize}
        playerSize={playerSize}
        partyData={partyData}
        name={name}
        sendPlayerRoll={sendPlayerRoll}
      />
    </div>
  );
};

export default Combat;
