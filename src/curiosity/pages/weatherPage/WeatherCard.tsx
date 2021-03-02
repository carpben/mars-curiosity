/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react"
import { DRFC } from "../../../general/types"
import { SolWeatherData } from "../../../weatherAPI"
import WeatherStat from "./WeatherStat"

const WeatherCard: DRFC<SolWeatherData> = (props) => {
	const { First_UTC, Last_UTC, AT, HWS, PRE, sol, ...otherProps } = props

	return (
		<div
			css={{
				border: "1px solid black",
				padding: 15,
			}}
			{...otherProps}
		>
			<WeatherStat label="Data point" val={sol} />
			<WeatherStat label="Tempreture[AVG]" val={AT.av} />
			<WeatherStat label="Wind[AVG]" val={HWS.av} />
			<WeatherStat label="Pressure[AVG]" val={PRE.av} />
			<WeatherStat label="First UTC" val={First_UTC} />
			<WeatherStat label="Last UTC" val={Last_UTC} />
		</div>
	)
}

export default WeatherCard
