/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react"
import { Button } from "../../general/components/Button"
import { DRFC } from "../../general/types"

interface Props {
	handler: () => unknown
}

const CuriosityButton: DRFC<Props> = (props) => {
	const { handler, ...otherProps } = props

	return (
		<Button
			stl={{
				backgroundColor: "#ded6c9",
				padding: 20,
				borderRadius: 12,
				":hover, :focus": {
					backgroundColor: "#bbb",
				},
			}}
			handler={handler}
			{...otherProps}
		/>
	)
}

export default CuriosityButton
