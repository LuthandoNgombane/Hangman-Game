import React from "react";
import state1 from "./images/state1.GIF";
import state2 from "./images/state2.GIF";
import state3 from "./images/state3.GIF";
import state4 from "./images/state4.GIF";
import state5 from "./images/state5.GIF";
import state6 from "./images/state6.GIF";
import state7 from "./images/state7.GIF";
import state8 from "./images/state8.GIF";
import state9 from "./images/state9.GIF";
import state10 from "./images/state10.GIF";
import state11 from "./images/state11.GIF";

//component that displays according images to number of errors. switch statement used.
const Deadman = ({ wrongLetters }) => {
  const errors = wrongLetters.length;
  const returnImage = (errors) => {
    switch (errors) {
      case 0:
        return state1;
      case 1:
        return state2;
      case 2:
        return state3;
      case 3:
        return state4;
      case 4:
        return state5;
      case 5:
        return state6;
      case 6:
        return state7;
      case 7:
        return state8;
      case 8:
        return state9;
      case 9:
        return state10;
      case 10:
        return state11;
      default:
        return null;
    }
  };
  return (
    <div className="col s6">
    <div className="card-panel pink accent-1">
      {/* depending on the number of incorrect entries a specific image wil be returned */}
      <img src={returnImage(errors)} alt="" />
    </div>
    </div>
  );
};

export default Deadman;
