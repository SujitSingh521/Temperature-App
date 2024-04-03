import React,{useState} from 'react';
import './App.css'

const App = () => {
	const [temperature, setTemperature] = useState(10);
	const [temperatureColor, setTemperatureColor] = useState('cold');

	const increaseTemperature = () => {
		const newTemperature = temperature + 1;
		
		setTemperature(newTemperature);


		if (newTemperature >= 15) {
			setTemperatureColor('hot');
		}
	};

	const decreaseTemperature = () => {
		const newTemperature = temperature - 1;
		
		setTemperature(newTemperature);
		if (newTemperature < 15) {
			setTemperatureColor('cold');
		}
	};



	return (
		<div className='Back'>
			<div className='app-container'>
				<br /> 	<br />	<br />	<br />
				<div className='temperature-display-container'>
					<div className={`temperature-display ${temperatureColor}`}>{temperature}°C</div>
				</div>
				<div className='button-container'>
					<button onClick={increaseTemperature} id='btn1'>+</button>
					<button onClick={decreaseTemperature} id='btn2'>-</button>
				</div>
				<br />  <br /> <br /> <br />

			</div>
		</div>
	);
};

export default App;





