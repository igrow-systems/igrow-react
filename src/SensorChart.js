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
					label: 'Temperature', data: [],
					fill: false,
					type: 'line',

      		lineTension: 0.15,
					backgroundColor: 'rgba(255, 153, 10, 0.2)',
					borderColor: 'rgba(255, 153, 10, 1)',
          borderWidth: 3,
					borderCapStyle: 'butt',
					borderDash: [10,5,5,5],
					borderDashOffset: 0.0,
					borderJoinStyle: 'miter',

					pointRadius: 3,
					pointBorderColor: 'rgba(255, 153, 10, 1)',
					pointBackgroundColor: '#fff',
					pointBorderWidth: 2,

					pointHoverRadius: 5,
					pointHoverBackgroundColor: 'rgba(255, 153, 10, 1)',
					pointHoverBorderColor: 'rgba(0, 0, 0, 1)',
					pointHoverBorderWidth: 1,
					pointHitRadius: 10,



				},
				{
					yAxisID: "y-axis-0",
					label: 'Humidity', data: [], fill: false,
					type: 'line',
					lineTension: 0.15,
					backgroundColor: 'rgba(31, 211, 239, 0.2)',
					borderColor: 'rgba(31, 211, 239, 1)',

          //rgba(31, 211, 239, 1);
          borderWidth: 3,
					borderCapStyle: 'butt',
					borderDash: [10,5],
					borderDashOffset: 0.0,
					borderJoinStyle: 'miter',

					pointRadius: 3,
					pointBorderColor: 'rgba(31, 211, 239, 1)',
					pointBackgroundColor: '#fff',
					pointBorderWidth: 2,

					pointHoverRadius: 5,
					pointHoverBackgroundColor: 'rgba(31, 211, 239, 1)',
					pointHoverBorderColor: 'rgba(0, 0, 0, 1)',
					pointHoverBorderWidth: 1,
					pointHitRadius: 10,



				},
				{
					yAxisID: "y-axis-1",
					label: 'Light', data: [],
					type: 'bar',
					backgroundColor: 'rgba(247, 230, 46, 0.7)',
					borderColor: 'rgba(200, 190, 30, 0.7)',
          borderWidth: 1,
					hoverBackgroundColor: 'rgba(247, 230, 46, 1)',
					hoverBorderColor: 'rgba(0,0,0,1)',
					hoverBorderWidth: 1,
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

    return (
      <div>
        <Bar data={chartData} options={opts} />
      </div>
    );

  }
}
