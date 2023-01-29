import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from '../Menu/Menu.module.scss';
import { handleCatName } from '../../../helpers/handleCatName';
import { ICourse } from '../../../models/Courses';

interface MenuItemProps {
	title: string;
}

const MenuItem = ({ title, courses }: { title: string; courses: any }) => {
	const [isOpen, setOpen] = useState(false);

	return (
		<div>
			<button className={styles.category} onClick={() => setOpen(!isOpen)}>
				<p className={styles.category_name}>{handleCatName(title)}</p>
				{isOpen ? (
					<FontAwesomeIcon icon={faMinus} color='#d5a021' size={'2xl'} />
				) : (
					<FontAwesomeIcon icon={faPlus} color='#d5a021' size={'2xl'} />
				)}
			</button>
			{isOpen ? (
				<ul>
					{courses
						.sort((a: ICourse, b: ICourse) => Number(a.price) - Number(b.price))
						.map(({ name, price, desc }: Omit<ICourse, 'id' | 'category'>) => (
							<>
								<li>
									<div>
										<p>{name}</p>
										<p>{String(price)}zł</p>
									</div>
									<div>{desc}</div>
								</li>
							</>
						))}
				</ul>
			) : null}
		</div>
	);
};

export default MenuItem;
