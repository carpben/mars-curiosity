/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react"
import { ChangeEvent, useState } from "react"

import { DRFC } from "../types"
import Chevron from "../../curiosity/components/Chevron"
import { styleCenterChild, styleInputNormalize } from "../styles"
import { getValFromSelectEvent } from "../utils/inputs"

interface IProps {
	optionArr: Array<{
		name: string
		id: string
	}>
	selectedVal: string
	handleSelect: (id: string) => unknown
}

const SelectW: DRFC<IProps> = (props) => {
	const { optionArr, handleSelect, selectedVal } = props

	return (
		<div
			css={{
				overflow: "hidden",
				position: "relative",
				border: "1px solid #ccc ",
				display: "flex",
				padding: 4,
				borderRadius: 5,
			}}
		>
			<select
				value={selectedVal}
				onChange={(e: ChangeEvent<HTMLSelectElement>) => handleSelect(getValFromSelectEvent(e))}
				css={[
					styleInputNormalize,
					css`
						max-width: 100%;
						padding-right: 32px;
						appearance: none;
						position: relative;
						z-index: 1;
					`,
				]}
			>
				{optionArr.map(({ id, name }) => (
					<option value={id} key={id}>
						{name}
					</option>
				))}
			</select>
			<div
				css={[
					{
						width: 32,
						position: "absolute",
						right: 0,
						top: 0,
						height: "100%",
					},
					styleCenterChild,
				]}
			>
				<Chevron direction="down" />
			</div>
		</div>
	)
}

export default SelectW
