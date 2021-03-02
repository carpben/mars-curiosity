import axios, { AxiosRequestConfig } from "axios"

export const axiosFetch = async <T>(config: AxiosRequestConfig): Promise<T> => {
	const res = await axios(config)
	return res.data
}
