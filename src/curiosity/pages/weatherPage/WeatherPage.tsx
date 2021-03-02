/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react"
import SelectW from "../../../general/components/SelectW"
import { DRFC } from "../../../general/types"
import { reliablyGetKeys } from "../../../general/utils/array"
import { WEATHER_METRIC } from "../../../weatherAPI"
import H1 from "../../components/H1"
import Pagination from "../../components/Pagination"
import useSearchWeather from "../../tools/useSearchWeather"
import SortInput from "./SortInput"
import WeatherCard from "./WeatherCard"

const WeatherPage: DRFC = (props) => {
	const {
		state: { queries, weatherBySol },
		setPage,
		setSort,
	} = useSearchWeather()
	return (
		<>
			<div css={styleHeader}>
				<H1>Mars Weather</H1>
				<SortInput currentSort={queries.sort} setSort={setSort} />
			</div>

			<div css={styleGrid}>
				{weatherBySol.map((wBS) => (
					<WeatherCard {...wBS} />
				))}
			</div>

			<Pagination currentPage={queries.page} setPage={setPage} />
		</>
	)
}

const styleHeader = css({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "baseline",
})

const styleGrid = css({
	display: "grid",
	gridTemplateColumns: "repeat(3, 1fr)",
	gap: 30,
})

export default WeatherPage
