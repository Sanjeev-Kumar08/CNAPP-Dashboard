import React, { useEffect } from 'react'
import Card from '../../Card/Card'
import AddWidgetCard from '../../Card/AddWidgetCard/AddWidgetCard';
import { cwppData } from '../../../utils/cwpp_Section_Data'

import './cwpp.css'

import { useDispatch, useSelector } from 'react-redux';
import { setCwppWidgetData } from '../../../feature/slice';



function CWPP() {

  const dispatch = useDispatch();
  const cwppChartData = useSelector((state)=> state.widget.cwppWidgets)
  

  const calculateTotals = (data) => {
    return data?.map((chart) => {
      const total = chart.data?.reduce((acc, cur) => acc + cur.value, 0);
      return total;
    });
  };
  const cwppDataWithTotals = calculateTotals(cwppData);

  useEffect(()=>{
    dispatch(setCwppWidgetData(cwppData))
  },[])

  return (
      <div className='section'>
      <p className='section_Heading_cwpp'>
        CWPP Dashboard
      </p>

      <div className='cardContainer'>
        {
          cwppChartData.map((chartdata, index) => (
            <Card index={index} title={chartdata.title} chartData={chartdata}  totalData={cwppDataWithTotals[index]} section='cwppWidgets' key={index}/>
          ))
        }
        <AddWidgetCard section={'CWPP'}/>
      </div>
    </div>
  )
}

export default CWPP
