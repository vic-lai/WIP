const Course = ({course}) => {
    const names = course.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)
    const sum = course.parts.reduce((sum, parts)=> sum + parts.exercises, 0)

    return (
        <>
            <h2>{course.name}</h2>      
            {names}
            <h4>total of {sum} exercises</h4>
        </>
    )
}

export default Course