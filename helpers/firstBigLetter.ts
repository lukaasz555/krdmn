export const firstBigLetter = (data: string) => {
	const arr = Array.from(data);
	const letter = arr.splice(0, 1);
	arr.unshift(letter[0].toUpperCase());
	return String(arr.join(''));
};
