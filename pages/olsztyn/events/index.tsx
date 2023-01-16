import React, { useEffect } from 'react';
import Head from 'next/head';
import styles from './events.module.scss';
import Layout from '../layout';
import { slideFromBottom } from '../../../helpers/animations';
import Image from 'next/image';
import EventPic from '../../../public/olsztyn/4.jpeg';

const Events = () => {
	useEffect(() => {
		slideFromBottom('#events');
	}, []);

	return (
		<>
			<Head>
				<title>Przyjęcia | Kardamon Olsztyn</title>
				<meta
					name='description'
					content='Restauracja Kardamon znajduje się w Hotelu Villa Pallas, w centrum Olsztyna. Mamy ponad 10 lat doświadczenia w organizacji imprez.'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<section className={styles.events_wrapper} id='events'>
					<div className={styles.events_top}>
						<h3>Tytuł</h3>
						<div className={styles.events_top_desc}>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
								corrupti, nobis sunt facere exercitationem excepturi ullam
								distinctio velit cumque quidem modi deserunt minus accusantium
								saepe rem esse libero perferendis aliquam!
							</p>
						</div>
						<div className={styles.events_top_desc}>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Deleniti inventore, numquam possimus eum similique blanditiis
								quas delectus asperiores laudantium veniam alias nemo ex odit
								dolores dolorem quod et sit. Veritatis?
							</p>
						</div>
						<div className={styles.events_top_desc}>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Deleniti inventore, numquam possimus eum similique blanditiis
								quas delectus asperiores laudantium veniam alias nemo ex odit
								dolores dolorem quod et sit. Veritatis?
							</p>
						</div>
					</div>
					<div className={styles.events_bottom}>
						<Image
							src={EventPic}
							alt='Restauracja Kardamon - Olsztyn, Żołnierska 4'
							fill={true}
							quality={100}
						/>
					</div>
				</section>
			</Layout>
		</>
	);
};

export default Events;
