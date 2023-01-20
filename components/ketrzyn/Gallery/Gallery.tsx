import React, { useEffect, useState } from 'react';
import styles from './Gallery.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Pic1 from '../../../public/ketrzyn/gal1.jpeg';
import Pic2 from '../../../public/ketrzyn/gal2.jpeg';
import Pic3 from '../../../public/ketrzyn/gal3.jpeg';
import Lightbox, { ImagesListType } from 'react-spring-lightbox';
import { ArrowLeft, ArrowRight } from '../Arrows/Arrows';

const Gallery = () => {
	const data: ImagesListType = [
		{
			src: Pic1.src,
			loading: 'lazy',
			alt: '',
		},
		{
			src: Pic2.src,
			loading: 'lazy',
			alt: '',
		},
		{
			src: Pic3.src,
			loading: 'lazy',
			alt: '',
		},
	];

	const [activeIndex, setActiveIndex] = useState(0);
	const [isOpen, setOpen] = useState(false);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const target = e.target as Element;
		if (target.id) {
			setActiveIndex(Number(target.id));
			setOpen(true);
		}
	};

	const nextImg = () =>
		activeIndex + 1 < data.length && setActiveIndex(activeIndex + 1);
	const prevImg = () => activeIndex > 0 && setActiveIndex(activeIndex - 1);
	const handleClose = () => setOpen(false);

	return (
		<>
			<Lightbox
				isOpen={isOpen}
				onNext={nextImg}
				onPrev={prevImg}
				currentIndex={activeIndex}
				images={data}
				style={{ background: 'rgba(0, 0, 0, 0.85)' }}
				renderPrevButton={() =>
					activeIndex !== 0 ? <ArrowLeft onClick={prevImg} /> : null
				}
				renderNextButton={() =>
					activeIndex + 1 !== data.length ? (
						<ArrowRight onClick={nextImg} />
					) : null
				}
				onClose={handleClose}
			/>
			<div>
				<div className={styles.gallery}>
					{data.map(({ src }, i) => (
						<button
							className={styles.gallery_item}
							key={src}
							tabIndex={-1}
							onClick={handleClick}>
							<Image
								src={src}
								alt=''
								height={380}
								width={320}
								style={{ borderRadius: '4px' }}
								id={String(i)}
							/>
						</button>
					))}
				</div>
			</div>
		</>
	);
};

export default Gallery;