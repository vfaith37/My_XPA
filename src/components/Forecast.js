/* eslint-disable jsx-a11y/alt-text */
import "bulma/css/bulma.min.css";
import { useState } from "react";
import axios from "axios";
import WeatherData from "./weathers";
export default function Forecast() {
	const location = localStorage.getItem("apiLocation");
	console.log("location", location);
	const [data, setData] = useState("");
	const api = () => {
		axios
			.get(
				`http://api.weatherapi.com/v1/forecast.json?key=b5d6744be28449b4804122825220407&q=${location}&days=10&aqi=no&alerts=no`
			)
			.then((res) => {
				const weatherdata = {};
				Object.assign(weatherdata, {
					forecast: res.data.forecast,
					location: res.data.location,
					current: res.data.current,
				});
				setData(weatherdata);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	if (data) {
		console.log("loca", data.location);
		console.log(data.forecast.forecastday);
		const todayForecast = data.forecast.forecastday;
		todayForecast.forEach((weather, index) => {
			return (
				<div key={index}>
					<p> Date: {weather.date} </p>
					{console.log(weather.date)};{console.log(weather.day.condition.text)};
					{console.log(weather.day.avgtemp_c)};
				</div>
			);
		});
	}
	const [call, setCall] = useState(false);
	if (call === false) {
		api();
		setCall(true);
	}
	return (
		<>
			{data.forecast != null
				? data.forecast.forecastday.map((item, index) => (
						<WeatherData fdata={item} />
				  ))
				: null}
		</>
	);
}
