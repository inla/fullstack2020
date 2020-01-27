import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(Array(props.anecdotes.length).fill(0))

    const Random = () => {
        setSelected(Math.floor(Math.random() * Math.floor(props.anecdotes.length)))
    }

    const vote = (anecdote) => {
        const copy = [...points]
        copy[anecdote] += 1
        setPoints(copy)
        // console.log(selected)
    }

    return (
        <div>
            <Header text="Anecdote of the day:" />
            {props.anecdotes[selected]}
            <br />
            <p>has {points[selected]} votes</p>
            <Button handleClick={() => vote(selected)} text='vote' />
            <Button handleClick={() => Random()} text='next anecdote' />
            <Header text="Anecdote with most votes:" />
            {props.anecdotes[points.indexOf(Math.max(...points))]}
            <p>has {Math.max(...points)} votes</p>
        </div>
    )
}

const Header = ({ text }) => <h2>{text}</h2>

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)