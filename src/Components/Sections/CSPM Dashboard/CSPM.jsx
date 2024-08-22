import React, { useEffect } from 'react'
import Card from '../../Card/Card'
import AddWidgetCard from '../../Card/AddWidgetCard/AddWidgetCard'
import { cspmData } from '../../../utils/cspm_Section_Data'

import { useDispatch, useSelector } from 'react-redux'
import { setWidgetData } from '../../../feature/slice'
import './cspm.css'

function CSPM() {
  const dispatch = useDispatch();
  const cspmChartData = useSelector((state)=>state.widget.widgets)
  
  const calculateTotals = (data) => {
    return data.map(chart => {
      const total = chart.data.reduce((acc, cur) => acc + cur.value, 0);
      return total;
    });
  };
  
  const cspmDataWithTotals = calculateTotals(cspmData);

useEffect(()=>{
  dispatch(setWidgetData(cspmData))
},[])
  
  return (
    <div className='section'>
      <p className='section_Heading_cspm'>
        CSPM Executive Dashboard
      </p>

      <div className='cardContainer'>
        {
          cspmChartData.map((chartdata, index) => (
            <Card index={index} title={chartdata.title} chartData={chartdata}  totalData={cspmDataWithTotals[index]} section="cspmWidgets" key={index}/>
          ))
        }
        <AddWidgetCard section = 'CSPM'/>
      </div>
    </div>
  )
}

export default CSPM
