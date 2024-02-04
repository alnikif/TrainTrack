import React from 'react'

import Layout from '../components/Layout/Layout'

import '../globals.css'

const HomePage: React.FC = () => {
  const options = {
    chart: {
      type: 'bar',
    },
    title: {
      text: 'My Highcharts Bar Chart',
    },
    series: [
      {
        data: [1, 2, 3, 4, 5],
      },
    ],
  }
  return (
    <div>
      <Layout />
      {/*<HighchartsReact highcharts={Highcharts} options={options} />*/}
    </div>
  )
}

export default HomePage
