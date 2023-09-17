import { useState } from 'react'

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

const DisplayVotes = ({points,selected}) => <div>has {points[selected]} votes</div>

const Quote = ({anecdotes,selected}) => {
  return (
    <div>
      <h1>Anecdote of the day<br></br></h1>
      {anecdotes[selected]}
    </div>
  )
}
const MostVotes = ({anecdotes, points}) => {
  const most = points.indexOf(Math.max(...points))
  return (
    <div>
      <h1>Anecdotes with most votes<br></br></h1>
      <p>{anecdotes[most]}</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0,0,0])

  const Votes = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
}

  return (
    <div>
        <Quote anecdotes={anecdotes} selected={selected} />
        <DisplayVotes points={points} selected={selected} />
        <Button handleClick={()=>Votes()} text="vote" />
        <Button handleClick={()=>setSelected(Math.floor(Math.random() * 8))} text="next anecdote"/>
        <MostVotes anecdotes={anecdotes} points={points} />
    </div>
  )
}

export default App