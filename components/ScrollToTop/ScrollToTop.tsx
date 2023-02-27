import React, { useEffect, useState } from 'react';
import styles from './ScrollToTop.module.scss';
import Image from 'next/image';
import Arrow from '../../public/olsztyn/arrow.png';

const ScrollToTop = () => {
	const [isVisible, setVisibile] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > window.innerHeight) {
				setVisibile(true);
			}
			if (window.scrollY < window.innerHeight) {
				setVisibile(false);
			}
		});
	}, []);

	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<>
			{isVisible ? (
				<button onClick={handleClick} className={styles.button_top}>
					<Image src={Arrow} alt='Scroll to top' height={30} width={30} />
				</button>
			) : null}
		</>
	);
};

export default ScrollToTop;
