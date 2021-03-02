/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react"
import { useState } from "react"
import { Button } from "../../../general/components/Button"
import { DRFC } from "../../../general/types"

interface Props {
	searchByDate: (date: string) => unknown
}

const DateInput: DRFC<Props> = (props) => {
	const { searchByDate } = props
	const [date, setDate] = useState<string>()

	return (
		<div
			css={{
				display: "flex",
			}}
		>
			<label>Earth date:</label>

			<input type="date" onChange={(e) => setDate(e.target.value)}></input>

			<Button
				handler={() => {
					if (!date) {
						return
					}
					searchByDate(date)
				}}
			>
				Search
			</Button>
		</div>
	)
}

export default DateInput
