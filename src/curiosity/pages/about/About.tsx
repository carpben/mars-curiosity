/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react"
import { useState } from "react"
import { DRFC } from "../../../general/types"
import CuriosityButton from "../../components/CuriosityButton"
import { curiosityInfo } from "../../tools/curiosityInfo"
import { CuriosityPage } from "../../tools/CuriosityPage"
import { Photo } from "../../tools/types"
import Carousel from "./Carousel"

interface Props {
	setPage: (page: CuriosityPage) => unknown
}

export interface ImagesState {
	imageList?: Photo[]
	failed?: boolean
}

const About: DRFC<Props> = (props) => {
	const { setPage } = props

	return (
		<>
			<div
				css={{
					display: "flex",
				}}
			>
				<div
					css={{
						paddingTop: "60%",
						background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://mars.nasa.gov/internal_resources/585)`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						marginRight: 50,
						flexBasis: 450,
					}}
				/>
				<div
					css={{
						flexBasis: 550,
					}}
				>
					{curiosityInfo}
					<CuriosityButton handler={() => setPage(CuriosityPage.IMAGES)}>
						View Images by Date
					</CuriosityButton>
					<CuriosityButton handler={() => setPage(CuriosityPage.WEATHER)}>View Weather</CuriosityButton>
				</div>
			</div>
			<div>
				<div>Curiosity Rover Images from today</div>
				<Carousel />
			</div>
		</>
	)
}

export default About
