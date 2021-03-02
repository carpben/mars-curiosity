/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react"
import { Button } from "../../general/components/Button"
import { DRFC } from "../../general/types"

interface Props {
	handler: () => unknown
}

const PaginationButton: DRFC<Props> = (props) => {
	const { handler, ...otherProps } = props

	return (
		<Button
			css={{
				border: "1px solid #ddd",
				padding: 10,
				marginLeft: 10,
			}}
			handler={handler}
			{...otherProps}
		/>
	)
}

export default PaginationButton
