import React from 'react';
import {Bar, Line} from 'react-chartjs-2';


export default class SensorChart extends React.Component {
  render () {
    const chartData = this.props.data.reduce((chartObj, obs) => {
		chartObj.labels.push(
      obs.timestamp.getDate() + " : " +
      obs.timestamp.getMonth() + 1 + " : " +
      obs.timestamp.getYear()
    );

		//	chartObj.labels.push(obs.timestamp.toString());
			chartObj.datasets[0].data.push(obs.temp);
			chartObj.datasets[1].data.push(obs.humidity);
			chartObj.datasets[2].data.push(obs.irradiance);
			return chartObj;
		}, {
			labels: [],
			datasets:[
				{
					yAxisID: "y-axis-0",
					label: 'temperature', data: [],
					fill: false,
					type: 'line',

					lineTension: 0.2,
					backgroundColor: 'rgba(75,192,192,0.4)',
					borderColor: 'rgba(75,192,192,1)',
					borderCapStyle: 'butt',
					borderDash: [],
					borderDashOffset: 0.0,
					pointBorderColor: 'rgba(75,192,192,1)',
					borderJoinStyle: 'miter',
					pointBackgroundColor: '#fff',
					pointBorderWidth: 2,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: 'rgba(75,192,192,1)',
					pointHoverBorderColor: 'rgba(220,220,220,1)',
					pointHoverBorderWidth: 2,
					pointRadius: 2,
					pointHitRadius: 10,
				},
				{
					yAxisID: "y-axis-0",
					label: 'hum', data: [], fill: false,
					type: 'line',
					lineTension: 0.2,
					backgroundColor: 'rgba(75,255,192,0.4)',
					borderColor: 'rgba(75,255,192,1)',
					borderCapStyle: 'butt',
					borderDash: [],
					borderDashOffset: 0.0,
					pointBorderColor: 'rgba(75,255,192,1)',
					borderJoinStyle: 'miter',
					pointBackgroundColor: '#fff',
					pointBorderWidth: 2,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: 'rgba(75,255,192,1)',
					pointHoverBorderColor: 'rgba(220,220,220,1)',
					pointHoverBorderWidth: 2,
					pointRadius: 2,
					pointHitRadius: 10,



				},
				{
					fill: false,
					yAxisID: "y-axis-1",
					label: 'irrad', data: [],
					type: 'bar',
					//lineTension: 0.2,
					backgroundColor: 'rgba(255,192,192,0.4)',
					borderColor: 'rgba(255,192,192,1)',
					borderCapStyle: 'butt',
					borderDash: [],
					borderDashOffset: 0.0,
					pointBorderColor: 'rgba(255,192,192,1)',
					borderJoinStyle: 'miter',
					pointBackgroundColor: '#fff',
					pointBorderWidth: 2,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: 'rgba(75,192,192,1)',
					pointHoverBorderColor: 'rgba(220,220,220,1)',
					pointHoverBorderWidth: 2,
					pointRadius: 2,
					pointHitRadius: 10,


				}
			]
		});

		const opts = {
			title: { display: true, text: "Sensor Environment over Time"},
			scales: {
				yAxes: [{
				scaleLabel: {
						display: true,
						labelString: "Degrees C & Humidity",
					},
					position: "left",
					"id": "y-axis-0"
				},{
					scaleLabel: {
						display: true,
						labelString: "lumins",
					},
					position: "right",
					"id": "y-axis-1"
				}]
			}
		};
/*
    const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
]

    }; */

    return (
      <div>
        <Bar data={chartData} options={opts} />
      </div>
    );

  }
}
