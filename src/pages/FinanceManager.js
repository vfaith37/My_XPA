import React from 'react';
import {useState} from 'react'
import Linechart from '../components/charts/Linechart';
import {Userdata} from '../components/charts/Data'
import Barchart from '../components/charts/Barchart';
function FinanceManager() {
  const [userData, setUserdata] = useState({
    backgroundColor: ["black"],
    labels: Userdata.map((data) => data.month),
    datasets: [
      {
      label: "Revenue",
      data: Userdata.map((data) => data.revenue),
      backgroundColor: ["red"],
      // borderColor: ["black"],
    },
    {
      label: "Expenditure",
      data: Userdata.map((data) => data.expenditure),
      backgroundColor: ["white"],
      // borderColor: ["black"],
    }
  ]
  })
  return (
    <div className='financeManager'>
      <Linechart chartData={userData} />
      <Barchart chartData={userData} />
    </div>
  );
}

export default FinanceManager;
