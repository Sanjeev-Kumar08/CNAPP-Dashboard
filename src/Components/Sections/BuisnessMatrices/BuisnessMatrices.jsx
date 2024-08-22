import React, { useEffect } from 'react'
import Card from '../../Card/Card'
import AddWidgetCard from '../../Card/AddWidgetCard/AddWidgetCard'
import { buisnessMatricesData } from '../../../utils/buisness_matrices'

import { useDispatch, useSelector } from 'react-redux'
import {setBuisnessWidgetData} from '../../../feature/slice'

import './buisnessMatrices.css'

function BuisnessMatrices() {

  const dispatch = useDispatch();
  const buisnessChartData = useSelector((state)=>state.widget.businessWidgets)

  const calculateTotals = (data) => {
    return data.map(chart => {
      const total = chart.data.reduce((acc, cur) => acc + cur.value, 0);
      return total;
    });
  };
  const dataWithTotals = calculateTotals(buisnessMatricesData);

  useEffect(()=>{
    dispatch(setBuisnessWidgetData(buisnessMatricesData))
  }, [])

  return (
    <div className='section'>
      <p className='section_Heading_matrices'>
        Business Metrics and Feedback
      </p>

      <div className='cardContainer'>
        {
          buisnessChartData.map((chartdata, index) => (
            <Card index={index} title={chartdata.title} chartData={chartdata}  totalData={dataWithTotals[index]} section='businessWidgets' key={index}/>
          ))
        }
        <AddWidgetCard section='buisness'/>
      </div>
    </div>
  )
}

export default BuisnessMatrices
