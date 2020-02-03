import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/course'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          //exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return (
    <>
      <h1>Web development curriculum</h1>
          {courses.map(course =>
          <Course key={course.id} course={course} />
          )}
    </>
  )
}

// const Header = (props) => {
//     return (
//         <h1>{props.course}</h1>
//     )
// }

// const Content = (props) => {
//     console.log(props)
//     return (
//       <div>
//         <Part p={props.part1} e={props.exercises1} />
//         <Part p={props.part2} e={props.ex2} />
//         <Part p={props.part3} e={props.ex3} />
//       </div>
//     )
// }

// const Part = props => {
//     return (
//         <>
//             <p>
//             {props.p} {props.e}
//             </p>
//         </>
//     )
// }

// const Total = (props) => {
//     return (
//       <div>
//         <p>Number of exercises {props.sum}</p>
//       </div>
//     )
// }

ReactDOM.render(<App />, document.getElementById('root'))