import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

interface TrainingSessionChartPropsType {
  options: Highcharts.Options
}

const TrainingSessionChart = (props: TrainingSessionChartPropsType) => {
  const { options } = props
  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default TrainingSessionChart
