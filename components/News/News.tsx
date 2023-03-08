import React, { useEffect, useState, useRef } from 'react';
import styles from './News.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useWindowSize } from '../../hooks/useWindowSize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSquareFacebook,
	faSquareInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FeedProps } from '../../helpers/interfaces';
import InstagramFeed from '../InstagramFeed/InstagramFeed';
import Greetings from '../Greetings/Greetings';

const News = ({ feed, address }: { feed: FeedProps[]; address: String }) => {
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

	/* 	useEffect(() => {
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
	}, []); */

	return (
		<section className={styles.section_news}>
			<header className={styles.news_head}>
				<h3>Aktualności</h3>
			</header>
			<div className={styles.news_container}>
				{feed ? (
					<InstagramFeed centerSlides={centerSlides} feed={feed} />
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
								<Link
									href={
										address === 'olsztyn'
											? `https://www.facebook.com/kardamonolsztyn`
											: `https://www.facebook.com/profile.php?id=100063684725171`
									}>
									<FontAwesomeIcon
										icon={faSquareFacebook}
										style={{ height: '20px', color: '#232832' }}
									/>
								</Link>
								<Link
									href={
										address === 'olsztyn'
											? `https://www.instagram.com/kardamon.olsztyn/`
											: `https://www.instagram.com/kardamon.ketrzyn/`
									}>
									<FontAwesomeIcon
										icon={faSquareInstagram}
										style={{ height: '20px', color: '#232832' }}
									/>
								</Link>
							</div>
						</div>
					</div>
				)}
			</div>
			{address === 'olsztyn' ? null : <Greetings />}
		</section>
	);
};

export default News;
