import { useState } from "react"

const Statistics = ({ goodCount, neutralCount, badCount }) => {
  const all = Number(goodCount) + Number(neutralCount) + Number(badCount);

  if (all === 0) {
    return <p>No feedback given</p>;
  }

  const average = all / 3;
  const positivePercentage = all > 0 ? `${Math.round((goodCount / all) * 100)}%` : "0%";

  return (
    <table>
      <thead>
        <tr>
          <th>Statistic</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <StatisticsLine text="Good" value={goodCount} />
        <StatisticsLine text="Neutral" value={neutralCount} />
        <StatisticsLine text="Bad" value={badCount} />
        <StatisticsLine text="All" value={all} />
        <StatisticsLine text="Average" value={average} />
        <StatisticsLine text="Positive" value={positivePercentage} />
      </tbody>
    </table>
  );
}

const Heading = ({text}) => <h2>{text}</h2>
const Button = ({handleClick, text}) => <button type="button" onClick={handleClick}>{text}</button>
const StatisticsLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const App = () => {
  const [ goodCount, setGood ] = useState(0);
  const [ neutralCount, setNeutral ] = useState(0);
  const [ badCount, setBad ] = useState(0);

  const handleGoodClick = () => setGood(goodCount + 1); 
  const handleNeutralClick = () => setNeutral(neutralCount + 1);
  const handleBadClick = () => setBad(badCount + 1); 

  return (
    <>
      <Heading text="give feedback" />
      <Button handleClick={handleGoodClick} text="good" />&nbsp;
      <Button handleClick={handleNeutralClick} text="neutral" />&nbsp;
      <Button handleClick={handleBadClick} text="bad" />
      <Heading text="statistics" />
      <Statistics goodCount={goodCount} neutralCount={neutralCount} badCount={badCount} />
    </>
  )
}

export default App