import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
      }

  return (
    <div>
      <Header course={course.name} />
      <Content part1={course.parts[0].name} exercises1={course.parts[0].exercises}
                part2={course.parts[1].name} ex2={course.parts[1].exercises}
                part3={course.parts[2].name} ex3={course.parts[2].exercises} />
      <Total sum={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {
    console.log(props)
    return (
      <div>
        <Part p={props.part1} e={props.exercises1} />
        <Part p={props.part2} e={props.ex2} />
        <Part p={props.part3} e={props.ex3} />
      </div>
    )
}

const Part = props => {
    return (
        <>
            <p>
            {props.p} {props.e}
            </p>
        </>
    )
}

const Total = (props) => {
    return (
      <div>
        <p>Number of exercises {props.sum}</p>
      </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))