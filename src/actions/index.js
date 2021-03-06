import axios from 'axios';

const API_KEY = '8450a715709795fde2f483a204e2a501';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	//request is a proomise
	const request = axios.get(url);


	return {
		type: FETCH_WEATHER,
		payload: request
	};
}