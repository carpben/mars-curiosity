export const getArr = <T extends object>(length: number, func: (i: number) => T): T[] =>
	Array.from(new Array(length)).map((_, i) => func(i))

export const reliablyGetKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>
