import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FeedProps } from '../../helpers/interfaces';
import styles from '../News/News.module.scss';
import Image from 'next/image';
import Link from 'next/link';

type InstagramFeedProps = {
	centerSlides: boolean;
	feed: FeedProps[];
};

const InstagramFeed = ({ centerSlides, feed }: InstagramFeedProps) => {
	return (
		<Swiper
			className='mySwiper'
			centeredSlides={centerSlides}
			slidesPerView={4.2}>
			{feed.map((item: FeedProps) => (
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
	);
};

export default InstagramFeed;
