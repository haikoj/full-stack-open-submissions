const Total = (props) => {
    const total = 
        props.course.parts.reduce((s, p) => s + p.exercises, 0)

        return <p><strong>Number of exercises {total}</strong></p>
}

export default Total