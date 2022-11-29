import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Play.css';
import Character from '../Components/Character';
import SideBar from '../Components/Navigation/SideBar';
import Modal from '../Components/Modal/Modal';
import ErrorModal from '../Components/Modal/ErrorModal';
import NotificationModal from '../Components/Modal/NotificationModal';
import Help from '../Components/Modal/Help/Help';
import { Howl, Howler } from 'howler';
import NotificationSound from '../Resources/juntos-607.mp3';
import NewPlayerSound from '../Resources/attention-seeker-480.mp3';
import Exit from '../Components/Navigation/Exit';
import Background from '../Resources/AdobeStock_225549528.jpeg';

let socket;
const Play = ({ location }) => {
  const [showModal, setShowModal] = useState(false);
  const [exitModal, setExitModal] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);
  const [alert, setAlert] = useState('');
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [role, setRole] = useState('');
  const [users, setUsers] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(
    sessionStorage.getItem('messages')
      ? JSON.parse(sessionStorage.getItem('messages'))
      : []
  );
  //  const [playerData, setPlayerData] = useState()
  const [partyData, setPartyData] = useState(
    sessionStorage.getItem('partyStats')
      ? JSON.parse(sessionStorage.getItem('partyStats'))
      : {}
  );
  const [partyRolls, setPartyRolls] = useState({});
  const [stats, setStats] = useState(
    sessionStorage.getItem('stats')
      ? JSON.parse(sessionStorage.getItem('stats'))
      : {
          user: '',
          hp: '0',
          ac: '0',
          melee: '0',
          ranged: '0',
          str: '0',
          dex: '0',
          con: '0',
          int: '0',
          wis: '0',
          cha: '0',
          dice: 0,
          portrait: '',
        }
  );

  const [map, setMap] = useState(
    sessionStorage.getItem('map')
      ? JSON.parse(sessionStorage.getItem('map'))
      : ''
  );
  // const [npcNotes, setNPCNotes] = useState(sessionStorage.getItem('npcNotes') ? JSON.parse(sessionStorage.getItem('npcNotes')):{})
  const [recipients, setRecipients] = useState([]);
  const [npcArray, setNPCArray] = useState(
    sessionStorage.getItem('npcArray')
      ? JSON.parse(sessionStorage.getItem('npcArray'))
      : []
  );
  const [notePost, setNotePost] = useState('');
  const [unreadMessages, setUnreadMessages] = useState(0);

  const [unseenNPC, setUnseenNPC] = useState(0);
  const [unseenMap, setUnseenMap] = useState(0);

  const [userYPosition, setUserYPosition] = useState(0);
  const [userXPosition, setUserXPosition] = useState(0);
  const [partyPosition, setPartyPosition] = useState(
    sessionStorage.getItem('partyPosition')
      ? JSON.parse(sessionStorage.getItem('partyPosition'))
      : []
  );
  const [error, setError] = useState(null);
  const [monsterData, setMonsterData] = useState(
    sessionStorage.getItem('monsterData')
      ? JSON.parse(sessionStorage.getItem('monsterData'))
      : []
  );

  const [combatMap, setCombatMap] = useState(
    sessionStorage.getItem('combatMap')
      ? JSON.parse(sessionStorage.getItem('combatMap'))
      : ''
  );
  const [stupidHack, setStupidHack] = useState(false);
  const audioClips = [
    { sound: NotificationSound, label: 'notification' },
    { sound: NewPlayerSound, label: 'newPlayer' },
  ];

  const [topic, setTopic] = useState('Posting Character Stats');

  const [notes, setNotes] = useState(
    sessionStorage.getItem('notes')
      ? JSON.parse(sessionStorage.getItem('notes'))
      : []
  );

  ////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [battleGroup, setBattleGroup] = useState(
    sessionStorage.getItem('battleGroup')
      ? JSON.parse(sessionStorage.getItem('battleGroup'))
      : []
  );

  ///////////////////////////////////////////////////////////////////////////////////////////////////////

  // const ENDPOINT = 'https://table-top-sever.herokuapp.com/'
  const ENDPOINT = 'http://localhost:5000';

  useEffect(() => {
    const { name, room, role } = queryString.parse(location.search);

    socket = io(ENDPOINT);
    setRole(role);
    setName(name.toLowerCase());
    setRoom(room);

    if (role === 'PLAYER') {
      setStats({ ...stats, user: name });
    }
    if (role === 'DM')
      setStats({
        ...stats,
        user: name,
        portrait:
          'https://res.cloudinary.com/dbnapmpvm/image/upload/v1641933882/Dungeons%20and%20Dragons/AdobeStock_337670650_copy_qjmtlr.jpg',
      });
    setRecipients([...recipients, name.toLowerCase()]);
    socket.emit('join', { name, room, role }, (error) => {
      if (error) {
        setError(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('stats', (stats) => {
      setPartyData({ ...partyData, [stats.user]: stats });
    });

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
  }, [partyData]);

  useEffect(() => {
    socket.on('number', (number) => {
      setPartyRolls({ ...partyRolls, [number.user]: number });
    });
    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
  }, [partyRolls]);

  useEffect(() => {
    socket.on('map', (map) => {
      setMap(map);
      setUnseenMap(unseenMap + 1);
    });
    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
  }, [map]);

  useEffect(() => {
    socket.on('npc', (npc) => {
      setNPCArray([...npcArray, npc]);

      // setUnseenNPC(unseenNPC + 1)
    });
    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
  }, [npcArray]);

  useEffect(() => {
    socket.on('deleteNPC', (deletedNPC) => {
      setNPCArray(
        npcArray.filter((nonPlayer) => nonPlayer.name !== deletedNPC.name)
      );
    });
    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
  }, [npcArray]);

  useEffect(() => {
    socket.on('noteTransfer', (payload) => {
      console.log('note came in');
      setNotes([...notes, payload]);
    });
    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
  }, [notes]);

 

  useEffect(() => {
    socket.on('playerMessage', (playerMessage) => {
      setMessages([...messages, playerMessage]);
      if (
        playerMessage.recipients.includes(name) &&
        playerMessage.name !== name
      ) {
        setUnreadMessages(unreadMessages + 1);
      }
      console.log('use effect triggered');
    });
    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
  }, [messages, unreadMessages, name]);

  useEffect(() => {
    socket.on('sendPlayerPosition', (sendPlayerPosition) => {
      let newArr = partyPosition.filter(
        (player) => player.name !== sendPlayerPosition.name
      );
      setPartyPosition([
        ...newArr,
        {
          name: sendPlayerPosition.name,
          position: sendPlayerPosition.position,
          icon: sendPlayerPosition.icon,
        },
      ]);
    });
    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
  }, [partyPosition]);

  useEffect(() => {
    socket.on('sendMonsterInfo', (sendMonsterInfo) => {
      if (battleGroup.length === 0) {
        let battleArr = []
        Object.keys(partyData).forEach(user => battleArr.push({id: partyData[user].user, icon: partyData[user].text.portrait, dead: false, role: "player"}))
        sendMonsterInfo.forEach(monster => battleArr.push({id: monster.id, icon: monster.icon, dead: monster.dead, value: monster.value, role: "monster"}))
        setBattleGroup([...battleArr])
      }
        


      setMonsterData([...sendMonsterInfo]);
    });
    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
  }, [monsterData, partyData, battleGroup]);
  /////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    socket.on('updateBattleGroup', (updatedGroup) => {
      console.log("hewoh!" + updatedGroup)
      setBattleGroup([...updatedGroup])
    });
    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
  }, [])

  useEffect(() => {
    socket.on('updateKillFeed', (updateKillFeed) => {
      console.log("actually updating kill feed")
      setBattleGroup([...updateKillFeed.newBattleGroup])
      setMonsterData([...updateKillFeed.newData])
    });
    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
  }, [monsterData, battleGroup])
