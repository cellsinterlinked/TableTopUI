import React, {useState, useEffect} from 'react';
import './NPC.css';
import ScrollToBottom from 'react-scroll-to-bottom';


const NPC = ({item, deleteNPCData, sendNPCNote, notePost, setNotePost, npcNotes, role, stupidHack, notes}) => {
  
  const [displayNotes, setDisplayNotes] = useState(false);





  const notesHandler = () => {
    setDisplayNotes(true)
  }

  const protraitHandler = () => {
    setDisplayNotes(false)
  }

  const deleteHandler = () => {
    deleteNPCData(item.name)
  }

  const noteHandler = async() => {
     if (notePost !== "") {  
     sendNPCNote(item.name)
    }
    document.getElementById("noteInput").value = ""
  }


  return( 
    <div className="npc-card">

      {displayNotes && 
      <div className="scroll-hate">
        <h1 className="notes-header">Notes about {item.name} </h1>
      <ScrollToBottom className="npc-notes-container">
        {notes && notes.map((note, index) => (<li key={index}>{note.note}</li>) )}
        
        {notes && notes === {} && <h1>Enter Text Below To Leave Notes About This NPC</h1>}
      </ScrollToBottom>
      </div>}
      {displayNotes &&
        <div className="npc-notes-input-container">
        <textarea id="noteInput" className="npc-notes-input" placeholder="Add a new note" onChange={(event) => setNotePost(event.target.value)}>

        </textarea>
        <button onClick={noteHandler}>POST NOTE</button>
        </div>
        
      
      }

        

      
      {!displayNotes && <div className="npc-image">
      <h1 className="notes-header" style={{marginTop: '0px', marginBottom: "1rem"}} >{item.name}</h1>
        <img style={{marginBottom: "1rem"}} src={item.portrait} alt=""></img>
      </div>}
      {role === "DM" && <button style={{marginTop: displayNotes === false ? "1rem" : "0rem"}} onClick={deleteHandler}>DELETE NPC</button>}
      {!displayNotes && <button style={{marginTop: role === "PLAYER" ? "1rem" : "0rem"}} onClick={notesHandler}>NOTES</button>}
      {displayNotes && <button onClick={protraitHandler}>PORTRAIT</button>}

    </div>
  )
}

export default NPC