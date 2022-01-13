import React, {useState} from 'react'
import './PlayerInitiative.css';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

const PlayerInitiative = ({partyData, partyRolls, users}) => {

  const [playerOrder, setPlayerOrder] = useState(users ? [...users] : null)


  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(playerOrder);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setPlayerOrder(items)
  }
  console.log(partyRolls)

  const diceTotal = (player) => {
    let total = 0;
    for (let i = 0; i<partyRolls[player.name].number.length; i++) {
      total = total + partyRolls[player.name].number[i]
    } 
    return total;
  }

  return (<>
    <DragDropContext onDragEnd={handleOnDragEnd}>
    <Droppable droppableId="players">
      {(provided) => (
    <div className="player-initiative-container" {...provided.droppableProps} ref = {provided.innerRef}>
    {playerOrder && playerOrder.filter(player => player.role !== "dm").map((player, index) => (
      <Draggable key={player.id} draggableId={player.id} index={index}>
        {(provided) => (
      <div className='player-initiative-box' {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef} >
        {/* <p>{player.name}</p> */}
        <div className='initiative-icon-container'>
        {partyData[player.name] && partyData[player.name].text.portrait !== ""  && <img src={partyData[player.name].text.portrait} alt={''}/>}
      
        </div>
        <div className='initiative-dice-box'>
          {partyRolls[player.name] ? <div className="total-init-container">
          {partyRolls[player.name].number.map((number, index) => (
            <p style={{marginRight: "4px"}}>{number}</p>

          ))}
          </div> : <p>0</p>}
            
          {partyRolls[player.name] && <div className="total-init-container">
            <p>Total:</p>
            <p style={{marginLeft: "4px"}}>{diceTotal(player)}</p>
          </div>}
          </div>
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
  )
}

export default PlayerInitiative