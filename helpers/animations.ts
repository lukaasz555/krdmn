import { gsap } from 'gsap';

export const slideFromBottom = (id: string) => {
	gsap.fromTo(
		id,
		{
			opacity: 0,
			transform: 'translateY(10%)',
		},
		{
			opacity: 1,
			transform: 'translateY(0)',
			duration: 1,
		}
	);
};
