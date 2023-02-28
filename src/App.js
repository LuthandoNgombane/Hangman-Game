
import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Deadman from "./Components/Deadman";
import WrongLetters from "./Components/WrongLetters";
import Word from "./Components/Word";
import Message from "./Components/FinalMessage";
import './App.css';
//array of available words to be guessed. Hard coded in the app
const words = ["orange", "apple", "watermelon", "carrot", "pear", "mango", "potato"];
//random word generator.
let randomWord = words[Math.floor(Math.random() * words.length)];

function App() {
  //setting the states using useState hooks
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  //the following code will execute whenever the states changes
  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        //checking if the word includes the letter that user inputs
        if (randomWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            //updating current states
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            alert("Don't enter the same letter twice");
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            alert("Don't enter the same letter twice");
          }
        }
      }
    };

    //an event listener is added to listen for user entries
    window.addEventListener("keydown", handleKeydown);

    //event listener is removed when component is unmounted
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  //function that will reset the game to the starging stage with new word
  function playAgain() {
    setPlayable(true);

    // empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    //randomly selects a word
    const random = Math.floor(Math.random() * words.length);
    randomWord = words[random];
  }
  //Hint and Help functions
  function help() {
    alert(`Guess the word by typing the letter on your keybord. Don't let the man die!`);
  }

  function hint() {
    alert(`It is either fruit or vegetable`);
  }

  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col s8">
        <Deadman wrongLetters={wrongLetters} />
        <Word selectedWord={randomWord} correctLetters={correctLetters} />
        <br></br>
        <WrongLetters wrongLetters={wrongLetters} />
        
      </div>
      
      <div className="col s4">
      <Message
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={randomWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <br></br>
      <button className="waves-effect waves-light btn-small" onClick={() => help()}>Help</button>
      <br></br>
      <button className="waves-effect waves-light btn-small" onClick={() => hint()}>Hint</button>
    </div>
    </div>
    </div>
  );
}

export default App;
