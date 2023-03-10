import styles from './Card.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/ketrzyn/fav.png';

const CardKetrzyn = () => {
	return (
		<article className={styles.card__wrapper}>
			<section className={styles.card__content}>
				<header className={styles.card__top}>
					<Link href={`/ketrzyn`}>
						<Image
							src={Logo}
							alt='Restauracja Kardamon - Kętrzyn, Plac marszałka Piłsudskiego 1'
							fill={true}
						/>
					</Link>
				</header>
				<Link href={`/ketrzyn`}>
					<h2 className={styles.card__header}>Kardamon Kętrzyn</h2>
				</Link>
				<div className={styles.card__data}>
					<p>Plac marszałka Piłsudskiego 1</p>
					<p>11-400 Kętrzyn</p>
				</div>
				<div className={styles.card__contact}>
					<Link href={`tel:897511022`} className={styles.card__link}>
						89 751 10 22
					</Link>
					<Link href={`tel:+48518518155`} className={styles.card__link}>
						+48 518 518 155
					</Link>
				</div>
			</section>
			<section className={styles.card__bottom}>
				<Link href={`/ketrzyn`}>
					wybieram{' '}
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

export default CardKetrzyn;
