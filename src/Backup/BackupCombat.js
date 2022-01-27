import React, { useEffect, useState, useRef } from 'react';
import { GiConsoleController } from 'react-icons/gi';
import './Combat.css';
import MonsterCreator from './MonsterCreator';
import { GiPieceSkull } from 'react-icons/gi';
import PlayerMovement from './PlayerMovement';
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
}) => {
  const [newMonsterData, setNewMonsterData] = useState(
    monsterData ? [...monsterData] : null
  );

  const [newPartyPosition, setNewPartyPosition] = useState(
    partyPosition ? [...partyPosition] : null
  );
  const [activeMonster, setActiveMonster] = useState();

  useEffect(() => {
    if (monsterData) {
      setNewMonsterData([...monsterData]);
    } else {
      setNewMonsterData();
    }
  }, [monsterData]);

  useEffect(() => {
    if (partyPosition) {
      setNewPartyPosition([...partyPosition]);
    } else {
      setNewPartyPosition();
    }
  }, [partyPosition]);

  const endMonsterTurn = () => {
    sendMonsterInfo(newMonsterData);
    showNotification('Monster Movement Sent');
    console.log('end monster turn fired');
  };

  console.log("monster data is " + monsterData, "party position is" + partyPosition)
  return (
    <div className="combat-outer-border">
      <PlayerInitiative
        partyData={partyData}
        partyRolls={partyRolls}
        users={users}
      />

      <div id="contentContainer">
        {/* {role && role !== 'DM'  && (
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
                partyPosition[name]
                  ? ` drag-wrapper ${partyPosition[name].position.size}`
                  : ' drag-wrapper small'
              }
            >
              <img alt="" src={stats.portrait}></img>
            </div>
          </Draggable>
        )} */}

        {newMonsterData && monsterData ? 
          newMonsterData.map((monster, index) => (
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
                  <GiPieceSkull className="dead-token" />
                ) : (
                  <img alt="" src={monster.icon}></img>
                )}

                <div className="drag-cover"></div>
              </div>
            </Draggable>
          )) : null}

        {Object.keys(newPartyPosition)
          .filter((player) => player.name !== name)
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
      />
    </div>
  );
};

export default Combat;
