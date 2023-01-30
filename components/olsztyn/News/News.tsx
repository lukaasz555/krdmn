import React, { useEffect, useState, useRef } from 'react';
import styles from './News.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSquareFacebook,
	faSquareInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FeedProps } from '../../../helpers/interfaces';

const News = ({ feed }: { feed: FeedProps[] }) => {
	const { width } = useWindowSize();
	const [centerSlides, setCenterSlides] = useState(true);

	useEffect(() => {
		if (width > 768) {
			setCenterSlides(false);
		} else {
			setCenterSlides(true);
		}
	}, [width]);

	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		gsap.fromTo(
			'#news',
			{ transform: 'translateY(50%)', zIndex: -10 },
			{
				transform: 'translateY(0)',
				duration: 1,
				zIndex: 0,
				scrollTrigger: {
					trigger: '#events',
					start: 'top',
					end: 'bottom',
				},
			}
		);
	}, []);

	return (
		<section className={styles.section_news} id='news'>
			<header className={styles.news_head}>
				<h3>Aktualności</h3>
			</header>
			<div className={styles.news_container}>
				{feed ? (
					<Swiper
						className='mySwiper'
						centeredSlides={centerSlides}
						slidesPerView={4.2}>
						{feed.map((item: any) => (
							<SwiperSlide key={item.id} className={styles.news_item}>
								<Link href={item.permalink} className={styles.news_item_link}>
									<Image
										src={item.media_url}
										height={260}
										width={260}
										alt={item.permalink}
										quality={80}
									/>
								</Link>
							</SwiperSlide>
						))}
					</Swiper>
				) : (
					<div>
						<p className={styles.news_message}>
							Niestety, nie udało się wczytać zawartości.
						</p>

						<div className={styles.news_socialmedia}>
							<p style={{ margin: '0.25em', fontSize: '1em' }}>
								Obserwuj nas i bądź na bieżąco!
							</p>
							<div style={{ display: 'flex', justifyContent: 'center' }}>
								<Link href={`https://www.facebook.com/kardamonolsztyn`}>
									<FontAwesomeIcon
										icon={faSquareFacebook}
										style={{ height: '20px', color: '#211c1e' }}
									/>
								</Link>
								<Link href={`https://www.instagram.com/kardamon.olsztyn/`}>
									<FontAwesomeIcon
										icon={faSquareInstagram}
										style={{ height: '20px', color: '#211c1e' }}
									/>
								</Link>
							</div>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default News;
