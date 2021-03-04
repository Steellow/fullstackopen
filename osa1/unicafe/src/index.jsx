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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <>
      <StatisticLine text="good" amount={good} />
      <StatisticLine text="neutral" amount={neutral} />
      <StatisticLine text="bad" amount={bad} />
      <StatisticLine text="all" amount={good + neutral + bad} />
      <StatisticLine text="average" amount={(good - bad) / (good + neutral + bad) || 0} />
      <StatisticLine text="positive" amount={((good / (good + neutral + bad)) * 100 || 0).toString() + " %"} />
    </>
  );
};

const StatisticLine = ({ text, amount }) => {
  return (
    <p>
      {text} {amount}
    </p>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
