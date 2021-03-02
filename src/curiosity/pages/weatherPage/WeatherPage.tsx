/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react"
import SelectW from "../../../general/components/SelectW"
import { DRFC } from "../../../general/types"
import { reliablyGetKeys } from "../../../general/utils/array"
import { WEATHER_METRIC } from "../../../weatherAPI"
import H1 from "../../components/H1"
import Pagination from "../../components/Pagination"
import useSearchWeather from "../../tools/useSearchWeather"
import WeatherCard from "./WeatherCard"

const WeatherPage: DRFC = (props) => {
	const {
		state: { queries, weatherBySol },
		setPage,
		setSort,
	} = useSearchWeather()
	return (
		<>
			<div
				css={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "baseline",
				}}
			>
				<H1>Mars Weather</H1>
				<div
					css={{
						display: "flex",
						alignItems: "center",
					}}
				>
					<div
						css={{
							fontSize: 18,
							fontWeight: 500,
							marginRight: 25,
						}}
					>
						Sort By
					</div>
					<SelectW
						handleSelect={(val: string) => setSort(val as WEATHER_METRIC)}
						selectedVal={queries.sort}
						optionArr={reliablyGetKeys(WEATHER_METRIC).map((weatherKey) => ({
							id: WEATHER_METRIC[weatherKey],
							name: weatherKey,
						}))}
					/>
				</div>
			</div>
			<div
				css={{
					display: "grid",
					gridTemplateColumns: "repeat(3, 1fr)",
					gap: 30,
				}}
			>
				{weatherBySol.map((wBS) => (
					<WeatherCard {...wBS} />
				))}
			</div>
			<Pagination currentPage={queries.page} setPage={setPage} />
		</>
	)
}

export default WeatherPage
