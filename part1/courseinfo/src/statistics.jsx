import { useState } from 'react'

const Feedback = () => {
  return (
    <h1>
      give feedback
    </h1>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) => {
  if(props.text=="positive") {
    return (
      <tr>
        <td>{props.text} {props.value} %</td>
      </tr>
    )
  }
  return (
    <tr>
      <td>{props.text} {props.value}</td>
    </tr>
  )
}

const Stats = ({good,neutral,bad}) => {
  const total = good + neutral + bad
  if(total==0) {
    return (
      <h4>No feedback given</h4>
    )
  }
  let average = (good - bad) / total
  let positive = good / total
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} /> 
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Feedback />
      <Button handleClick={()=> setGood(good+1)} text="good" />
      <Button handleClick={()=> setNeutral(neutral+1)} text="neutral" />
      <Button handleClick={()=> setBad(bad+1)} text="bad" />
      <h1>statistics</h1>
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App