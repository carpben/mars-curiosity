/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react"
import SelectW from "../../../general/components/SelectW"
import { DRFC } from "../../../general/types"
import { reliablyGetKeys } from "../../../general/utils/array"
import { WEATHER_METRIC } from "../../../weatherAPI"

interface Props {
	currentSort: WEATHER_METRIC
	setSort: (sort: WEATHER_METRIC) => unknown
}

const SortInput: DRFC<Props> = (props) => {
	const { currentSort, setSort } = props

	return (
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
				selectedVal={currentSort}
				optionArr={reliablyGetKeys(WEATHER_METRIC).map((weatherKey) => ({
					id: WEATHER_METRIC[weatherKey],
					name: weatherKey,
				}))}
			/>
		</div>
	)
}

export default SortInput
