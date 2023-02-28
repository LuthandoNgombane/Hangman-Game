import React, { useEffect } from "react";

function checkWin(correct, wrong, word) {
  let status = "win";

  // removes win status if the correct words array doesnt include all correct letters
  word.split("").forEach((letter) => {
    if (!correct.includes(letter)) {
      status = "";
    }
  });

  // returns a lose status if we make 11 mistakes (word are indexes from 0 that's why equal 10)
  if (wrong.length === 10) status = "lose";

  return status;
}

const Message = ({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
  playAgain,
}) => {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playable = true;

  //checks the outcome of the game and displays a message accordingly
  if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
    finalMessage = "The man survived";
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
    finalMessage = "The man took his last breath";
    finalMessageRevealWord = `You haven't guessed: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });

  return (
    <div className="row card-panel teal lighten-2">
      <div className="s4">
        <h4 class="blue-text text-darken-2">{finalMessage}</h4>
        <h5 class="blue-text text-darken-2">{finalMessageRevealWord}</h5>
        <button className='waves-effect waves-light btn-small red' onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
};

export default Message;
