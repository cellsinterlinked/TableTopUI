import React, { useState } from 'react';
import './DiceRoll.css';
import diceSound from  '../Resources/diceRoll.mp3';
import {Howl, Howler} from 'howler';
import { BsReverseLayoutSidebarInsetReverse } from 'react-icons/bs';

const DiceRoll = ({sendPlayerRoll}) => {
  const [result, setResult] = useState(null)
  const [type, setType] = useState(4)
  const [number, setNumber] = useState(1)
  

  const audioClips = [
    {sound: diceSound, label: "dice"}
  ]


  const diceOptions = [
    {
      label: "D4",
      value: 4
    },
    {
      label: "D6",
      value: 6
    },
    {
      label: "D8",
      value: 8
    },
    {
      label: "D10",
      value: 10
    },
    {
      label: "D12",
      value: 12
    },
    {
      label: "D20",
      value: 20
    },

  ]

  const diceCount = [
    {
      label: 1,
      value: 1
    },
    {
      label: 2,
      value: 2
    },
    {
      label: 3,
      value: 3
    },
    {
      label: 4,
      value: 4
    },
    {
      label: 5,
      value: 5
    },
    {
      label: 6,
      value: 6
    },
  ]

  const handleType = (event) => {
    setType(event.target.value)
  }

  const handleNumber = (event) => {
    setNumber(event.target.value)
  }

  const diceMaths = () => {
    let numArr = []
    if (number > 1) {
      for (let i = 1;  i <= number; i++) {
        numArr.push(Math.floor(Math.random() * type) + 1)
        
      }
    } else {

      numArr.push(Math.floor(Math.random() * type) + 1)
      
    }
    setResult(numArr);
    sendPlayerRoll(numArr)
    diceFunc(audioClips[0].sound)
    // console.log(diceVal);
  }

  const diceFunc = (src) => {
    const sound = new Howl({
      src
    })
    sound.play();
  }

  const clearRoll = () => {
    setResult(null);
    setType(4);
    setNumber(1);
   
  }

  const totalFunc = () => {
    if (!result || result.length < 1) {
      return 0;
    }
    if (result.length > 0) {
      let total = 0
     for (let i = 0; i < result.length; i++) {
       total = total + result[i]
     }
      return total;
    } else {
      return 0;
    }

  }

  return (
    <div className="diceRollContainer">
      <div className="diceSelectContainer">
      <div className="custom-select">
        <select className="diceSelect" onChange={handleType} value={type}>
          {diceOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        <span className="custom-arrow" />
      </div>

      <div className="custom-select">
        <select className="diceSelect" onChange={handleNumber} value={number}>
          {diceCount.map((count) => (
            <option key={count.value }value={count.value}>{count.label}</option>
          ))}
        </select>
        <span className="custom-arrow" />
      </div>
      </div>
      <p className="rollInstructions">Select the type of dice to roll followed by the number of dice</p>
      <div className="diceButtonContainer">
        <button type="button" onClick={clearRoll}>CLEAR</button>
        <button type="button" onClick={diceMaths}>ROLL DICE</button>
      </div>
      <div className="diceResultContainer">
            <div className="diceResultBackground">
          {result &&  result.map((roll, index) => <div className="roll_container"><h1>{roll}</h1></div>)}
          
            </div>
            {(result && result.length > 0) && <div style={{display:"flex", alignItems: "center", flexDirection: "column"}}><p>TOTAL</p><div className="roll_container"><h1 style={{fontSize: "1rem"}}>{totalFunc()}</h1></div></div>}

      </div>

    </div>
  )
}

export default DiceRoll;