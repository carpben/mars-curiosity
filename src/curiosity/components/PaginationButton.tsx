/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react"
import { Button } from "../../general/components/Button"
import { styleCenterChild } from "../../general/styles"
import { DRFC } from "../../general/types"

interface Props {
	handler: () => unknown
}

const PaginationButton: DRFC<Props> = (props) => {
	const { handler, ...otherProps } = props

	return <Button css={[style, styleCenterChild]} handler={handler} {...otherProps} />
}

const WIDTH = 32

const style = css({
	border: "1px solid #ddd",
	width: WIDTH,
	height: WIDTH,
	marginLeft: 10,
	fontSize: 14,
	borderRadius: 8,
})

export default PaginationButton
