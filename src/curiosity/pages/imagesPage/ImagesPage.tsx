/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react"
import { Button } from "../../../general/components/Button"
import { DRFC } from "../../../general/types"
import { getArr } from "../../../general/utils/array"
import H1 from "../../components/H1"
import Pagination from "../../components/Pagination"
import curiosityStyles from "../../tools/curiosityStyles"
import useSearchPhotos from "../../tools/useSearchPhotos"
import DateInput from "./DateInput"

interface Props {}

const ImagesPage: DRFC<{}> = (props) => {
	const {} = props

	const {
		setDate,
		setPage,
		state: { photos: imageList, queries },
	} = useSearchPhotos()

	return (
		<div>
			<H1>Mars Images By Date</H1>

			<DateInput searchByDate={setDate} initialDate={queries.date} key={queries.date} />
			<div css={curiosityStyles.imageGrid}>
				{imageList.map((photo) => (
					<img
						src={photo.img_src}
						css={{
							width: "100%",
						}}
						key={photo.id}
						alt="Taken by Curiosity Rover on Mars"
					/>
				))}
			</div>
			<Pagination currentPage={queries.page} setPage={setPage} />
		</div>
	)
}

export default ImagesPage
