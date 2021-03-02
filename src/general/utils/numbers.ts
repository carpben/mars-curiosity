export const getRandomInRange = (min: number, max: number): number => {
	return Math.random() * (max - min + 1) + min
}

export const roundDigits = (num: number, digits: number): number => {
	const multiplier = 10 ** digits
	return Math.round(multiplier * num) / multiplier
}

export const round2Dec = (num: number) => roundDigits(num, 2)
export const round4Dec = (num: number) => roundDigits(num, 4)
