import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSquareFacebook,
	faSquareInstagram,
} from '@fortawesome/free-brands-svg-icons';
import styles from './Socials.module.scss';

const Socials = ({ address }: { address: string }) => {
	return (
		<div className={styles.socialmedia_icons}>
			<Link
				href={
					address === 'olsztyn'
						? `https://www.facebook.com/kardamonolsztyn`
						: `https://www.facebook.com/profile.php?id=100063684725171`
				}>
				<FontAwesomeIcon icon={faSquareFacebook} className={styles.icon} />
			</Link>
			<Link href={`https://www.instagram.com/kardamon.${address}/`}>
				<FontAwesomeIcon icon={faSquareInstagram} className={styles.icon} />
			</Link>
		</div>
	);
};

export default Socials;
