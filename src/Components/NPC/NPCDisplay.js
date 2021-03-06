import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './NPCDisplay.css';
import NPC from './NPC';

const NPCDisplay = (props) => {
  const [NPCDisplayState, setNPCDisplayState] = useState(null)
  const [x, setX] = useState(0)

  useEffect(() => {
    setNPCDisplayState([...props.npcArray])
    console.log(props.npcArray)
  }, [props.npcArray])
    




  const goLeft = () => {
  
    x === 0 ? setX(-100 * (NPCDisplayState.length - 1)) : setX(x + 100);
    console.log(x);
  };

  const goRight = () => {
   
    x === -100 * (NPCDisplayState.length - 1) ? setX(0) : setX(x - 100);
    console.log(x);
  };


  return(
    <>
    {NPCDisplayState &&
    <div className="container-container">
    <div className="NPC-display-container">

      <button id="npcLeft" onClick={goLeft}>
        <FaChevronLeft className="arrow" />
      </button>
      
      {props.npcArray.length > 0 && <div className="npcSpinner">
        {NPCDisplayState.map((item, index) => (
          <div key={item} className="slidingNPC" style={{ transform: `translateX(${x}%)`}}>
            <NPC role={props.role} item={item} deleteNPCData={props.deleteNPCData} sendNPCNote={props.sendNPCNote} notePost={props.notePost} setNotePost={props.setNotePost} npcNotes={props.npcNotes} stupidHack={props.stupidHack} notes={props.notes.filter(note => note.name === item.name)} />
          </div>  
        ))}
      </div>}

      {props.npcArray.length === 0 && <div className="no-npcs-wrapper">This is where NPC data will be displayed once your DM provides it. </div>}

      <button id="npcRight" onClick={goRight}>
        <FaChevronRight className="arrow" />
      </button>


    </div>
    </div>
    }

    {NPCDisplayState === [] && <div>No State Bruh</div>}
    </>
  )
}

export default NPCDisplay;