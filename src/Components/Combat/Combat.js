import React, { useEffect, useState, useRef } from 'react';
import './Combat.css';
import MonsterCreator from './MonsterCreator';
import { GiPieceSkull } from 'react-icons/gi';
import PlayerInitiative from './PlayerInitiative';
import Draggable from 'react-draggable';

const Combat = ({
  users,
  partyPosition,
  name,
  array,
  monsterData,
  sendMonsterInfo,
  clearMonsterInfo,
  clearPlayerPosition,
  combatMap,
  partyData,
  partyRolls,
  showNotification,
  battleGroup,
  setBattleGroup,
  updateBattleGroup,
  role,
  updateKillFeed,
  sendPlayerRoll
}) => {
  const [newMonsterData, setNewMonsterData] = useState(
    monsterData ? [...monsterData] : []
  );

  const [newPartyPosition, setNewPartyPosition] = useState(
    partyPosition ? [...partyPosition] : []
  );
  const [activeMonster, setActiveMonster] = useState();

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

  const endMonsterTurn = () => {
    sendMonsterInfo(newMonsterData);
    showNotification('Monster Movement Sent');
    console.log('end monster turn fired');
  };



  return (
    <div className="combat-outer-border">
      <PlayerInitiative
        partyData={partyData}
        partyRolls={partyRolls}
        users={users}
        battleGroup={battleGroup}
        setBattleGroup={setBattleGroup}
        updateBattleGroup={updateBattleGroup}
        role={role}
        sendMonsterInfo={sendMonsterInfo}
        monsterData={monsterData}  
        updateKillFeed={updateKillFeed}      
      />
      <div className="outer-combat-wrapper">
      <div id="contentContainer">
        {newMonsterData &&
          monsterData &&
          newMonsterData.sort((a, b) => a.value - b.value).map((monster, index) => (
            <Draggable
              bounds="parent"
              onDrag={(e, ui) => {
                const x = monster.xPosition;
                const y = monster.yPosition;

                let updatedList = newMonsterData.map((item) => {
                  if (monster.value === item.value) {
                    return {
                      ...item,
                      xPosition: x + ui.deltaX,
                      yPosition: y + ui.deltaY,
                    };
                  } else {
                    return item;
                  }
                });

                setNewMonsterData(updatedList);
              }}
              defaultClassName="absolute"
              defaultPosition={{ x: monster.xPosition, y: monster.yPosition }}
            >
              <div className={`drag-wrapper ${monster.size}`}>
                {monster.dead === true ? (
                  <div className="drag-pic-wrapper">
                  <GiPieceSkull className="dead-token" />
                  </div>
                ) : (
                  <div className="drag-pic-wrapper">
                  <img alt="" src={monster.icon}></img>
                  </div>
                )}

                <div className="monster-drag-cover">{monster.value}</div>
              </div>
            </Draggable>
          ))}


{/* {newPartyPosition.filter((player) => player.name !== name)
          .map((user, index) => (
            <Draggable
            bounds="parent"
              onDrag={(e, ui) => {
                const x = user.position.x;
                const y = user.position.y;

                let updatedList = newPartyPosition.map((item) => {
                  if (user.value === item.value) {
                    return {
                      ...item,
                      xPosition: x + ui.deltaX,
                      yPosition: y + ui.deltaY,
                    };
                  } else {
                    return item;
                  }
                });

                setNewPartyPosition(updatedList);
              }}
              defaultClassName="absolute"
              defaultPosition={{ x: user.position.x, y: user.position.y }}
              key={user.name}
              id={user.name}
             
            >
              <div className={`drag-wrapper ${user.position.size}`}>
               <div className="drag-pic-wrapper">
                <img
                  alt=""
                  src={user.icon}
                  className="youSuck"
                ></img>
                </div>
                <div className="party-drag-cover"></div>
              </div>
            </Draggable>
          ))} */}


              


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
               <div className="drag-pic-wrapper">
                <img
                  alt=""
                  src={user.icon}
                  className="youSuck"
                ></img>
                </div>
                <div className="party-drag-cover"></div>
              
            </div>
          ))}






        {combatMap && (
          <img className="combat-image" alt="" src={combatMap}></img>
        )}
      </div>
      </div>

      <MonsterCreator
        sendMonsterInfo={sendMonsterInfo}
        monsterData={monsterData}
        setActiveMonster={setActiveMonster}
        newMonsterData={newMonsterData}
        setNewMonsterData={setNewMonsterData}
        endMonsterTurn={endMonsterTurn}
        clearMonsterInfo={clearMonsterInfo}
        clearPlayerPosition={clearPlayerPosition}
        activeMonster={activeMonster}
        showNotification={showNotification}
        sendPlayerRoll={sendPlayerRoll}
      />
    </div>
  );
};

export default Combat;
