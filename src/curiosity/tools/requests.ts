import axios from "axios"
import { format, subDays } from "date-fns"
import { now } from "lodash"
import { axiosFetch } from "../../general/fetch"
import { Photo } from "./types"

const API_KEY = "qLPoCxviAALdxi5RLgnbwC9k1o07UEQv1o5b7nMu"

interface PhotosData {
	photos: Photo[]
}

export const requestCuriosityPhotos = async (date: Date = subDays(new Date(), 2), page: number = 1) => {
	const formatedDate = format(date, "yyyy-MM-dd")
	console.log(formatedDate)
	const data = await axiosFetch<PhotosData>({
		url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${formatedDate}&api_key=${API_KEY}&page={page}`,
	})
	return data.photos
}
