import React from 'react';
import styles from './Gallery.module.scss';
import Image from 'next/image';
import Pic1 from '../../../public/ketrzyn/gal1.jpeg';
import Pic2 from '../../../public/ketrzyn/gal2.jpeg';
import Pic3 from '../../../public/ketrzyn/gal3.jpeg';
import { useWindowSize } from '../../../hooks/useWindowSize';

const Gallery = () => {
	const { width } = useWindowSize();

	const pics = [Pic1, Pic2, Pic3];
	console.log(pics);

	return (
		<div className={styles.gallery}>
			{pics.map(({ src }) => (
				<div className={styles.gallery_item} key={src}>
					<Image src={src} alt='' height={380} width={320} />
				</div>
			))}
		</div>
	);
};

export default Gallery;