///////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    socket.on('clearMonsterInfo', (clearValue) => {
      setMonsterData(clearValue);
      setBattleGroup([])
    });
    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
  }, [monsterData]);

  useEffect(() => {
    socket.on('clearPlayerPosition', (clearValue) => {
      setPartyPosition(clearValue);
    });
    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
  }, [monsterData]);

  useEffect(() => {
    socket.on('sendCombatMap', (map) => {
      setCombatMap(map);
    });
    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
  });

  // useEffect(() => {
  //   socket.on('logout', (name) => {
  //     const remainingPartyData = partyData.filter(user => user.user !== name)
  //     const remainingUsers = users.filter(user => user.name !== name)
  //     const remainingPartyPosition = partyPosition.filter(user => user.name !== name)

  //     setPartyData({...remainingPartyData})
  //     setUsers([...remainingUsers])
  //     setPartyPosition({...remainingPartyPosition})

  //   })
  //   socket.on('roomData', ({ users }) => {
  //     setUsers(users)
  //   })
  // }, [partyData, users, partyPosition] )

  // ^^^^^^ get a load of this guy L00000L

  useEffect(() => {
    window.sessionStorage.setItem('stats', JSON.stringify(stats));
    window.sessionStorage.setItem('partyStats', JSON.stringify(partyData));
    window.sessionStorage.setItem('map', JSON.stringify(map));
    window.sessionStorage.setItem('npcArray', JSON.stringify(npcArray));
    // window.sessionStorage.setItem("npcNotes", JSON.stringify(npcNotes))
    window.sessionStorage.setItem('messages', JSON.stringify(messages));
    window.sessionStorage.setItem(
      'partyPosition',
      JSON.stringify(partyPosition)
    );
    window.sessionStorage.setItem('users', JSON.stringify(users));
    window.sessionStorage.setItem('monsterData', JSON.stringify(monsterData));
    window.sessionStorage.setItem('combatMap', JSON.stringify(combatMap));
    window.sessionStorage.setItem('notes', JSON.stringify(notes));
    window.sessionStorage.setItem('battleGroup', JSON.stringify(battleGroup));
  }, [
    stats,
    partyData,
    map,
    npcArray,
    messages,
    partyPosition,
    users,
    monsterData,
    combatMap,
    stupidHack,
    notes,
    battleGroup,
  ]);
  /// removed npc notes

  const sendPlayerData = (event) => {
    event.preventDefault();
    if (stats) {
      socket.emit('sendPlayerData', stats);
      console.log(stats);
    }
  };

  const sendPlayerRoll = (number) => {
    if (number) {
      socket.emit('sendPlayerRoll', number);
      console.log(number);
    }
  };

  const sendMapData = (map) => {
    if (map) {
      socket.emit('sendMapData', map);
    }
    console.log('send map data was triggered');
  };

  const sendNPCData = (npc) => {
    if (npc) {
      socket.emit('sendNPCData', npc);
    }
    console.log({ npc });
  };

  const deleteNPCData = (npc) => {
    if (npc) {
      socket.emit('deleteNPCData', npc);
      showNotification('NPC Deleted');
    }
    console.log({ npc });
  };

  const sendNPCNote = (npcName) => {
    console.log(`sending ${notePost} ${npcName}`);
    let icon = stats.portrait;
    let myName = name;
    socket.emit('sendNPCNote', npcName, notePost, icon, myName);
    setNotePost('');
  };

  const sendPlayerMessage = (event) => {
    event.preventDefault();
    if (message && recipients !== [] && partyData[name]) {
      let icon = partyData[name].text.portrait;
      socket.emit('sendPlayerMessage', message, recipients, name, icon);
      setMessage('');
      console.log(`message triggered ${message}`);
    }

    if (message && recipients !== [] && role === 'DM') {
      let icon = stats.portrait;
      socket.emit('sendPlayerMessage', message, recipients, name, icon);
      setMessage('');
      console.log(`message triggered ${message} for DM`);
    }
  };

  const sendPlayerPosition = (position) => {
    // if (userXPosition !== 0 && userYPosition !== 0 && stats.portrait) {
    let icon = stats.portrait;
    socket.emit('sendPlayerPosition', position, name, icon);
    showNotification('Movement Logged');
    console.log('triggered send player position');
    // }
  };

  const sendMonsterInfo = (monsterGroup) => {
    socket.emit('sendMonsterInfo', monsterGroup);
    showNotification('Monsters Created');
    console.log('triggered send monster info ');
  };

  const clearMonsterInfo = () => {
    let clearValue = [];
    socket.emit('clearMonsterInfo', clearValue);
    showNotification('Monsters Cleared');
  };

  const clearPlayerPosition = () => {
    let clearValue = [];
    socket.emit('clearPlayerPosition', clearValue);
    showNotification('Players Cleared From Combat');
  };

  const sendCombatMap = (map) => {
    socket.emit('sendCombatMap', map);
  };

  const updateBattleGroup = (updatedGroup) => {
    socket.emit('updateBattleGroup', updatedGroup)
    console.log("this is sending updated group" + JSON.stringify(updatedGroup))
  }

  const updateKillFeed = (newData, newBattleGroup) => {
    socket.emit('updateKillFeed', newData, newBattleGroup)
    console.log("killFeed sent")
  }

  // const bigLogoutFunction  = () => {
  //   socket.emit('logout', name)
  //   localStorage.removeItem("stats")
  //   localStorage.removeItem("partyStats")
  //   localStorage.removeItem("map")
  //   localStorage.removeItem("npcArray")
  //   localStorage.removeItem("npcNotes")
  //   localStorage.removeItem("messages")
  //   localStorage.removeItem("partyPosition")
  //   localStorage.removeItem("users")
  //   localStorage.removeItem("monsterData")

  //   (console.log('logout triggered'))
  // }

  // ^^^ just pretend it never happened

  const notificationAudio = (src) => {
    const sound = new Howl({
      src,
    });
    sound.play();
  };

  const clearError = () => {
    setError(null);
  };

  const closeModal = () => {
    setShowModal(false);
    setExitModal(false);
  };

  const showNotification = (notification) => {
    setAlert(notification);

    setNotificationModal(true);
    setTimeout(() => {
      setAlert('');
      setNotificationModal(false);
    }, 2000);
  };

  const showSomething = () => {
    setShowModal(!showModal);
  };

  const showLogoutWarning = () => [setExitModal(!exitModal)];

  const displayTest = () => {
    console.log(partyData, users);
  };

  const helpTopicHandler = (t) => {
    setTopic(t);
  };

  return (
    <div className="outerContainer">
      <ErrorModal
        error={error}
        onClear={clearError}
        modalStyle="skinny-modal"
      />
      <Modal
        show={showModal === true}
        children={<Help helpTopicHandler={helpTopicHandler} />}
        onCancel={closeModal}
        header={<p>{topic}</p>}
      />
      <Modal
        modalStyle="skinny-modal"
        show={exitModal === true}
        onCancel={closeModal}
        header={<p>ARE YOU SURE YOU WANT TO LEAVE?</p>}
        children={<Exit closeModal={closeModal} />}
      />
      <NotificationModal
        show={notificationModal === true}
        header={<p>{alert}</p>}
      />
      <div className="background_cover">
        <img src={Background} alt="failed to load" />
      </div>

      {!error && (
        <SideBar
        updateKillFeed={updateKillFeed}
        updateBattleGroup={updateBattleGroup}
        setBattleGroup={setBattleGroup}
        battleGroup={battleGroup}
          notes={notes}
          stupidHack={stupidHack}
          sendMonsterInfo={sendMonsterInfo}
          monsterData={monsterData}
          setRecipients={setRecipients}
          recipients={recipients}
          messages={messages}
          users={users}
          sendMapData={sendMapData}
          sendNPCData={sendNPCData}
          map={map}
          npcArray={npcArray}
          deleteNPCData={deleteNPCData}
          sendNPCNote={sendNPCNote}
          sendPlayerRoll={sendPlayerRoll}
          setStats={setStats}
          sendPlayerData={sendPlayerData}
          name={name}
          stats={stats}
          setMessage={setMessage}
          sendPlayerMessage={sendPlayerMessage}
          message={message}
          unreadMessages={unreadMessages}
          setUnreadMessages={setUnreadMessages}
          showLogoutWarning={showLogoutWarning}
          unseenMap={unseenMap}
          setUnseenMap={setUnseenMap}
          unseenNPC={unseenNPC}
          setUnseenNPC={setUnseenNPC}
          setUserXPosition={setUserXPosition}
          setUserYPosition={setUserYPosition}
          userXPosition={userXPosition}
          userYPosition={userYPosition}
          sendPlayerPosition={sendPlayerPosition}
          partyPosition={partyPosition}
          notePost={notePost}
          setNotePost={setNotePost}
          // npcNotes={npcNotes}
          showSomething={showSomething}
          showModal={showModal}
          role={role}
          clearMonsterInfo={clearMonsterInfo}
          clearPlayerPosition={clearPlayerPosition}
          exitModal={exitModal}
          sendCombatMap={sendCombatMap}
          combatMap={combatMap}
          showNotification={showNotification}
          partyData={partyData}
          partyRolls={partyRolls}
        />
      )}

      {/* <button onClick={displayTest}>Click to check map state</button> */}

      <div className="playersContainer">
        {users &&
          users
            .filter((user) => user.role !== 'dm')
            .map((user) => (
              <Character
                key={user.id}
                name={user.name}
                individualRole={partyRolls[user.name]}
                partyData={partyData}
                stats={stats}
              />
            ))}
        {/* {users && users.map((user) => <Character key={user.id} name = {user.name}  individualRole={partyRolls[user.name]} partyData={partyData} stats={stats}/>)} */}
      </div>

      {/* <div className='controlBox'>

        <InputBar
        // playerData={playerData}
        name={name} 
        sendPlayerData={sendPlayerData}
        sendPlayerRoll={sendPlayerRoll}
        setStats={setStats}
        stats={stats}
        />
      </div> */}
    </div>
  );
};

export default Play;
