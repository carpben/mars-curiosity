import { createBrowserHistory } from "history"
import { pick } from "lodash"
import qs from "qs"
import { useState } from "react"
import { useMountEffect } from "../../general/componentLifecycle"
import { QueryObj } from "../../general/types"
import { CuriosityPage } from "./CuriosityPage"

export const history = createBrowserHistory()

interface UrlState {
	page: CuriosityPage
}

const urlStateDefault = {
	page: CuriosityPage.ABOUT,
}

export const getUrlQueryObj = () =>
	qs.parse(history.location.search, {
		ignoreQueryPrefix: true,
		arrayLimit: 40,
	})

const getUrlState = () => ({ ...urlStateDefault, ...pick(getUrlQueryObj(), Object.keys(urlStateDefault)) })
//@ts-ignore
window.test = getUrlState

const setUrl = (urlState: UrlState) => {
	history.push({
		search: qs.stringify(urlState, {
			addQueryPrefix: true,
		}),
	})
}

export const useUrlState = () => {
	const [urlState, setUrlState] = useState(getUrlState())

	useMountEffect(() => history.listen(() => setUrlState(getUrlState())))

	return [urlState, setUrl] as const
}
