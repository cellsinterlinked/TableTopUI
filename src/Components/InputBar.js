import React, { useState, useEffect } from 'react';
import Dice from '../Resources/toppng.com-emini-polyhedral-black-green-gold-x7-green-black-rpg-dice-436x397.png';
import DiceRoll from './DiceRoll';
import './InputBar.css';

const InputBar = ({stats, setStats, name, sendPlayerData, sendPlayerRoll }) => {

  const [playerIconPreview, setPlayerIconPreview] = useState("")
  const [correctName, setCorrectName] = useState("")
  
  useEffect(() => {
    setCorrectName(newName())
  })
  // const  setDiceRoll = async (roll) => {
  //   await setStats({...stats, dice: roll})
  //   // sendPlayerData()
  // }
  const newName = () => {
    let arr = name.split(" ")
    let newArr = []
    for (let i=0; i<arr.length; i++){
      newArr.push (arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }
    return newArr.join(" ");
    
  }
  


  return (
  <form className="inputBarContainer" onSubmit={sendPlayerData}>

    <div className="charBox3">
      {stats.portrait && <img src={stats.portrait} alt="Portrait"></img>}
      {!stats.portrait && <p>INPUT URL OF CHARACTER PORTRAIT DOWN BELOW</p>}

    </div>

    <div className="charBox1">

    <div className="input-character-name">
      <h1>{correctName}</h1>
    </div>

    <div className="charInputDiv">
      <p>Hit Points</p>
      <div class="plus-box-holder">
        {/* <p className="plus">+</p> */}
    <input 
    className="charInput"
    value={stats.hp}
    onChange={(event) => setStats({...stats, hp: event.target.value})}
    // value={props.playerData}
    // onChange={(event) => props.setPlayerData(event.target.value)}
    // onKeyPress={event => event.key === 'Enter' ? props.sendPlayerData(event) : null}
    >
    </input>

      </div>
    </div>


    <div className="charInputDiv">
      <p>Armor Class</p>
      <div className="plus-box-holder">
      {/* <p className="plus">+</p> */}
      <input className="charInput"
        value={stats.ac}
        onChange={(event) => setStats({...stats, ac: event.target.value})}
      >
      </input>

      </div>
      {/* <button onClick={() => console.log(stats)}>ShowState</button> */}
    </div>

    <div className="charInputDiv">
      <p>Melee Bonus</p>
      <div className="plus-box-holder">
      <p className="plus">+</p>
      <input className="charInput"
      value={stats.melee}
      onChange={(event) => setStats({...stats, melee: event.target.value})}
      ></input>
      </div>
    </div>

    <div className="charInputDiv">
      <p>Ranged Bonus</p>
      <div className="plus-box-holder">
      <p className="plus">+</p>
      <input className="charInput"
      value={stats.ranged}
      onChange={(event) => setStats({...stats, ranged: event.target.value})}
      ></input>
      </div>
    </div>

    
    {/* </div>

  <div className="charBox2"> */}

    <div className="charInputDiv">
      <p>Strength Save</p>
      <div className="plus-box-holder">
      <p className="plus">+</p>
      <input className="charInput"
      value={stats.str}
      onChange={(event) => setStats({...stats, str: event.target.value})}
      ></input>
      </div>
    </div>

    <div className="charInputDiv">
      <p>Dexterity Save</p>
      <div className="plus-box-holder">
      <p className="plus">+</p>
      <input className="charInput"
      value={stats.dex}
      onChange={(event) => setStats({...stats, dex: event.target.value})}
      ></input>
      </div>
    </div>

    <div className="charInputDiv">
      <p>Constitution Save</p>
      <div className="plus-box-holder">
      <p className="plus">+</p>
      <input className="charInput"
      value={stats.con}
      onChange={(event) => setStats({...stats, con: event.target.value})}
      ></input>
      </div>
    </div>

    <div className="charInputDiv">
      <p>Intelligence save</p>
      <div className="plus-box-holder">
      <p className="plus">+</p>
      <input className="charInput"
      value={stats.int}
      onChange={(event) => setStats({...stats, int: event.target.value})}
      ></input>
      </div>
    </div>

    <div className="charInputDiv">
      <p>Wisdom Save</p>
      <div className="plus-box-holder">
      <p className="plus">+</p>
      <input className="charInput"
      value={stats.wis}
      onChange={(event) => setStats({...stats, wis: event.target.value})}
      ></input>
      </div>
    </div>

    <div className="charInputDiv">
      <p>Charisma Save</p>
      <div className="plus-box-holder">
      <p className="plus">+</p>
      <input className="charInput"
      value={stats.cha}
      onChange={(event) => setStats({...stats, cha: event.target.value})}
      ></input>
      </div>
    </div>

    <div className="charInputDiv_image">
      <p style={{color: "black", fontWeight: "bold"}}>Portrait URL</p>
      <input className="charInput_image"
      value={stats.portrait}
      onChange={(event) => setStats({...stats, portrait: event.target.value})}>
        
      </input>
      <p className="portrait-explanation">Right click any image from the web and paste it in this box for your character portrait</p>
    </div>


    <div className="submit-stats-container">
      <button className="submit-stats" type="button" onClick={sendPlayerData} >Update Stats</button>
    </div>
  </div>


    {/* <div className="charBox4">
      <img id="diceImage" src={Dice} alt="dice"></img>

    </div>


    <DiceRoll sendPlayerRoll={sendPlayerRoll} setStats={setStats} sendPlayerData={sendPlayerData}/>
  <button className='sendButton' type='submit'>Set Stats</button> */}
  </form>

  
  )
  
}

export default InputBar