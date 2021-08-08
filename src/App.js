import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🚗": "car",
  "🚓": "police car",
  "🚕": "taxi",
  "🛺": "auto rickshaw",
  "🚙": "sport utility vehicle",
  "🚌": "bus",
  "🚐": "minibus",
  "🚎": "trolley bus",
  "🚑": "ambulance",
  "🚒": "fire engine",
  "🚚": "delivery van",
  "🚛": "articulated lorry",
  "🚜": "tractor",
  "🏍": "motorcycle",
  "🛵": "motor scooter",
  "🛴": "kick scooter",
  "🚲": "bicycle",
  "🚡": "aerial tramway",
  "🚅": "bullet train",
  "🚂": "locomotive",
  "🛰": "satellite",
  "🚢": "ship",
  "🚁": "helicopter",
  "🚀": "rocket",
  "🛬": "aeroplane"
};

var meaningWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "sorry we do not have this in our Database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1> emoji interpreter </h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3>emojis we know</h3>
      <div className="container">
        {meaningWeKnow.map((emoji) => (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
}
