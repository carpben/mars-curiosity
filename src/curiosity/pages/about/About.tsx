/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react"
import { useState } from "react"
import { DRFC } from "../../../general/types"
import CuriosityButton from "../../components/CuriosityButton"
import H1 from "../../components/H1"
import { curiosityInfParagraphs } from "../../tools/curiosityInfo"
import { CuriosityPage } from "../../tools/CuriosityPage"
import { Photo } from "../../tools/types"
import aboutImage from "./aboutImage"
import Carousel from "./Carousel"

interface Props {
	setPage: (page: CuriosityPage) => unknown
}

const About: DRFC<Props> = (props) => {
	const { setPage } = props

	return (
		<>
			<H1>About The Program</H1>
			<div
				css={{
					display: "flex",
					marginBottom: 70,
				}}
			>
				{aboutImage}

				<div css={styleContent}>
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
	lineHeight: 1.25,
	marginTop: 0,
	fontWeight: 500,
	marginBottom: 0,
})

const styleButtonsW = css({
	marginTop: 35,
})

const styleContent = css({
	flex: 11,
})

export default About
