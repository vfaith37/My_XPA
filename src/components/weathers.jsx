import { render } from "@testing-library/react";
import "bulma/css/bulma.min.css";
import { useState } from "react";
import { FaTemperatureHigh, FaTemperatureLow, FaThermometer } from "react-icons/fa";
// import { BiDroplet } from "react-icons/bi";
// import moment from "moment";
import './weather.css'

export default function WeatherData(props) {
	const [times, setTimes] = useState(1);
	if (times !== 1) render(setTimes(1));

	const getFormattedDate = (dateStr) => {
		const date = new Date(dateStr);
		const options = {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
		};
		return date.toLocaleDateString("en-us", options);
	};
	return (
		<div /*key={props.fdata}*/ className="container">

			<table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth center">
				<thead>
					<tr>
						<th colSpan={2}>
							<p>{getFormattedDate(props.fdata.date)}</p>
						</th>
						<th>
							<p>
								Humidity({props.fdata.day.avghumidity}%)
							</p>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th colSpan={2}>

						{/* <FaTemperatureHigh />  */}
								Temperature °C
						</th>
						<th rowSpan={2}>
							<figure className="image is-96x96">
								<img src={props.fdata.day.condition.icon} alt="Weather Icon" />
							</figure>
						</th>
					</tr>
					<tr>
						<th>
							High:
							{props.fdata.day.maxtemp_c}°C
						</th>
						<th>
							Low:
							{props.fdata.day.mintemp_c}°C
						</th>
					</tr>
				</tbody>
			</table>
			<br />
		</div>
	);
}
