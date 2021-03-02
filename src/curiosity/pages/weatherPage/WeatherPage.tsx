/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react"
import { DRFC } from "../../../general/types"
import H1 from "../../components/H1"
import Pagination from "../../components/Pagination"
import useSearchWeather from "../../tools/useSearchWeather"

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
				}}
			>
				<H1>Mars Weather</H1>
				<div
					css={{
						display: "flex",
						alignItems: "center",
					}}
				>
					<div>Sort By</div>
				</div>
			</div>

			<Pagination currentPage={queries.page} setPage={setPage} />
		</>
	)
}

export default WeatherPage
