import React from 'react'

const Course = ({ course }) => {

    const Header = () => {
        return (
            <>
                <h2>{course.name}</h2>
            </>
        )
    }

    const Content = () => {

        return (
            <>
                {course.parts.map(part =>
                    <Part key={part.id} id={part.id} name={part.name} exercises={part.exercises} />
                )}
            </>
        )
    }

    const Part = (props) => {
        return (
            <>
                <p key={props.id}> {props.name} {props.exercises}
                </p>
            </>)
    }

    const Total = () => {
        const total = course.parts.map(part =>
            part.exercises).reduce( (accumulator, currentValue) => accumulator + currentValue)

        return (
            <>
                total of {total} exercises
            </>
        )
    }

    return (
        <>
            <Header />
            <Content />
            <Total />
        </>
    )
}

export default Course