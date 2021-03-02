/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react"
import { DRFC } from "../../general/types"

const H1: DRFC<{}> = (props) => {
	return <h1 css={style} {...props} />
}

const style = css({
	fontWeight: "bolder",
	fontSize: 38,
	marginBottom: 20,
})

export default H1
