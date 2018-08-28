import React from 'react';
import './App.css';

const SOUND_PATH = "./assets/sounds/";
const KEY_NAMES={
  A: 'boom', 
  S: 'hihat', 
  D: 'openhat',
  F: 'snare',
  G: 'tom',
  H: 'clap',
  J: 'kick',
  K: 'ride',
  L: 'tink',
}

class App extends React.Component {

  constructor(props){
    super();
    this.state = { 
      currentSoundId: ''
    };
    this.handleClickPlay = this.handleClickPlay.bind(this);
    this.playSound = this.playSound.bind(this);
  }

 playSound(){
   try{
    document.getElementById(this.state.currentSoundId).play();  }
   catch (e) {
    console.log( e.message, "hello");
  }
 }

 handleClickPlay(event){
  this.setState( { currentSoundId: event.target.children[0].id } );
 }

 render(){
  if (this.state.currentSoundId) {
    this.playSound();  
  }

  return (
    <div id="drum-machine">
      <div className="audience-bgrnd"></div>
      <div className="keys-container">
      {
        Object.keys(KEY_NAMES).map((key) => {
        return(
            <Keys1
              name={key}
              sound={KEY_NAMES[key].charAt(0).toUpperCase() + KEY_NAMES[key].substr(1)} 
              clickplayer= {this.handleClickPlay}  
              soundFile = { SOUND_PATH + KEY_NAMES[key] + ".mp3"}
              key = {key}
            />
          )
         })
       }
      </div>
    </div>
    );
  }
}

  function Keys1(props){
    return (
      <div className="key-details" id={props.soundFile} onClick={props.clickplayer}>
        {props.name}
        <audio id={props.name} src={props.soundFile} type="audio/mpeg">{props.soundFile} </audio>
        <div className="sound-name">{props.sound}</div>
      </div>
    );
    }


export default App;
