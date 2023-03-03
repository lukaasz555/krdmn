export const handleCategoryNames = (item: string) => {
	switch (item) {
		case '1':
			return 'Przystawki';
		case '2':
			return 'Zupy';
		case '3':
			return 'Sałaty';
		case '4':
			return 'Dania główne';
		case '5':
			return 'Dla dzieci';
		case '6':
			return 'Desery';
		case '7':
			return 'Pizza';
		default:
			return null;
	}
};
