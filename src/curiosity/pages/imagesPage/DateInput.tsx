/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react"
import { useState } from "react"
import { Button } from "../../../general/components/Button"
import { styleInputNormalize } from "../../../general/styles"
import { DRFC } from "../../../general/types"

interface Props {
	searchByDate: (date: string) => unknown
	initialDate: string
}

const DateInput: DRFC<Props> = (props) => {
	const { searchByDate, initialDate } = props
	const [date, setDate] = useState<string>(initialDate)

	return (
		<div
			css={{
				display: "flex",
				alignItems: "center",
				marginBottom: 20,
			}}
		>
			<label
				css={{
					fontWeight: 500,
					marginRight: 10,
				}}
			>
				Earth date:
			</label>

			<div
				css={{
					border: "1px solid #ccc",
					borderRadius: 8,
					overflow: "hidden",
				}}
			>
				<input
					type="date"
					onChange={(e) => setDate(e.target.value)}
					placeholder="Please enter "
					css={[
						styleInputNormalize,
						{
							marginRight: 10,
							padding: 4,
						},
					]}
					value={date}
				></input>

				<Button
					handler={() => {
						if (!date) {
							return
						}
						searchByDate(date)
					}}
					stl={{
						backgroundColor: "#ccc",
						padding: 6,
						paddingLeft: 8,
						borderColor: "#ccc",
					}}
				>
					Search
				</Button>
			</div>
		</div>
	)
}

export default DateInput
