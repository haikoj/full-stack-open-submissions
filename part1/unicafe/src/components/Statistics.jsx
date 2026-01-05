import StatisticLine from './StatisticLine'


const Statistics = (props) => {
    const average = (props.good-props.bad)/props.all
    const positive = props.good/props.all*100

    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={props.all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={`${positive} %`} />
        </tbody>
      </table>
    )
}

export default Statistics