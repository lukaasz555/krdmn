import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

type ArrowProps = {
	onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const ArrowLeft = ({ onClick }: ArrowProps) => (
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

export const ArrowRight = ({ onClick }: ArrowProps) => (
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
