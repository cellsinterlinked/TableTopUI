import React, { useState, useEffect } from  'react';
import { Link } from 'react-router-dom';
import ErrorModal from '../Components/Modal/ErrorModal'
import './Join.css';
import FrontDropdown from '../Components/Reusable/FrontDropDown';
import Modal from '../Components/Modal/Modal';
import {MdPhonelinkErase} from 'react-icons/md';


const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [playerType, setPlayerType] = useState([{id:1, value: 'PLAYER'}])
  const [showResolutionModal, setShowResolutionModal] = useState(false) ;

  const items = [
    {
      id: 1,
      value: 'PLAYER'
    },
    {
      id: 2,
      value: 'DM'
    }
  ]

  useEffect(() => {
    let res = window.screen.availWidth * window.devicePixelRatio 
    console.log(res)
    if (res < 1700) {
      setShowResolutionModal(true)
    }
  }, [])



  const showState = () => {
    console.log(playerType[0].value);
  }
  
  const closeModal = () => {
    setShowResolutionModal(false)
  }

  const applyType = (type) => {
    setPlayerType(type)
    
  }
  

  return (
    <>
      <Modal 
      show={showResolutionModal === true} 
      children={
      <div className='new-resolution-box'>
      <p>This site's tools and user interface require more screen space than your device currently has! Please switch to a computer to enjoy all of Table Top Assistant's features. </p>
        <MdPhonelinkErase className='no-phone'/>
      </div>  
        }
      onCancel={closeModal}
      header={<p>STOP!</p>}
      footer={<button onClick={closeModal}>Got It!</button>}
      />
    {window.screen.availWidth * window.devicePixelRatio < 1700 && <div className='mobile-join'></div>}
    {window.screen.availWidth * window.devicePixelRatio > 1700 && <div className="joinOuterContainer">

       <div className='joinInnerContainer'>
        <h1 className="heading">JOIN THE ADVENTURE</h1>
        <div className="joinInputBox"><input placeholder="Character Name..." className="joinInput" type="text" value={name} onChange={(event) => setName(event.target.value)}></input></div>
        <div className="joinInputBox"><input placeholder="Room..." className="joinInput" type="text" value={room} onChange={(event) => setRoom(event.target.value)}></input></div>
        <FrontDropdown items={items} title={playerType[0].value} headingStyle="frontPage spaceTop" setSingleState={setPlayerType} singleState={playerType}/>

        <p className="dmInstructions">If you are in the Dungeon Master role please choose a name for your room, the name your players will see you as and set the role to "DM"</p>
        <p className="playerInstructions">If you are in the Player role please give your character name, the name of the room your Dungeon Master chose, and make sure "Player" role is selected. </p>
        {name && room && <Link className="button-link-box"style={{textDecoration: "none", fontFamily: "'Niconne', cursive"}} onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/play?name=${name}&room=${room}&role=${playerType[0].value}`}>
          <button className="signInButton" type="submit">JOIN PARTY</button>
        </Link>}

        {(!name || !room) && 
        
          <button className="signInButton_Inactive" type="button" onClick={() => {alert("Please input a character name and room to join")}}>JOIN PARTY</button>
        }
       
      </div>
    </div>}
</>
  )
}

export default Join;

// to={`/play?name=${name}&room=${room}$role=${playerType[0].value}`}