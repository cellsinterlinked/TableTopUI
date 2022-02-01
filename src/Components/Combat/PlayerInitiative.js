import React, { useState, useEffect } from 'react';
import './PlayerInitiative.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { CgCloseR } from 'react-icons/cg';

const PlayerInitiative = ({ partyData, partyRolls, users, battleGroup, setBattleGroup, updateBattleGroup, role, sendMonsterInfo, monsterData, updateKillFeed}) => {
  //set battle group will have to change to a function that changes EVERYONE's battle group
  const [playerOrder, setPlayerOrder] = useState(battleGroup ? [...battleGroup] : null);

useEffect(() => {
  setPlayerOrder([...battleGroup])
}, [battleGroup])

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(playerOrder);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setPlayerOrder(items);
    updateBattleGroup(items)

  };

  const killMonster = (player) => {
    //get monster data and change target monster to dead. 
    let newData = monsterData
    let monsterIndex = monsterData.findIndex(monster => monster.id === player.id)
    
    if (newData[monsterIndex].dead === false) {
      newData[monsterIndex].dead = true
    
    } else {
      newData[monsterIndex].dead = false
    }
    let newBattleGroup = battleGroup
    let battleGroupIndex = battleGroup.findIndex(monster => monster.id === player.id)
    if (newBattleGroup[battleGroupIndex].dead === false) {
      newBattleGroup[battleGroupIndex].dead = true
    } else {
      newBattleGroup[battleGroupIndex].dead = false
    }
    

    updateKillFeed(newData, newBattleGroup)

    //get battle group and change monster to dead
    //send monster data
    //send battleGroup
  }

  
  

  const diceTotal = (player) => {
    let total = 0;
    for (let i = 0; i < partyRolls[player.id].number.length; i++) {
      total = total + partyRolls[player.id].number[i];
    }
    return total;
  };

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable 
        droppableId="players"
        direction="horizontal"
        >
          {(provided) => (
            <div
              className="player-initiative-container"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {playerOrder &&
                playerOrder.map((player, index) => (
                    <Draggable
                      key={player.id}
                      draggableId={player.id}
                      index={index}
                      bounds="parent"
                      isDragDisabled={role === "DM" ? false : true}
                    >
                      {(provided) => (
                        <div
                          className="player-initiative-box"
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          {/* <p>{player.name}</p> */}
                          <div className="initiative-icon-container">
                            {player.dead === true ? <div className="dead-vignette"></div> : <div className="alive-vignette"></div> }
                            {player.icon 
                              && (
                                <img
                                  className={role === "DM" ? "moving-init-char" : "non-moving-init-char"}
                                  src={player.icon}
                                  alt={''}
                                />
                              )}
                          </div>
                          {player.role === "player" ? 
                          <div className="initiative-dice-box">
                            { player.id in partyRolls ? (
                              <div className="total-init-container">
                                {partyRolls[player.id].number.map(
                                  (number, index) => (
                                    <p style={{ marginRight: '4px' }}>
                                      {number}
                                    </p>
                                  )
                                )}
                              </div>
                            ) : (
                              <p>0</p>
                            )}

                            {player.id in partyRolls && (
                              <div className="total-init-container">
                                <p>Total:</p>
                                <p style={{ marginLeft: '4px' }}>
                                  {diceTotal(player)}
                                </p>
                              </div>
                            )}
                          </div> : 
                          <div className="initiative-dice-box">
                            {role === "DM" && <div className="monster-delete-button" onClick={() => killMonster(player)}>
                              <CgCloseR className="kill-icon"/>
                              </div>}
                            <p>#{player.value}</p>

                          </div>
                          }
                        </div>
                      )}
                    </Draggable>
                  ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default PlayerInitiative;
