/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react"
import { Button } from "../general/components/Button"
import { DRFC } from "../general/types"
import About from "./pages/about/About"
import ImagesPage from "./pages/imagesPage/ImagesPage"
import WeatherPage from "./pages/weatherPage/WeatherPage"
import { CuriosityPage } from "./tools/CuriosityPage"
import { useUrlState } from "./tools/url"

const pages = Object.values(CuriosityPage)

const CuriosityMars: DRFC = (props) => {
	const [urlState, setUrl] = useUrlState()

	const { page: currentPage } = urlState
	const setPage = (page: CuriosityPage) => setUrl({ page })

	const PAGES = {
		[CuriosityPage.ABOUT]: <About setPage={setPage} />,
		[CuriosityPage.IMAGES]: <ImagesPage />,
		[CuriosityPage.WEATHER]: <WeatherPage />,
	}

	return (
		<div css={styleContainer}>
			<div css={styleNavigation}>
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

const styleContainer = css({
	maxWidth: 1200,
	margin: "auto",
	marginTop: verticleMargin,
	marginBottom: verticleMargin,
})

const styleNavigation = css({
	display: "flex",
})

export default CuriosityMars
