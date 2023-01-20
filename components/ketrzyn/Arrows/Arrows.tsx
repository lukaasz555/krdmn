import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { useEffect, useState } from 'react';

type ArrowProps = {
	onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const ArrowLeft = ({ onClick }: ArrowProps) => {
	const dimensions = useWindowSize();
	const [width, setWidth] = useState<number>(0);

	useEffect(() => {
		setWidth(dimensions.width);
		console.log(width);
	}, [dimensions]);

	return (
		<button
			style={{
				position: 'absolute',
				left: width <= 768 ? '0' : '0.25em',
				top: '50%',
				zIndex: '20',
				fontSize: width <= 768 ? '24px' : '36px',
				color: 'rgba(255, 255,255, 0.6)',
				border: 'none',
				background: 'transparent',
				cursor: 'pointer',
			}}
			onClick={onClick}>
			<FontAwesomeIcon icon={faArrowLeft} />
		</button>
	);
};

export const ArrowRight = ({ onClick }: ArrowProps) => {
	const dimensions = useWindowSize();
	const [width, setWidth] = useState<number>(0);

	useEffect(() => {
		setWidth(dimensions.width);
		console.log(width);
	}, [dimensions]);

	return (
		<button
			style={{
				position: 'absolute',
				right: width <= 768 ? '0' : '0.25em',
				top: '50%',
				zIndex: '20',
				fontSize: width <= 768 ? '24px' : '36px',
				color: 'rgba(255, 255,255, 0.6)',
				border: 'none',
				background: 'transparent',
				cursor: 'pointer',
			}}
			onClick={onClick}>
			<FontAwesomeIcon icon={faArrowRight} />
		</button>
	);
};
