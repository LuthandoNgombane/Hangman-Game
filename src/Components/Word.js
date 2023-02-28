import React from "react";

const Word = ({ selectedWord, correctLetters }) => {
  return (
    <div className="word">
      <h3>Word:</h3>
      {/* returns a span of each letter entered thats correct using .map method that was specified in the task description
      if correct letter is typed it will return that letter in the word, otherwise no */}
      {selectedWord.split("").map((letter, index) => {
        return (
          <span className="letter" key={index}>
            {correctLetters.includes(letter) ? letter : ""}
          </span>
        );
      })}
    </div>
  );
};

export default Word;
