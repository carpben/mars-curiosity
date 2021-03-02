import { css } from "@emotion/react"

export const styleInputNormalize = css`
	padding: unset;
	background-color: unset;
	border: unset;
	:focus {
		outline: none;
	}
`

export const styleCenterChild = css({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
})
