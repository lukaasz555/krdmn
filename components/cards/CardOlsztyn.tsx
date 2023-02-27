import styles from './Card.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/olsztyn/fav.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faA, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CardOlsztyn = () => {
	return (
		<article className={styles.card__wrapper}>
			<section className={styles.card__content}>
				<header className={styles.card__top}>
					<Image
						src={Logo}
						alt='Restauracja Kardamon - Kętrzyn, Plac marszałka Piłsudskiego 1'
						fill={true}
					/>
				</header>
				<h2 className={styles.card__header}>Kardamon olsztyn</h2>
				<div className={styles.card__data}>
					<p>Żołnierska 4</p>
					<p>10-557 Olsztyn</p>
				</div>
				<div className={styles.card__contact}>
					<Link href={`tel:+48536848483`} className={styles.card__link}>
						+48 536 848 483
					</Link>
				</div>
			</section>
			<section className={styles.card__bottom}>
				<Link href={`/olsztyn`}>
					wybieram
					<svg
						className='ml-2 group-hover:translate-x-1 duration-200 rotate-180'
						width='22'
						height='22'
						xmlns='http://www.w3.org/2000/svg'
						fillRule='evenodd'
						clipRule='evenodd'>
						<path d='M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z' />
					</svg>
				</Link>
			</section>
		</article>
	);
};

export default CardOlsztyn;
