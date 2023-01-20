import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const getPosition = () => {
			setScrollPosition(window.scrollY);
		};
		window.addEventListener('scroll', getPosition);
		getPosition();
		return () => window.removeEventListener('scroll', getPosition);
	}, []);

	return scrollPosition;
};
