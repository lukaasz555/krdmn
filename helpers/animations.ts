import { gsap } from 'gsap';

export const slideFromBottom = (id: string) => {
	gsap.fromTo(
		id,
		{
			opacity: 0,
			transform: 'translateY(10%)',
			zIndex: -99,
		},
		{
			opacity: 1,
			transform: 'translateY(0)',
			zIndex: 0,
			duration: 1,
		}
	);
};
