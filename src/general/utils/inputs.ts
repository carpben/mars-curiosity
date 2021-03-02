import { ChangeEvent } from "react"

export const getValFromEvent = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => e.target.value

export const getValFromSelectEvent = (e: ChangeEvent<HTMLSelectElement>) => e.currentTarget.value
