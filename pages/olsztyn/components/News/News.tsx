import React, { useEffect, useState } from 'react';
import styles from './News.module.scss';
import { InstagramEmbed } from 'react-social-media-embed';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useWindowSize } from '../../hooks/useWindowSize';
import Socials from '../Socials/Socials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSquareFacebook,
	faSquareInstagram,
} from '@fortawesome/free-brands-svg-icons';

interface IFeed {
	id: string;
	media_url: string;
	permalink: string;
}

const News = ({ feed }: any) => {
	const { width } = useWindowSize();
	const [centerSlides, setCenterSlides] = useState(true);

	useEffect(() => {
		if (width > 768) {
			setCenterSlides(false);
		} else {
			setCenterSlides(true);
		}
	}, [width]);

	return (
		<section className={styles.section_news}>
			<header className={styles.news_head}>
				<h3>Aktualności</h3>
			</header>
			<div className={styles.news_container}>
				{feed.data ? (
					<Swiper
						className='mySwiper'
						centeredSlides={centerSlides}
						slidesPerView={4.2}>
						{feed.data.map((item: IFeed) => (
							<SwiperSlide key={item.id} className={styles.news_item}>
								<Link href={item.permalink} className={styles.news_item_link}>
									<Image
										src={item.media_url}
										height={260}
										width={260}
										alt={item.permalink}
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
