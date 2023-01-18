import React, { useState } from 'react';
import styles from './Gallery.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Pic1 from '../../../public/ketrzyn/gal1.jpeg';
import Pic2 from '../../../public/ketrzyn/gal2.jpeg';
import Pic3 from '../../../public/ketrzyn/gal3.jpeg';
import { useWindowSize } from '../../../hooks/useWindowSize';
import LightGallery from 'lightgallery/react';
//
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import 'lightgallery/css/lg-thumbnail.css';

const Gallery = () => {
	const { width } = useWindowSize();
	const pics = [Pic1, Pic2, Pic3];

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<LightGallery speed={300} elementClassNames={styles.gallery}>
				{pics.map(({ src }) => (
					<Link href={src} key={src} className={styles.gallery_item}>
						<Image src={src} alt='' height={380} width={320} />
					</Link>
				))}
			</LightGallery>
		</div>
	);
};

export default Gallery;
