import React, {useState} from 'react'
import './Post.css';

const Post = (props) => {
  const [tempWorld, setTempWorld] = useState("")
  const [tempChar, setTempChar] = useState({portrait: "", name: ""})
  const [tempCombatMap, setTempCombatMap] = useState('')
  // const [tempCharName, setTempCharName] = useState(null)

  // NEXT THING TO DO build out tempCombatMap and use setCombatMap from props to send
  

  const newMapHandler = () => {
    if(tempWorld !== "") {props.sendMapData(tempWorld)
      props.showNotification('Map Was Posted!')
      console.log("should be firing")
    }
    setTempWorld("");
    document.getElementById("mapInput").value = ""
    console.log(`new map handler is working ${tempWorld} is map`)
  }

  const newNPCHandler = () => {
    if(tempChar.name && tempChar.portrait !== "") {props.sendNPCData(tempChar)
      props.showNotification('New NPC Was Added!')
      console.log("should be firing")
    }
    setTempChar({portrait: "", name: ""})
    document.getElementById("portrait-input").value = ""
    document.getElementById("npc-name-input").value = ""
  }

  const newCombatHandler = () => {
    if(tempCombatMap !== '') {props.sendCombatMap(tempCombatMap)
      props.showNotification('Combat Map Was Added!')
      console.log("should be firing")
    
    }
    setTempCombatMap('')
    document.getElementById('battle-map-input').value = ""
  }

  const checkState = () => {
    console.log(tempChar)
  }

  return(
    <div className="postContainer">
      <div className="worldContainer">
      <h1>POST A MAP</h1>
      <input id="mapInput" placeholder="Map URL" className="mapInput" type="text" value={tempWorld} onChange={(event) => setTempWorld(event.target.value)}></input>
      <p className="postDescription">Right click any image from the web and click "copy image location", then paste the link above. Once submitted this will be the current world map for your adventure and will be displayed in the "Maps" tab </p>
      <div className="worldButtonContainer"><button className="worldSubmitButton" onClick={newMapHandler}>SET MAP</button></div>
      {tempWorld && <div className="mapPrev"><img src={tempWorld} alt="" /></div>}
      </div>

      <div className="portraitContainer">
        <h1>POST AN NPC</h1>
        <input id="portrait-input" placeholder="Portrait URL" className="portraitInput" type="text" value={tempChar.portrait} onChange={(event) => setTempChar({...tempChar, portrait: event.target.value})}></input>
        <input id="npc-name-input" placeholder="Name" className="portraitInput" type="text" value={tempChar.name} onChange={(event) => setTempChar({...tempChar, name:event.target.value})}></input>
        <p className="postDescription">Right click any image from the web and click "copy image location", then paste the link above. This will be the current portrait for your new NPC. Second, give them a name. Once submitted you will find your NPC under the "NPC" tab. </p>
        <div className="portraitButtonContainer"><button className="portraitSubmitButton" onClick={newNPCHandler}>CREATE NPC</button></div>
        {/* <div className="portraitButtonContainer"><button className="portraitSubmitButton" onClick={checkState}>Check state</button></div> */}
        {tempChar && <div className="portraitPreview"><img src={tempChar.portrait} alt="" /></div>}
        {/* {tempCharArray !== [] && <div className="portraitListContainer">Pictures of Stuff</div> } */}
        
      </div>

      <div className="battle-map-post-container">
        <h1>POST A COMBAT MAP</h1>
        <input id="battle-map-input" placeholder="Battle Map URL" className="mapInput" type="text" value={tempCombatMap} onChange={(event) => setTempCombatMap(event.target.value)}></input>
        <p className="postDescription">Right click any image from the web and click "copy image location", then paste the link above. This will be the current combat map for your adventure and will be displayed in the "Combat" tab </p>
        <div className="worldButtonContainer"><button className="worldSubmitButton" onClick={newCombatHandler}>SET COMBAT MAP</button></div>
        {tempCombatMap && <div className="mapPrev"><img src={tempCombatMap} alt="URL Not Valid"/></div>}

      </div>


      

    </div>
  )
}
export default Post;