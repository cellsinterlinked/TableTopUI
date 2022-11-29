import React, {useState, useEffect} from 'react'
import './MessageDisplay.css';
import Message from './Message';


const MessageDisplay = ({messages, name}) => {
  const [newArr, setNewArr] = useState(null)

  useEffect(() => {
    setNewArr(messages.filter((message) => {
      return message.recipients.includes(name)
    }))
    
    


  },[messages, name])

   return (
    <div className='message-display-container'>
      <div className="message-fixed-box">
      {messages && newArr && newArr.map((message, index) => <Message key={index} message={message} name={name}/> )}
      </div>

    </div>
  )
}

export default MessageDisplay;