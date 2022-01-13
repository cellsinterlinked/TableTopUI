import React, {useState, useEffect} from 'react';
import './DropDowns.css';
import {MdExpandMore} from 'react-icons/md';

const DropDowns = ({users, setRecipients, recipients, name, partyData}) => {
const [drop1Extended, setDrop1Extended] = useState(false)
const [drop2Extended, setDrop2Extended] = useState(false)
const [userArray, setUserArray] = useState()



useEffect(() => {
  setUserArray(users.filter(user => user.name !== name))
},[name, users])


  const showDropDown = () => {
    if (drop1Extended) {
      setDrop1Extended(false)
    }
    if (!drop1Extended) {
      setDrop1Extended(true)
    }
  }

  const showDropDown2 = () => {
    if (drop2Extended) {
      setDrop2Extended(false)
    }
    if (!drop2Extended) {
      setDrop2Extended(true)
    }
  }

  

  const handleCheckboxChange = (event) => {
    
    let newArray = [...recipients, event.target.id];
    if (recipients.includes(event.target.id)) {
      newArray = newArray.filter(user => user !== event.target.id)
    }
    setRecipients(newArray)
   
  }

  return (
    <div className="dropdown-container" onMouseLeave={() => setDrop2Extended(false)}>
      <form>
       


        <div className='multi-select2'>
          <div className="select-box" onClick={showDropDown2}>
          <select>
            <options>Select Players</options>
          </select>
            <div className="over-select"><p>SELECT RECIPIENTS</p><MdExpandMore className={drop2Extended ? "down-drop rotated" : "down-drop"}/></div>
          </div>
          <div id={drop2Extended ? "check-boxes-expanded" : "check-boxes"} >
          {users && userArray && userArray.map((user) => <label  key={user.id} for={user.name}>
            <div className="check-name-wrapper">
            <input className="recipient-check-box" type="checkbox" id={user.name} onChange={handleCheckboxChange}/>
              <p className="recipient-name-list">{user.name}</p>
              </div>
              <div className="checklist-portrait">
                {user.role === "dm" && <img src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1641933882/Dungeons%20and%20Dragons/AdobeStock_337670650_copy_qjmtlr.jpg" alt="DM" />}
                {partyData[user.name] &&
                <img src={partyData[user.name].text.portrait} alt=""/>}
              </div>
              </label>)}

          
          
            

          </div>


        </div>
      </form>

    </div>
  )
}

export default DropDowns;