/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react"
import { useState } from "react"
import { useImmer } from "use-immer"
import { useMountEffect } from "../../../general/componentLifecycle"
import { Button } from "../../../general/components/Button"
import { DRFC } from "../../../general/types"
import { requestCuriosityPhotos } from "../../tools/requests"
import { ImagesState } from "./About"

const useImageState = () => {
	const [imagesState, setImagesState] = useImmer<ImagesState>({})
	useMountEffect(() => {
		const request = async () => {
			try {
				const photos = await requestCuriosityPhotos()
				console.log(photos)
				setImagesState((draftSt) => {
					draftSt.imageList = photos.slice(0, 25)
				})
			} catch (e) {
				setImagesState((draftSt) => {
					draftSt.failed = true
				})
			}
		}
		request()
	})

	return imagesState
}

const Carousel: DRFC = () => {
	const { imageList, failed } = useImageState()
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
								{"<"}
							</Button>
						)}
						<div
							css={{
								display: "grid",
								gridTemplateColumns: "repeat(5, 1fr)",
								gap: 20,
							}}
						>
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
