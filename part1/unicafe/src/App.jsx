import { useState } from 'react'
import Statistics from './components/Statistics'
import Button from './components/Button'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good+neutral+bad

  return (
    <>
      <h2>give feedback</h2>
      <Button good={good} neutral={neutral} bad={bad} 
      setGood={setGood} setNeutral={setNeutral} setBad={setBad}/>
      <h2>statistics</h2>
      {all ? (
      <Statistics all={all} good={good} neutral={neutral} bad={bad}/>
      ) : (
      <p>No feedback given.</p>
      )}
    </>
  )
}

export default App