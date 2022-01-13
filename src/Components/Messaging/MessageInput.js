import React, {useState, useEffect} from 'react'
import './MessageInput.css';
import Modal from '../../Components/Modal/Modal'

const MessageInput = ({message, setMessage, sendPlayerMessage, recipients}) => {
  const [modal, setModal] = useState(false)

  const showModal = () => {
    setModal(!modal)
  }


  const sendMessage = (e) => {
    e.preventDefault()
    if (recipients.length < 2) {
      showModal()
    } else {
      sendPlayerMessage(e)
    }

  }

  return(
    <>
    <Modal 
    modalStyle="skinny-modal"
    header="Please choose recipients before sending a message!"
    onCancel = {showModal}
    children = {<button className="ok-error-button" onClick={showModal}>Ok</button>}
    show={modal === true}

    
    />
    <form className="messaging-form" onSubmit={sendMessage}>
    <textarea
      className="messaging-input"
      type=""
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendPlayerMessage(event) : null}
    />
    <button className={message !== "" ? "messaging-sendButton" : "messaging-sendButton-disabled"} type="submit">Send</button>
  </form>
    </>
  )
}

export default MessageInput;

