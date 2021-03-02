/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react"
import { useState } from "react"
import { DRFC } from "../../../general/types"
import CuriosityButton from "../../components/CuriosityButton"
import H1 from "../../components/H1"
import { curiosityInfParagraphs } from "../../tools/curiosityInfo"
import { CuriosityPage } from "../../tools/CuriosityPage"
import { Photo } from "../../tools/types"
import aboutImage from "./AboutImage"
import Carousel from "./Carousel"

interface Props {
	setPage: (page: CuriosityPage) => unknown
}

const About: DRFC<Props> = (props) => {
	const { setPage } = props

	return (
		<>
			<H1>About The PRogram</H1>
			<div
				css={{
					display: "flex",
					marginBottom: 60,
				}}
			>
				{aboutImage}

				<div
					css={{
						flex: 11,
					}}
				>
					{curiosityInfParagraphs.map((p) => (
						<p css={styleParagraph}>{p}</p>
					))}

					<div css={styleButtonsW}>
						<CuriosityButton handler={() => setPage(CuriosityPage.IMAGES)} css={{ marginRight: 20 }}>
							View Images by Date
						</CuriosityButton>
						<CuriosityButton handler={() => setPage(CuriosityPage.WEATHER)}>
							View Weather
						</CuriosityButton>
					</div>
				</div>
			</div>
			<Carousel />
		</>
	)
}

const styleParagraph = css({
	// fontSize: 18,
	lineHeight: 1.25,
	marginTop: 0,
	fontWeight: 500,
	marginBottom: 0,
})

const styleButtonsW = css({
	marginTop: 35,
})

export default About
