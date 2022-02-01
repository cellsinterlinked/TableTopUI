import React, { useState, useEffect, useRef } from 'react';
import './MonsterCreator.css';
import CustomDropDown from '../Reusable/CustomDropdown';
import MonsterDropDown from '../Reusable/MonsterDropDown';
import { CgCloseR } from 'react-icons/cg';
import { GiPieceSkull } from 'react-icons/gi';
import MonsterListItem from './MonsterListItem';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Modal from '../Modal/Modal';
import DiceRoll from '../DiceRoll';

const MonsterCreator = ({
  monsterData,
  sendMonsterInfo,

  newMonsterData,
  setNewMonsterData,
  sendPlayerRoll,
  endTurn,
  endMonsterTurn,
  clearMonsterInfo,
  clearPlayerPosition,

  showNotification,
}) => {
  const monsterNumberArr = [
    {
      id: 'monster1',
      value: 1,
      dead: false,
      xPosition: 20,
      yPosition: 20,
      icon: '',
      size: 'small',
    },
    {
      id: 'monster2',
      value: 2,
      dead: false,
      xPosition: 20,
      yPosition: 60,
      icon: '',
      size: 'small',
    },
    {
      id: 'monster3',
      value: 3,
      dead: false,
      xPosition: 20,
      yPosition: 100,
      icon: '',
      size: 'small',
    },
    {
      id: 'monster4',
      value: 4,
      dead: false,
      xPosition: 20,
      yPosition: 140,
      icon: '',
      size: 'small',
    },
    {
      id: 'monster5',
      value: 5,
      dead: false,
      xPosition: 20,
      yPosition: 180,
      icon: '',
      size: 'small',
    },
    {
      id: 'monster6',
      value: 6,
      dead: false,
      xPosition: 20,
      yPosition: 220,
      icon: '',
      size: 'small',
    },
    {
      id: 'monster7',
      value: 7,
      dead: false,
      xPosition: 20,
      yPosition: 260,
      icon: '',
      size: 'small',
    },
    {
      id: 'monster8',
      value: 8,
      dead: false,
      xPosition: 20,
      yPosition: 300,
      icon: '',
      size: 'small',
    },
    {
      id: 'monster9',
      value: 9,
      dead: false,
      xPosition: 20,
      yPosition: 340,
      icon: '',
      size: 'small',
    },
    {
      id: 'monster10',
      value: 10,
      dead: false,
      xPosition: 20,
      yPosition: 380,
      icon: '',
      size: 'small',
    },
    {
      id: 'monster11',
      value: 11,
      dead: false,
      xPosition: 20,
      yPosition: 420,
      icon: '',
      size: 'small',
    },
    {
      id: 'monster12',
      value: 12,
      dead: false,
      xPosition: 20,
      yPosition: 460,
      icon: '',
      size: 'small',
    },
    {
      id: 'monster13',
      value: 13,
      dead: false,
      xPosition: 20,
      yPosition: 500,
      icon: '',
      size: 'small',
    },
    {
      id: 'monster14',
      value: 14,
      dead: false,
      xPosition: 20,
      yPosition: 540,
      icon: '',
      size: 'small',
    },
    {
      id: 'monster15',
      value: 15,
      dead: false,
      xPosition: 20,
      yPosition: 580,
      icon: '',
      size: 'small',
    },
  ];
  const [monsterNum, setMonsterNum] = useState([{ id: 0, value: 0 }]);
  const [monsterGroup, setMonsterGroup] = useState();
  // const [monsterOrder, setMonsterOrder] = useState(
  //   newMonsterData ? [...newMonsterData] : null
  // );
  const [errorModal, setErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  
  const monsterStatusHandler = (monster) => {
    if (newMonsterData) {
      if (monster.dead === false) {
        let monsterDataCopy = newMonsterData.filter(
          (creature) => creature.id !== monster.id
        );
        let newMonster = { ...monster, dead: true };
        setNewMonsterData([...monsterDataCopy, newMonster]);
      }
    }

    if (monster.dead === true) {
      let monsterDataCopy = newMonsterData.filter(
        (creature) => creature.id !== monster.id
      );
      let newMonster = { ...monster, dead: false };
      setNewMonsterData([...monsterDataCopy, newMonster]);
    }
  };

  const IconConfirm = () => {
    if (monsterNum[0].value === 0) {
      return false;
    }

    let result = true;
    for (let i = 0; i < monsterGroup.length; i++) {
      if (monsterGroup[i].icon === '') {
        result = false;
      }
    }
    return result;
  };

  const checker = () => {
    // code here to check that there are minions and they all have icons.
    if (monsterNum[0].value === 0 || IconConfirm() === false) {
      setErrorModal(true);
      setErrorMessage(
        'Please set a number of creatures and have an icon URL for each one before confirming.'
      );
      return;
    } else {
      // console.log(monsterNum, monsterGroup);
      sendMonsterInfo(monsterGroup);
      // setMonsterOrder([...monsterGroup]);
    }
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    // const items = Array.from(monsterOrder);
    const items = Array.from(newMonsterData)
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    // setMonsterOrder(items);
    setNewMonsterData(items)
  };

  return (
    <div className="monster-creator-container">
      <Modal
        modalStyle="skinny-modal"
        header={errorMessage}
        onCancel={errorModal}
        children={
          <button
            className="ok-error-button"
            onClick={() => setErrorModal(false)}
          >
            Ok
          </button>
        }
        show={errorModal === true}
      />
      {monsterData.length === 0 && (
        <>
          <CustomDropDown
            headingStyle="midTitle"
            title="UNIT COUNT"
            items={monsterNumberArr}
            singleState={monsterNum}
            setSingleState={setMonsterNum}
            setSecondState={setMonsterGroup}
          />
          {monsterNum[0].id !== 0 && (
            <MonsterDropDown
              title="MONSTER ICONS"
              items={monsterGroup}
              setMonsterGroup={setMonsterGroup}
              monsterGroup={monsterGroup}
            />
          )}
          <div className="dmCombat_instructions">
            <p>
              First pick the number of units you want to place on the map by
              selecting in the "Unit Count" tab.
            </p>
            <p>
              Second, under the "Monster Icons" tab pick the size the monster
              will be on the grid, and then right click any image on the web and
              paste it into the monster's input bar to add the monster's image.
            </p>
          </div>
        </>
      )}

      {monsterData && (
        <div className="dmCombat_instructions">
          <p>
            To move a monster just drag and drop it to a place within the battle map. When you are done with your movement phase
            click the "Confirm Movement" button below to finalize. This will make all monster positions available to the players.
          </p>
          <p>
            If a creature is destroyed click the red X box next to its
            respective select button, then click the "Confirm Movement" button.
            A skull will now appear instead of the creature's original icon,
            letting the players know it has been destroyed.
          </p>
          <p>
            If the battle is over and you want to reset creatures and move
            character locations back to none click the "Clear Monsters" and
            "Clear Players" button.
          </p>
        </div>
      )}

      {monsterData.length === 0 && (
        <div className="combatButton_container">
          <button onClick={checker} className="minions-button">
            CREATE MY MINIONS!
          </button>
        </div>
      )}
      {/* <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="monsters">
          {(provided) => (
            <div
              className="monster-list-container"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {newMonsterData &&
              // this was monsterOrder before
                newMonsterData.map((monster, index) => (
                  <Draggable
                    key={monster.id}
                    draggableId={monster.id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        className="monster-list-item-container"
                        draggable="true"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <div className="monster-item-image">
                          {monster.dead === true && (
                            <GiPieceSkull className="dead-icon" />
                          )}
                          {monster.dead === false && (
                            <img src={monster.icon} alt="" />
                          )}
                        </div>

                        <h1 style={{color: "white"}}>{monster.value}</h1>

                        <div
                          className="monster-item-delete"
                          onClick={() => {
                            monsterStatusHandler(monster);
                            showNotification('Monster Status Changed');
                          }}
                        >
                          <CgCloseR className="monster-delete-icon" />
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext> */}
      {newMonsterData && (
        <div className="combatButton_container">
          <button onClick={endMonsterTurn} className="minions-button">
            CONFIRM MOVEMENT
          </button>
        </div>
      )}
      {newMonsterData && (
        <div className="combatButton_container">
          <button
            className="minions-button"
            onClick={() => {
              clearMonsterInfo();
            }}
          >
            CLEAR MONSTERS
          </button>
        </div>
      )}
      <div className="combatButton_container" style={{ marginBottom: '2rem' }}>
        <button className="minions-button" onClick={clearPlayerPosition}>
          CLEAR PLAYERS
        </button>
      </div>

      <DiceRoll sendPlayerRoll={sendPlayerRoll}/>
    </div>
  );
};

export default MonsterCreator;
