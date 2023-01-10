import React, { useEffect, useState } from 'react';
import styles from './News.module.scss';
import { InstagramEmbed } from 'react-social-media-embed';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

interface IFeed {
	id: string;
	media_url: string;
	permalink: string;
}

const News = ({ feed }: any) => {
	const displayPosts = feed.data.slice(0, 6);

	return (
		<section className={styles.section_news}>
			<header className={styles.news_head}>
				<h3>Aktualności</h3>
			</header>
			<div className={styles.news_container}>
				{displayPosts ? (
					displayPosts.map((item: IFeed) => (
						<div key={item.id} className={styles.news_item}>
							<Link href={item.permalink}>
								<img
									src={item.media_url}
									style={{ height: '100%', width: '100%', objectFit: 'cover' }}
								/>
							</Link>
						</div>
					))
				) : (
					<p>brak postów?</p>
				)}
			</div>
		</section>
	);
};

export default News;
