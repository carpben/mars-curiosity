/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react"
import { Button } from "../../general/components/Button"
import { styleCenterChild } from "../../general/styles"
import { DRFC } from "../../general/types"
import { getArr } from "../../general/utils/array"
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
			}}
		>
			<PaginationButton handler={() => setPage(currentPage - 1)} css={styleCenterChild}>
				<Chevron size={9} direction="left" />
			</PaginationButton>
			{getArr(9, (i) => {
				const page = i + 1
				return (
					<PaginationButton
						handler={() => setPage(page)}
						css={{
							fontWeight: currentPage === page ? 900 : "normal",
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
				<Chevron size={9} direction="right" />
			</PaginationButton>
		</div>
	)
}

export default Pagination
