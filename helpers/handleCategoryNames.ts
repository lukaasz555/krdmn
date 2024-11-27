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
		case '8':
			return 'Herbaty';
		case '9':
			return 'Kawy';
		case '10':
			return 'Czekolady';
		case '11':
			return 'Napoje zimne';
		case '12':
			return 'Piwo';
		case '13':
			return 'Piwo 0%';
		case '14':
			return 'Grzańce';
		case '15':
			return 'Wina białe';
		case '16':
			return 'Wina czerwone';
		case '17':
			return 'Wina musujące';
		case '18':
			return 'Drinki';
		case '19':
			return 'Wódki';
		case '20':
			return 'Likiery/vermuthy';
		case '21':
			return 'Whisky/Brandy';
		case '22':
			return 'Gin/Tequila/Rum';
		case '23':
			return 'Pierogi';
		case '24':
			return 'Burgery';
		default:
			return '';
	}
};
