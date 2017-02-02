import React from 'react';
import {Line} from 'react-chartjs';


export default class SensorChart extends React.Component {
  render () {
    const chartData = this.props.data.reduce((chartObj, obs) => {
			chartObj.labels.push(obs.timestamp.toString());
			chartObj.datasets[0].data.push(obs.temp);
			chartObj.datasets[1].data.push(obs.humidity);
			chartObj.datasets[2].data.push(obs.irradiance);
			return chartObj;
		}, {
			labels: [],
			datasets:[
				{label: 'temp', data: []},
				{label: 'hum', data: []},
				{label: 'irrad', data: []}
			]
		});

		const opts = {datasetFill: false};

    return (
      <Line data={chartData} options={opts} width="800" height="600"/>
    );

  }
}
