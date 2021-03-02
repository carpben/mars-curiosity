import { queries } from "@testing-library/react"
import { format, subDays } from "date-fns"
import { now } from "lodash"
import { useEffect } from "react"
import { useImmer } from "use-immer"
import { requestCuriosityPhotos } from "./requests"
import { Photo } from "./types"

export interface ImagesState {
	photos: Photo[]
	failed?: boolean
	loading: boolean
	queries: {
		page: number
		date: string
	}
}

const DATE_FORMAT = "yyyy-MM-dd"

const initState: ImagesState = {
	photos: [],
	loading: true,
	queries: {
		page: 1,
		date: format(subDays(new Date(), 3), DATE_FORMAT),
	},
}

const useSearchPhotos = () => {
	const [state, setState] = useImmer<ImagesState>(initState)

	useEffect(() => {
		const request = async () => {
			try {
				setState((draftSt) => {
					draftSt.loading = true
				})

				const photos = await requestCuriosityPhotos(state.queries)
				setState((draftSt) => {
					draftSt.photos = photos
				})
			} catch (e) {
				setState((draftSt) => {
					draftSt.failed = true
				})
			} finally {
				setState((draftSt) => {
					draftSt.loading = false
				})
			}
		}

		request()
	}, [state.queries])

	console.log(state.queries)

	const setPage = (newPage: number) =>
		setState((draftSt) => {
			draftSt.queries.page = newPage
		})

	const setDate = (newDate: string) =>
		setState((draftSt) => {
			draftSt.queries.date = newDate
		})

	return {
		state,
		setPage,
		setDate,
	}
}

export default useSearchPhotos
