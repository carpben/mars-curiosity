/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react"
import { Button } from "../general/components/Button"
import { DRFC } from "../general/types"
import About from "./pages/about/About"
import { CuriosityPage } from "./tools/CuriosityPage"
import { useUrlState } from "./tools/url"

const pages = Object.values(CuriosityPage)

const CuriosityMars: DRFC = (props) => {
	const [urlState, setUrl] = useUrlState()

	const { page: currentPage } = urlState
	const setPage = (page: CuriosityPage) => setUrl({ page })

	const PAGES = {
		[CuriosityPage.ABOUT]: <About setPage={setPage} />,
		[CuriosityPage.IMAGES]: null,
		[CuriosityPage.WEATHER]: null,
	}

	return (
		<div
			css={{
				maxWidth: 1100,
				margin: "auto",
				marginTop: verticleMargin,
				marginBottom: verticleMargin,
			}}
		>
			<div
				css={{
					display: "flex",
				}}
			>
				{pages.map((page) => (
					<Button
						handler={() => setPage(page)}
						stl={{
							marginRight: 20,
							fontWeight: page === currentPage ? "bold" : "normal",
						}}
						key={page}
					>
						{page}
					</Button>
				))}
			</div>
			{PAGES[currentPage]}
		</div>
	)
}

const verticleMargin = 20

export default CuriosityMars
