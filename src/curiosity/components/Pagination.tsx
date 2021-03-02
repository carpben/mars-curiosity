/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react"
import { Button } from "../../general/components/Button"
import { styleCenterChild } from "../../general/styles"
import { DRFC } from "../../general/types"
import { getArr } from "../../general/utils/array"
import curiosityStyles from "../tools/curiosityStyles"
import Chevron from "./Chevron"
import PaginationButton from "./PaginationButton"

interface Props {
	setPage: (page: number) => unknown
	currentPage: number
}

const Pagination: DRFC<Props> = (props) => {
	const { currentPage, setPage } = props

	return (
		<div
			css={{
				display: "flex",
				justifyContent: "flex-end",
				marginTop: 15,
			}}
		>
			<PaginationButton handler={() => setPage(currentPage - 1)} css={styleCenterChild}>
				<Chevron size={7} direction="left" />
			</PaginationButton>
			{getArr(9, (i) => {
				const page = i + 1
				const selected = currentPage === page
				return (
					<PaginationButton
						handler={() => setPage(page)}
						css={{
							backgroundColor: selected ? curiosityStyles.primaryColor : "unset",
							color: selected ? "white" : "#666",
						}}
					>
						{page}
					</PaginationButton>
					// <Button
					// 	css={{
					// 		border: "1px solid #ddd",
					// 		padding: 10,
					// 	}}
					// >
					// 	{page}
					// </Button>
				)
			})}
			<PaginationButton handler={() => setPage(currentPage + 1)} css={styleCenterChild}>
				<Chevron size={7} direction="right" />
			</PaginationButton>
		</div>
	)
}

export default Pagination
