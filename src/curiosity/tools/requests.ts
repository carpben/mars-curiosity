import axios from "axios"
import { format, subDays } from "date-fns"
import { now } from "lodash"
import { axiosFetch } from "../../general/utils/fetch"
import weatherAPI, { WeatherQueries } from "../../weatherAPI"
import { Photo } from "./types"

const API_KEY = "qLPoCxviAALdxi5RLgnbwC9k1o07UEQv1o5b7nMu"

interface PhotosData {
	photos: Photo[]
}

interface ImageQuery {
	date: string
	page: number
}

export const requestCuriosityPhotos = async ({ date, page }: ImageQuery) => {
	const data = await axiosFetch<PhotosData>({
		url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${API_KEY}&page=${page}`,
	})
	return data.photos
}

export const requestCuriosityWeather = (queries: WeatherQueries) => weatherAPI.get(queries)
