import React, { useEffect, useState } from 'react';
import styles from './Gallery.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Pic1 from '../../../public/ketrzyn/gal1.jpeg';
import Pic2 from '../../../public/ketrzyn/gal2.jpeg';
import Pic3 from '../../../public/ketrzyn/gal3.jpeg';
import Lightbox, { ImagesListType } from 'react-spring-lightbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ArrowLeft = ({ onClick }: any) => (
	<button
		style={{
			position: 'absolute',
			left: '0.25em',
			top: '50%',
			zIndex: '20',
			fontSize: '44px',
			color: 'rgba(255, 255,255, 0.6)',
			border: 'none',
			background: 'transparent',
			cursor: 'pointer',
		}}
		onClick={onClick}>
		<FontAwesomeIcon icon={faArrowLeft} />
	</button>
);

const ArrowRight = ({ onClick }: any) => (
	<button
		style={{
			position: 'absolute',
			right: '0.25em',
			top: '50%',
			zIndex: '20',
			fontSize: '44px',
			color: 'rgba(255, 255,255, 0.6)',
			border: 'none',
			background: 'transparent',
			cursor: 'pointer',
		}}
		onClick={onClick}>
		<FontAwesomeIcon icon={faArrowRight} />
	</button>
);

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
				renderPrevButton={() => <ArrowLeft onClick={prevImg} />}
				renderNextButton={() => <ArrowRight onClick={nextImg} />}
				onClose={handleClose}
			/>
			<div>
				<div className={styles.gallery}>
					{data.map(({ src }, i) => (
						<div key={src} className={styles.gallery_item} id={String(i)}>
							<Image
								src={src}
								alt=''
								height={380}
								width={320}
								style={{ borderRadius: '4px' }}
								id={String(i)}
								onClick={(e: React.MouseEvent) => {
									setActiveIndex(Number(e.target.id));
									setOpen(true);
								}}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Gallery;
