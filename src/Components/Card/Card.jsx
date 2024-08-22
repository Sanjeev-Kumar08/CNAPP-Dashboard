import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, LineChart, Line } from 'recharts';
import NoData from './No Data Card/NoData';

import './card.css'

import { useDispatch } from 'react-redux';
import { cwppRemoveWidget, removeWidget, businessRemoveWidget } from '../../feature/slice';


const Card = ({ title, chartData , totalData , index, section}) => {
  const dispatch = useDispatch();

const CustomLegend = ({ payload }) => {
  return (
    <div className='legendContainer'>

      {payload.map((entry, index) => (
        <div key={`item-${index}`} className='legend'>
          <span className="legendIcon" style={{ backgroundColor: entry.payload.fill }}></span>
          <span>{entry.payload.name} ({entry.payload.value})</span>
        </div>
      ))}

    </div>
  );
};


const handleRemoveCard=()=>{
  if(section === 'cspmWidgets'){
    dispatch(removeWidget(index))
  }
  else if(section === 'cwppWidgets'){
    dispatch(cwppRemoveWidget(index))
  }
  else if(section === 'businessWidgets'){
    dispatch(businessRemoveWidget(index))
  }
}

return (
  <div className="card">
      <h3>{title}</h3>
      <button className='deleteCardBtn' onClick={handleRemoveCard}>&times;</button>

      {(totalData!==0 &&  chartData?.data?.length>0 ) ?  (
        <>
        <PieChart width={400} height={300} className='chart'>
          <Pie
            data={chartData?.data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            startAngle={90}  
            endAngle={450}   
            innerRadius={60}  
            outerRadius={94}  
            fill="#8884d8"
          >
            {chartData?.data?.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={chartData?.colors[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend content={CustomLegend} layout='vertical'  verticalAlign="middle" align="right" />
        </PieChart>

        <div className='totalCount'> 
          {totalData}
        </div>

        {
           <div className='total'>
              Total
            </div> 
        }
        </>
      ) :   <div className='paraText'>
      {chartData?.paraText }
    </div>}

      {totalData===0 && chartData?.type && <NoData/>}
  </div>
  );
};

export default Card;