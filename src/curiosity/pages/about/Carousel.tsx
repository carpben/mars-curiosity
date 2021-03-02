/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react"
import { useState } from "react"
import { useImmer } from "use-immer"
import { useMountEffect } from "../../../general/componentLifecycle"
import { Button } from "../../../general/components/Button"
import { DRFC } from "../../../general/types"
import Chevron from "../../components/Chevron"
import curiosityStyles from "../../tools/curiosityStyles"
import { requestCuriosityPhotos } from "../../tools/requests"
import useSearchPhotos from "../../tools/useSearchPhotos"

const Carousel: DRFC = () => {
	const {
		state: { photos: imageList, failed },
	} = useSearchPhotos()
	const [page, setPage] = useState(1)

	if (failed) {
		return (
			<div
				css={{
					color: "red",
				}}
			>
				Failed to fetch images{" "}
			</div>
		)
	}

	const firstImgIndex = (page - 1) * 5
	const maxImgIndex = firstImgIndex + 5

	const imagesToShow = imageList?.slice(firstImgIndex, maxImgIndex)

	return (
		<>
			<div>Curiosity Rover Images from today</div>

			{imageList != undefined && (
				<>
					<div
						css={{
							height: 200,
							display: "flex",
						}}
					>
						{page > 1 && (
							<Button
								stl={{
									fontSize: 40,
									marginRight: 30,
								}}
								handler={() => setPage(page - 1)}
							>
								<Chevron size={15} direction="left" />
							</Button>
						)}
						<div css={curiosityStyles.imageGrid}>
							{imagesToShow!.map((photo) => (
								<img src={photo.img_src} css={{ width: "100%" }} />
							))}
						</div>

						{imageList?.length - 1 > maxImgIndex && (
							<Button
								stl={{
									fontSize: 40,
								}}
								handler={() => setPage(page + 1)}
							>
								{">"}
							</Button>
						)}
					</div>
					<div>
						{page} / {Math.floor(imageList?.length / 5)}
					</div>
				</>
			)}
		</>
	)
}

export default Carousel
