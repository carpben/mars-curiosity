/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react"
import { isNumber } from "lodash"
import { ReactText } from "react"
import { DRFC } from "../../../general/types"
import { round2Dec } from "../../../general/utils/numbers"

interface Props {
	label: string
	val: ReactText
}

const WeatherStat: DRFC<Props> = (props) => {
	const { label, val } = props

	return (
		<div
			css={{
				display: "flex",
				justifyContent: "space-between",
				marginBottom: 10,
				fontSize: 18,
			}}
		>
			<div
				css={{
					fontWeight: "bolder",
				}}
			>
				{label}:
			</div>
			<div
				css={{
					fontWeight: 500,
				}}
			>
				{isNumber(val) ? round2Dec(val) : val}
			</div>
		</div>
	)
}

export default WeatherStat
