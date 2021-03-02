/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react"
import { ChangeEvent, useState } from "react"
import { getValFromSelectEvent, getElementById } from "general/tools"
import getStyledComponent from "../basicElements/getStyledComponent"
import Box from "../basicElements/Box"
import { css } from "emotion"
import { baseNormalizer } from "common/utils/styles/elements"
import { FAClassIcon } from "../icons/FAIcon"
import { COLORS, SPACE } from "common/utils/styles/base"
import { cmq } from "common/utils/styles/tools"

interface IProps {
	optionArr: Array<{
		name: string
		id: string
	}>
	selectedVal: string | number | undefined | null
	handleSelect: (id: IDVal) => unknown
	stl?: {
		w?: Stls
		select?: Stls
	}
	other?: any
	renderOptionsInAdvance?: boolean
	required?: boolean
}

const SelectW: DRFC<IProps> = (props) => {
	const {
		optionArr,
		handleSelect,
		selectedVal,
		defult = "Select",
		stl,
		other,
		renderOptionsInAdvance = false,
		required,
	} = props
	const [hasBeenOpened, setHasBeenOpened] = useState(false)

	const selectedValue = isNil(selectedVal) || selectedVal === "" ? -1 : selectedVal

	return (
		<Box stl={[styles.w, stl?.w]}>
			<select
				value={selectedValue}
				onMouseDown={() => setHasBeenOpened(true)}
				onChange={(e: ChangeEvent<HTMLSelectElement>) => handleSelect(getValFromSelectEvent(e))}
				placeholder={defult}
				css={[styles.select, stl?.select]}
				{...other}
			>
				{!required && <option value="">{defult}</option>}
				{renderOptionsInAdvance || hasBeenOpened
					? optionArr.map(({ id, name }) => (
							<option value={id} key={id}>
								{name}
							</option>
					  ))
					: selectedValue !== -1 &&
					  (() => {
							const selectedEl = getElementById(optionArr, selectedValue)!
							return (
								<option value={selectedEl.id} key={selectedEl.id}>
									{selectedEl.name}
								</option>
							)
					  })()}
			</select>
			<FAClassIcon
				classIcon="chevron-down"
				type="solid"
				stl={css`
					width: 32px;
					position: absolute;
					right: 0;
					top: 0;
					height: 100%;
					color: ${COLORS.GRAYS.MODERATE};
				`}
			/>
		</Box>
	)
}

const styles = {
	w: css`
		overflow: hidden;
		position: relative;
	`,
	select: [
		baseNormalizer,
		css`
			max-width: 100%;
			padding-right: 32px;
			appearance: none;
			position: relative;
			z-index: 1;
		`,
	],
	chevron: cmq({
		width: 4 * SPACE,
		position: "absolute",
		right: 0,
		top: 0,
		height: "100%",
		color: COLORS.GRAYS.MODERATE,
	}),
}
export default React.memo(SelectW)
