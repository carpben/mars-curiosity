export const getArr = <T extends object>(length: number, func: (i: number) => T): T[] =>
	Array.from(new Array(length)).map((_, i) => func(i))
