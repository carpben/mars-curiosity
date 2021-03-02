/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react"
import { size } from "lodash"
import { DRFC } from "../../general/types"

interface Props {
	size: number
	direction: "right" | "left" | "down"
}

const Chevron: DRFC<Props> = (props) => {
	const { size, direction, ...otherProps } = props
	const border = `${size / 4}px solid #666`

	const rotate = direction === "down" ? 135 : direction === "right" ? 45 : -135

	return (
		<div
			css={{
				width: size,
				height: size,
				position: "relative",
				borderTop: border,
				borderRight: border,
				transform: `rotate(${rotate}deg)`,
				left: direction === "left" ? size / 4 : direction === "right" ? -size / 4 : 0,
			}}
			{...otherProps}
		>
			{/* <div
                css={{
                    position: "absolute"
                }}
            >

            </div> */}
		</div>
	)
}

export default Chevron
