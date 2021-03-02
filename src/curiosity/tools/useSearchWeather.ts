import { queries } from "@testing-library/react"
import { format, subDays } from "date-fns"
import { now } from "lodash"
import { useEffect } from "react"
import { useImmer } from "use-immer"
import weatherAPI, { SolWeatherData, WeatherQueries, WEATHER_METRIC } from "../../weatherAPI"
import { requestCuriosityPhotos, requestCuriosityWeather } from "./requests"
import { Photo } from "./types"

export interface WeatherState {
	weatherBySol: SolWeatherData[]
	failed?: boolean
	loading: boolean
	queries: WeatherQueries
}

const initState: WeatherState = {
	weatherBySol: [],
	loading: true,
	queries: {
		page: 1,
		resultsPerPage: 9,
		sort: WEATHER_METRIC.Tempreture,
	},
}

const useSearchWeather = () => {
	const [state, setState] = useImmer<WeatherState>(initState)

	useEffect(() => {
		const asyncEffect = async () => {
			try {
				setState((draftSt) => {
					draftSt.loading = true
				})

				const weatherBySol = await requestCuriosityWeather(state.queries)
				setState((draftSt) => {
					draftSt.weatherBySol = weatherBySol
				})
			} catch (e) {
				setState((draftSt) => {
					draftSt.failed = true
				})
			} finally {
				setState((draftSt) => {
					draftSt.loading = false
				})
			}
		}

		asyncEffect()
	}, [state.queries])

	const setPage = (newPage: number) =>
		setState((draftSt) => {
			draftSt.queries.page = newPage
		})

	const setSort = (metric: WEATHER_METRIC) =>
		setState((draftSt) => {
			draftSt.queries.sort = metric
		})

	return {
		state,
		setPage,
		setSort,
	}
}

export default useSearchWeather
