import React from "react";

// this functional component displays the wrong letters guessed by the user
const WrongLetters = ({ wrongLetters }) => {
return (
// container div for the wrong letters section
<div className="wrong-letters-container">
<div>
{/* if there are wrong letters, display the "Wrong Letters" header /}
{wrongLetters.length > 0 ? <p>Wrong Letters:</p> : null}
{/ map through the wrong letters and display each one */}
{wrongLetters
.map((letter, i) => <span key={i}>{letter}</span>)
// separate each letter with a dash
.reduce(
(prev, curr) => (prev === null ? [curr] : [prev, " - ", curr]),
null
)}
</div>
</div>
);
};

// export the WrongLetters component
export default WrongLetters;
