import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <h2>Statistics</h2>
      <Stats text="good" amount={good} />
      <Stats text="neutral" amount={neutral} />
      <Stats text="bad" amount={bad} />
      <Stats text="all" amount={good + neutral + bad} />
      <Stats text="average" amount={(good - bad) / (good + neutral + bad) || 0} />
      <Stats text="positive" amount={((good / (good + neutral + bad)) * 100 || 0).toString() + " %"} />
    </div>
  );
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Stats = ({ text, amount }) => {
  console.log(typeof amount);
  return (
    <p>
      {text} {amount}
    </p>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
