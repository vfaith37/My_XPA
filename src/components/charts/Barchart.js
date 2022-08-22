import React from 'react'
import {Bar} from 'react-chartjs-2'
import{Chart as ChartJS} from 'chart.js/auto'
import './chart.css'

function Barchart({chartData}) {
  return (
    <div className='chart'>
        <Bar data={chartData} />
    </div>
  )
}

export default Barchart