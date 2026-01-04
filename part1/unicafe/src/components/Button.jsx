const Button = (props) => {
    
    return (
    <>
    <button onClick={() => props.setGood(props.good+1)}>good</button>
    <button onClick={() => props.setNeutral(props.neutral+1)}>neutral</button>
    <button onClick={() => props.setBad(props.bad+1)}>bad</button>
    </>
    )
}

export default Button