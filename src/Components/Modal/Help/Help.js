import React, { useState, useEffect } from 'react';
import './Help.css';
import { ImArrowRight } from 'react-icons/im';

const Help = ({helpTopicHandler}) => {
  const [helpState, setHelpState] = useState('Update Character Stats');

  useEffect(() => {
    helpTopicHandler(helpState)

  },[helpState])

  return (
    <div className="help-container">
      <div className="help-topic-wrapper">
        {helpState === 'Posting Character Stats' && (
          <div className="character-help-wrapper">
            <div style={{ height: '12rem', width: '12rem' }}>
              <p className="help-text-tutorial">
                While in a "Player" role, the first thing you will need to do is
                click the character tab on the far right navigation bar. You
                will not be able to be included in combat or display dice rolls
                until this is done.{' '}
              </p>
            </div>
            <div className="helpImage_wrapperS">
              <img
                src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1642014266/Dungeons%20and%20Dragons/4603AB03-E6E2-47A7-8AB6-208D3AE2139A_4_5005_c_g8ea98.jpg"
                alt=""
              />
              <div className="help-highlight" style={{height: "3rem", width: "3rem", top: "4.4rem", right: "0rem"  }}></div>
            </div>
            <ImArrowRight className="next_arrow" />
            <div style={{ height: '12rem', width: '12rem' }}>
              <p className="help-text-tutorial">
                The tab will open to show your character sheet where you can
                enter stats necessary for the Dungeon Master to see as well as a
                place for a link to your character portrait
              </p>
            </div>

            <div
              className="helpImage_wrapperS"
              style={{ height: '30rem', width: '20rem' }}
            >
              <img
                src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1642014267/Dungeons%20and%20Dragons/E8BEDDAA-6EB5-4BB0-B56A-73F1B6EBB140_asixlf.jpg"
                alt=""
              />
              <div className="help-highlight" style={{height: "18rem", width: "10rem", top: "6.4rem", right: "2.5rem"  }}></div>
            </div>
            <ImArrowRight className="next_arrow" />

            <div style={{ height: 'auto', width: '12rem' }}>
              <p className="help-text-tutorial">
                Under the "portrait url" input you will paste a link to an image
                of your character. You can right click any image on the web and
                click "copy image location". Then just paste in the character
                sheet "Portrait" input. If you have an image saved on social
                media or any hosting website you can go there and use this same
                method. A preview image will appear at the top of the character
                sheet if the pasted link works. Click "Update Stats" to finalize your changes.
              </p>
            </div>

            <div
              className="helpImage_wrapperS"
              style={{ height: '30rem', width: '17rem' }}
            >
              <img
                src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1642014267/Dungeons%20and%20Dragons/162EB787-74FA-4E04-9D96-14ECC4860720_mxdlug.jpg"
                alt=""
              />
              <div className="help-highlight" style={{height: "8rem", width: "11rem", top: ".8rem", right: "1.6rem"  }}></div>
              <div className="help-highlight" style={{height: "2.8rem", width: "10rem", top: "21.9rem", right: "2.5rem"  }}></div>
              <div className="help-highlight" style={{height: "2.2rem", width: "8rem", top: "26.3rem", right: "2.8rem"  }}></div>
            </div>
          </div>
        )}

        {helpState === 'Navigation' && (
          <div className="character-help-wrapper">
            <div style={{ height: 'auto', width: '12rem' }}>
              <p className="help-text-tutorial">
                If in the "Player" role, all navigation buttons will be
                available upon entering the room besides the "Combat" button.
                Once character stats and portrait are entered, all buttons will
                be available. As the "DM" role, all will be available
                immediately.
              </p>
            </div>
            <div
              className="helpImage_wrapperS"
              style={{ width: '30rem', height: '15rem' }}
            >
              <img
                src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1642017836/Dungeons%20and%20Dragons/CEC55CB9-8BE8-4448-BEBA-06C0F594C0E3_1_105_c_qfbuhl.jpg"
                alt=""
              />
              <div className="help-highlight" style={{height: "14.5rem", width: "1rem", top: "0rem", right: "0rem"  }}></div>
            </div>
            <ImArrowRight className="next_arrow" />

            <div className="nav-icon-tutorial-wrapper">
              <div className="icon-tutorial-box">
                <div className="icon-tutorial-image-wrapper">
                  <img
                    alt="Messaging"
                    src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1642017836/Dungeons%20and%20Dragons/B2DDD4CB-F579-4CB0-AF92-14425348D07D_4_5005_c_tndcgf.jpg"
                  />
                </div>
                <p>
                  This leads to the messaging screen where you can privately
                  message other players or the DM. This helps DM's provide
                  information to characters only they would know.
                </p>
              </div>

              <div className="icon-tutorial-box">
                <div className="icon-tutorial-image-wrapper">
                  <img
                    alt="Messaging"
                    src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1642017836/Dungeons%20and%20Dragons/A5B04551-C709-4D72-B201-5FD13E84322E_4_5005_c_ylnpgg.jpg"
                  />
                </div>
                <p>
                  This leads to where the current world map is displayed, as
                  provided by the Dungeon Master.
                </p>
              </div>

              <div className="icon-tutorial-box">
                <div className="icon-tutorial-image-wrapper">
                  <img
                    alt="Messaging"
                    src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1642017836/Dungeons%20and%20Dragons/6E77E9F7-4FC3-42CD-8122-17F6F4BE48A4_4_5005_c_oiwykr.jpg"
                  />
                </div>
                <p>
                  This tab leads to the current combat map provided by the
                  Dungeon Master. More can be learned about combat my clicking
                  the "COMBAT" button on bottom of this help screen.
                </p>
              </div>

              <div className="icon-tutorial-box">
                <div className="icon-tutorial-image-wrapper">
                  <img
                    alt="Messaging"
                    src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1642017836/Dungeons%20and%20Dragons/9E8A8F20-5A8D-417B-A45B-942E7090E181_4_5005_c_gszy5t.jpg"
                  />
                </div>
                <p>
                  This tab is where information about NPCs of the game is
                  listed. Learn more about NPCs by clicking the "NPC" button on
                  the bottom of this help screen.
                </p>
              </div>

              <div className="icon-tutorial-box">
                <div className="icon-tutorial-image-wrapper">
                  <img
                    alt="Messaging"
                    src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1642017836/Dungeons%20and%20Dragons/1B3FA5B3-083E-459D-9A94-DC5AA03EC9CD_4_5005_c_hiuha7.jpg"
                  />
                </div>
                <p>
                  This is the tab where Players and Dungeon Master will both
                  make out of combat dice rolls. To learn more about dice rolls
                  click the "DICE" button at the bottom of this help screen.
                </p>
              </div>

              <div className="icon-tutorial-box">
                <div className="icon-tutorial-image-wrapper">
                  <img
                    alt="Messaging"
                    src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1642017836/Dungeons%20and%20Dragons/72B0FBB8-3DB1-4C67-9670-C0D512DE1B3D_4_5005_c_vkxphf.jpg"
                  />
                </div>
                <p>
                  This is where players will go to update their character stats
                  and portrait. This tab is not available for the Dungeon
                  Master. To learn more about posting stats click the "POSTING
                  CHARACTER STATS" button at the bottom of this help screen.
                </p>
              </div>

              <div className="icon-tutorial-box">
                <div className="icon-tutorial-image-wrapper">
                  <img
                    alt="Messaging"
                    src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1642017836/Dungeons%20and%20Dragons/F2414393-794E-471B-AFB1-4E5402AB8239_4_5005_c_x1xkoz.jpg"
                  />
                </div>
                <p>
                  This is where the Dungeon Master will post maps and NPCs. This
                  tab is not available for Players. to learn more click the
                  "POSTING MAPS BUTTON" at the bottom of this help screen.{' '}
                </p>
              </div>

              <div className="icon-tutorial-box">
                <div className="icon-tutorial-image-wrapper">
                  <img
                    alt="Messaging"
                    src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1642017836/Dungeons%20and%20Dragons/1FFE4EDD-83CD-459D-B9A6-BF8C0C10DE0A_4_5005_c_dlt5a0.jpg"
                  />
                </div>
                <p>This tab leads to the help screen you are on currently.</p>
              </div>

              <div className="icon-tutorial-box">
                <div className="icon-tutorial-image-wrapper">
                  <img
                    alt="Messaging"
                    src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1642017836/Dungeons%20and%20Dragons/0BCDBFAD-FB01-4009-94CB-C601027C5327_4_5005_c_j3gpx4.jpg"
                  />
                </div>
                <p>
                  This tab will give you the option to log out and leave the
                  game.{' '}
                </p>
              </div>
            </div>
          </div>
        )}

        {helpState === 'Dice Rolls' && (
          <div className="character-help-wrapper">
            <div style={{ height: 'auto', width: '12rem' }}>
              <p className="help-text-tutorial">
                Dice rolls can be made under the dice tab on the right hand side
                of the screen. You first choose which kind of dice to roll
                (d4-d20) and then how many of those dice (up to 6). Each
                individual dice as well as the total will be displayed. If your
                are in the "Player" roll this will also be displayed on your
                character sheet.
              </p>
            </div>
            <div
              className="helpImage_wrapperS"
              style={{ height: '20rem', width: '28rem' }}
            >
              <img
                src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1642014267/Dungeons%20and%20Dragons/5E2BFB96-AA92-412B-BB2F-31DF264430FA_1_105_c_eaqhjp.jpg"
                alt=""
              />
               <div className="help-highlight" style={{height: "2.8rem", width: "10rem", top: "9.4rem", right: ".5rem"  }}></div>
              <div className="help-highlight" style={{height: "4.2rem", width: "8rem", top: "15.3rem", right: "1.4rem"  }}></div>
            </div>
            <ImArrowRight className="next_arrow" />
            <div style={{ height: 'auto', width: '12rem' }}>
              <p className="help-text-tutorial">
                As a "Player" or "Dungeon Master" role, you can make combat
                rolls from within the combat screen the exact same way.
              </p>
            </div>

            <div
              className="helpImage_wrapperS"
              style={{ height: '100%', width: '17rem' }}
            >
              <img
                src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1642021348/Dungeons%20and%20Dragons/2A42E32A-F3D0-4BD4-BA07-1335BF44B79A_pcbbbq.jpg"
                alt=""
              />
               <div className="help-highlight" style={{height: "15.2rem", width: "13rem", top: "19.3rem", right: "2.5rem"  }}></div>
            </div>
            <ImArrowRight className="next_arrow" />

            <div style={{ height: 'auto', width: '12rem' }}>
              <p className="help-text-tutorial">
                So the battle tab doesn't have to be constantly toggled, all
                Player rolls are displayed on the far left hand side of the
                battle screen under their respective character portrait.
              </p>
            </div>

            <div
              className="helpImage_wrapperS"
              style={{ height: '100%', width: '16rem' }}
            >
              <img
                src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1642014267/Dungeons%20and%20Dragons/14840E36-DA6C-4F9A-A7FF-BD677F816CBD_4_5005_c_mxrkwg.jpg"
                alt=""
              />
                 <div className="help-highlight" style={{height: "1.6rem", width: "4.5rem", top: "15.2rem", left: "0rem"  }}></div>
            </div>
          </div>
        )}

        {helpState === 'Messaging' && (
          <div className="character-help-wrapper">
            <div style={{ height: 'auto', width: '12rem' }}>
              <p className="help-text-tutorial">
                Messages can be sent between any number of players and the
                Dungeon Master. These messages are private and will only be sent
                to the recipients you select. When you recieve a new message you
                will have a red notification appear on the messages tab.
              </p>
            </div>
            <div
              className="helpImage_wrapperS"
              style={{ height: '100%', width: '26rem' }}
            >
              <img
                src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1642014267/Dungeons%20and%20Dragons/73E71094-3A79-41C3-AAF2-57B781F69920_ey7yuc.jpg"
                alt=""
              />
              <div className="help-highlight" style={{height: "4.3rem", width: "12rem", top: "5.4rem", right: "1.8rem"  }}></div>
              <div className="help-highlight" style={{height: "1.7rem", width: "1.8rem", top: ".6rem", right: "0rem"  }}></div>
            </div>
            <ImArrowRight className="next_arrow" />
            <div style={{ height: 'auto', width: '12rem' }}>
              <p className="help-text-tutorial">
                Before you can send a message you must select which players (or
                Dungeon Master) the message will be sending to. Any number of
                recipients may be selected.
              </p>
            </div>

            <div
              className="helpImage_wrapperS"
              style={{ height: '100%', width: '20rem' }}
            >
              <img
                src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1642014267/Dungeons%20and%20Dragons/1A1B656A-968E-4AA2-B6BD-93E191BE9B16_xoafet.jpg"
                alt=""
              />
              <div className="help-highlight" style={{height: "10.3rem", width: "12rem", top:"0rem", right: "1.8rem"  }}></div>
            </div>
          </div>
        )}

        {helpState === 'Player Combat' && (
          <div className="character-help-wrapper">
            <div style={{ height: 'auto', width: '12rem' }}>
              <p className="help-text-tutorial">
                The combat screen shows the current combat map, and lets the
                players and Dungeon Master move icons of their characters around
                on it. It also provides an area for dice rolls, toggling the
                size of your miniature on the map, as well as dice roll
                displays.
              </p>
            </div>
            <div
              className="helpImage_wrapperS"
              style={{ height: '100%', width: '16rem' }}
            >
              <img
                src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1642021348/Dungeons%20and%20Dragons/2A42E32A-F3D0-4BD4-BA07-1335BF44B79A_pcbbbq.jpg"
                alt=""
              />
              <div className="help-highlight" style={{height: "15.2rem", width: "12rem", bottom:"0rem", right: "2.4rem"  }}></div>
              <div className="help-highlight" style={{height: "2.2rem", width: "12rem", bottom:"15.3rem", right: "2.4rem"  }}></div>
              <div className="help-highlight" style={{height: "2.2rem", width: "12rem", bottom:"20.5rem", right: "2.4rem"  }}></div>
            </div>
            <ImArrowRight className="next_arrow" />
            <div style={{ height: 'auto', width: '12rem' }}>
              <p className="help-text-tutorial">
                Your character icon will start out on the top left of the battle
                map at the beginning of a fight. To move it, just click the
                location where you want to move and the icon will follow. You
                MUST click "Confirm Movement" after moving your icon or toggling
                its size (between small medium and large) for the effects to be
                permanent and obervable by the rest of the players.
              </p>
            </div>

            <div
              className="helpImage_wrapperS"
              style={{ height: '20rem', width: '30rem' }}
            >
              <img
                src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1642014268/Dungeons%20and%20Dragons/93140461-38DA-4BDF-9499-ACFA9F8D8BFC_1_105_c_zgofyq.jpg"
                alt=""
              />
              <div className="help-highlight" style={{height: "1rem", width: "1rem", top:"4.8rem", right: "24.2em"  }}></div>
            </div>
            <ImArrowRight className="next_arrow" />
            <div style={{ height: 'auto', width: '12rem' }}>
              <p className="help-text-tutorial">
                Each player's dice rolls will be displayed under their
                respective character portrait on the far left hand side of the
                battle map. These icons can be dragged and dropped into order of
                initiative to keep combat smooth and quick.
              </p>
            </div>

            <div
              className="helpImage_wrapperS"
              style={{ height: '100%', width: '15rem' }}
            >
              <img
                src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1642014267/Dungeons%20and%20Dragons/14840E36-DA6C-4F9A-A7FF-BD677F816CBD_4_5005_c_mxrkwg.jpg"
                alt=""
              />
              <div className="help-highlight" style={{height: "8.3rem", width: "4rem", top:"8.3rem", left: "0rem"  }}></div>
            </div>
          </div>
        )}

        {helpState === 'Posting Maps/NPCs' && (
          <div className="character-help-wrapper">
            <div style={{ height: 'auto', width: '12rem' }}>
              <p className="help-text-tutorial">
                If playing the Dungeon Master, you should keep the game
                organized and easier to imagine by providing world maps, combat
                grids and npc portraits for your players when you can. This
                screen is accessable by clicking the "Post Info" icon on the far
                right side of the screen.
              </p>
            </div>
            <div
              className="helpImage_wrapperS"
              style={{ height: '16rem', width: '21rem' }}
            >
              <img
                src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1642014267/Dungeons%20and%20Dragons/1D8059F5-B8F3-4B79-BF13-BBB9BCF4A42D_v36dag.jpg"
                alt=""
              />
              <div className="help-highlight" style={{height: "8rem", width: "8.3rem", top:"0rem", right: "11.6rem"  }}></div>
              <div className="help-highlight" style={{height: "8rem", width: "8.8rem", top:"0rem", right: "2rem"  }}></div>
              <div className="help-highlight" style={{height: "1.5rem", width: "1.5rem", top:"14rem", right: "0rem"  }}></div>
            </div>
            <ImArrowRight className="next_arrow" />
            <div style={{ height: 'auto', width: '12rem' }}>
              <p className="help-text-tutorial">
                Right click any map online and click "copy image location" to
                get the link for your map. If you have custom maps of your own
                you can still do this by posting them on social media or a host
                of some kind and follow the same procedure. Click "Set Map" or
                "Set Combat Map" to make these maps available to players.
              </p>
            </div>

            <div
              className="helpImage_wrapperS"
              style={{ height: '20rem', width: '15rem' }}
            >
              <img
                src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1642014267/Dungeons%20and%20Dragons/00540FC4-4444-4A0C-ADB2-EBC3B84CF15D_hbza7c.jpg"
                alt=""
              />
              <div className="help-highlight" style={{height: "2.5rem", width: "10rem", top:"0rem", right: "3.5rem"  }}></div>
              <div className="help-highlight" style={{height: "2.5rem", width: "10rem", top:"6rem", right: "3.5rem"  }}></div>
            </div>
            <ImArrowRight className="next_arrow" />
            <div style={{ height: 'auto', width: '12rem' }}>
              <p className="help-text-tutorial">
                To post an NPC use the same copy image location method as with
                the maps. Also give the NPC a name before clicking "Create NPC"
                to make it available to the players. If your posts were
                successful you should have a notification at the top of the
                screen.
              </p>
            </div>

            <div
              className="helpImage_wrapperS"
              style={{ height: '16rem', width: '20rem' }}
            >
              <img
                src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1642014266/Dungeons%20and%20Dragons/B19E13FE-F93C-45D0-BA45-2167A776F393_vwdtpj.jpg"
                alt=""
              />
                   <div className="help-highlight" style={{height: "9rem", width: "9.5rem", top:"2rem", left: "0rem"  }}></div>
            </div>
          </div>
        )}

        {helpState === 'NPC' && (
          <div className="character-help-wrapper">
            <div style={{ height: 'auto', width: '12rem' }}>
              <p className="help-text-tutorial">
                To access NPCs the Dungeon Master has posted click the NPCs tab
                on the far right hand side of the screen. Each NPC will be
                individually listed with several options. The Dungeon Master OR
                Players may write notes about the NPC by hitting the "Notes"
                button and entering their note in the input box. Do finalize
                your note click "Post Note". The Dungeon Master also has a
                delete option to get rid of that NPC. To scroll right or left
                through NPC's click the arrows to the sides of the display.
              </p>
            </div>
            <div
              className="helpImage_wrapperS"
              style={{ height: '100%', width: '68rem' }}
            >
              <img
                src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1642014267/Dungeons%20and%20Dragons/9FAB1F42-E838-4D93-9CEE-7A665D2F954C_1_105_c_juzp1g.jpg"
                alt=""
              />
                <div className="help-highlight" style={{height: "2.5rem", width: "2.5rem", top:"9.4rem", right: "0rem"  }}></div>
                <div className="help-highlight" style={{height: "4.5rem", width: "4.5rem", top:"15rem", right: "14rem"  }}></div>
                <div className="help-highlight" style={{height: "4.5rem", width: "4.5rem", top:"15rem", left: ".2rem"  }}></div>
                <div className="help-highlight" style={{height: "3rem", width: "10.5rem", top:"23.7rem", left: "21.7rem"  }}></div>
                <div className="help-highlight" style={{height: "6rem", width: "13.5rem", top:"18.7rem", left: "35.5rem"  }}></div>
            </div>
          </div>
        )}




        {helpState === 'DM Combat' && (
          <div className="character-help-wrapper" style={{overflow: "scroll", flexWrap: "wrap"}}>
            <div style={{ height: 'auto', width: '12rem' }}>
              <p className="help-text-tutorial">
                Combat for the Dungeon Master has a few more steps. First you must post a battle map under the "Post Info" tab. This map should have a grid as to keep track of exact character and creature positions. Next, under the battle tab click the "Unit Count" dropdown and click how many creatures you want to put onto the map. 
              </p>
            </div>
            <div
              className="helpImage_wrapperS"
              style={{ height: '30rem', width: '21rem' , marginBottom: "2rem"}}
            >
              <img
                src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1642014268/Dungeons%20and%20Dragons/A4FCF78D-FA63-4DB7-B4A0-6970762E3594_fntli0.jpg"
                alt=""
              />
                  <div className="help-highlight" style={{height: "3.2rem", width: "20rem", top:"0rem", right: ".3rem"  }}></div>
                  <div className="help-highlight" style={{height: "3.2rem", width: "20rem", top:"14rem", right: ".3rem"  }}></div>
            </div>

            <ImArrowRight className="next_arrow" />

            <div style={{ height: 'auto', width: '12rem' }}>
              <p className="help-text-tutorial">
                Once you have a number of creatures, a second dropdown called "Monster Icons" will appear under the "Unit Count" dropdown. Here you will select the size of the monster (small medium or large) which will be reliant on how large the grid of your battle map is. Here you will also paste a link to an image of the monster. Right click any image on the web and select "copy image loacation" to get this link. Once all creatures have a set size and portrait click "Create My Minions!".
              </p>
            </div>
            <div
              className="helpImage_wrapperS"
              style={{ height: '30rem', width: '21rem' , marginBottom: "2rem"}}
            >
              <img
                src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1642014268/Dungeons%20and%20Dragons/B0535298-22FB-47D8-AC4A-313BD992B7B2_z6d4cq.jpg"
                alt=""
              />
              <div className="help-highlight" style={{height: "13.2rem", width: "15rem", top:"4rem", right: "1.8rem"  }}></div>
              <div className="help-highlight" style={{height: "3rem", width: "15rem", top:"23rem", right: "1.8rem"  }}></div>
            </div>
            <ImArrowRight className="next_arrow" />
            <div style={{ height: 'auto', width: '12rem' }}>
              <p className="help-text-tutorial">
                Once your creatures are created their map icons will all start out on the top left of the screen. In order to move them to the desired location on the map, click "Select" on the particular creature you want to move on the right hand side of the screen. Then once selected, click a location on the map for it to move to.
              </p>
            </div>

            <div
              className="helpImage_wrapperS"
              style={{ height: '30rem', width: '21rem', marginBottom: "2rem" }}
            >
              <img
                src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1642014268/Dungeons%20and%20Dragons/ACACAB34-7C3D-434D-BC7D-58631821E4F6_qrp18q.jpg"
                alt=""
              />
              <div className="help-highlight" style={{height: "3rem", width: "15.5rem", top:"6.3rem", right: "2.8rem"  }}></div>
              <div className="help-highlight" style={{height: "3rem", width: "15.5rem", top:"15.4rem", right: "2.8rem"  }}></div>
            </div>
            <ImArrowRight className="next_arrow" />
            <div style={{ height: 'auto', width: '12rem' }}>
              <p className="help-text-tutorial">
                The movement of all of these creatures are not final until you have hit the "Confirm Movement Button on the far right hand of the screen under your list of creatures. "
              </p>
            </div>

            <div
              className="helpImage_wrapperS"
              style={{ height: '30rem', width: '40rem' , marginBottom: "2rem"}}
            >
              <img
                src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1642014268/Dungeons%20and%20Dragons/CF3EB83F-2395-416C-8162-978D89DA4388_4_5005_c_v2xumx.jpg"
                alt=""
              />
              <div className="help-highlight" style={{height: "3rem", width: "3.5rem", top:"16.9rem", right: "3.4rem"  }}></div>
            </div>

            <ImArrowRight className="next_arrow" />
            <div style={{ height: 'auto', width: '12rem' }}>
              <p className="help-text-tutorial">
                By clicking the red box next to a monster, that monster's icon will change to a skull, showing the players it has been defeated. You MUST click confirm movement after doing this for it to display to other players. 
              </p>
            </div>

            <div
              className="helpImage_wrapperS"
              style={{ height: '20rem', width: '20rem' , marginBottom: "2rem"}}
            >
              <img
                src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1642014268/Dungeons%20and%20Dragons/FD56FC09-022B-49D0-959F-D26A6A20EAAA_4_5005_c_omha6t.jpg"
                alt=""
              />
                <div className="help-highlight" style={{height: "4.3rem", width: "4.3rem", top:"4.3rem", right: "7.3rem"  }}></div>
            </div>

            <ImArrowRight className="next_arrow" />
            <div style={{ height: 'auto', width: '12rem' }}>
              <p className="help-text-tutorial">
                To keep track of turn order, the player portraits on the left hand side can be dragged and dropped into any order that you please. These portraits also display the player dice rolls for easy access.
              </p>
            </div>

            <div
              className="helpImage_wrapperS"
              style={{ height: '30rem', width: '15rem', marginBottom: "2rem" }}
            >
              <img
                src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1642014267/Dungeons%20and%20Dragons/14840E36-DA6C-4F9A-A7FF-BD677F816CBD_4_5005_c_mxrkwg.jpg"
                alt=""
              />
              <div className="help-highlight" style={{height: "7.7rem", width: "4.3rem", top:"6.6rem", left: "0rem"  }}></div>
            </div>















          </div>
        )}
      </div>
      <div className="help-footer">
        <p onClick={() => setHelpState('Posting Character Stats')}>POSTING CHARACTER STATS</p>
        <p onClick={() => setHelpState('Navigation')}>NAVIGATION</p>
        <p onClick={() => setHelpState('Dice Rolls')}>DICE</p>
        <p onClick={() => setHelpState('Messaging')}>MESSAGING</p>
        <p onClick={() => setHelpState('Player Combat')}>PLAYER COMBAT</p>
        <p onClick={() => setHelpState('DM Combat')}>DM COMBAT</p>
        <p onClick={() => setHelpState('Posting Maps/NPCs')}>POSTING MAPS/NPCS</p>
        <p onClick={() => setHelpState('NPC')}>NPC</p>
      </div>
    </div>
  );
};

export default Help;
