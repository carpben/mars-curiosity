/** now: SOL 200 */

import { format } from "date-fns"
import { range } from "lodash"
import { getArr } from "./general/utils/array"
import { getRandomInRange } from "./general/utils/numbers"

export enum WEATHER_METRIC {
	Tempreture = "AT",
	Wind = "HWS",
	Pressure = "PRE",
}

interface WeatherStat {
	av: number
}

export interface SolWeatherData {
	AT: WeatherStat
	HWS: WeatherStat
	PRE: WeatherStat
	First_UTC: string
	Last_UTC: string
	sol: number
}

const getWeatherStat = (sol: number, min: number, cycle: number, range: number): WeatherStat => {
	const actualMin = min + (sol % cycle)
	return {
		av: getRandomInRange(actualMin, actualMin + range),
	}
}

const sol200 = new Date()

const getDateForSol = (sol: number) => sol200.toISOString()

const getDataForSol = (i: number): SolWeatherData => {
	const sol = i + 1
	return {
		AT: getWeatherStat(sol, -100, 100, 80),
		HWS: getWeatherStat(sol, 0.15, 10, 17),
		PRE: getWeatherStat(sol, 722, 40, 40),
		First_UTC: getDateForSol(0),
		Last_UTC: getDateForSol(0),
		sol,
	}
}

const weatherData = getArr(200, (i) => getDataForSol(i))

console.log(weatherData)

export interface WeatherQueries {
	sort: WEATHER_METRIC
	page: number
	resultsPerPage: number
}

export const getWeatherData = (queries: WeatherQueries) => {
	const { sort, page, resultsPerPage } = queries
	const sortedData = weatherData.sort((solA, solB) => solB[sort].av - solA[sort].av)
	const firstIndex = (page - 1) * resultsPerPage
	const lastIndex = page * resultsPerPage
	return sortedData.slice(firstIndex, lastIndex)
}

export default {
	get: getWeatherData,
}
