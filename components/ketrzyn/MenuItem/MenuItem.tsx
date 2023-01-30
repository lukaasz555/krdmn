import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { handleCatName } from '../../../helpers/handleCatName';
import { ICourse } from '../../../models/Courses';
import styles from './MenuItem.module.scss';

interface MenuItemProps {
	title: string;
	items: ICourse[];
}

const MenuItem = ({ title, items }: MenuItemProps) => {
	const [isOpen, setOpen] = useState(false);

	return (
		<div className={styles.menuItem_wrapper}>
			<button className={styles.category} onClick={() => setOpen(!isOpen)}>
				<p className={styles.category_name}>{handleCatName(title)}</p>
				<span className={isOpen ? styles.category_name_btn_active : `null`}>
					<FontAwesomeIcon icon={faPlus} color='#d5a021' size={'2xl'} />
				</span>
			</button>
			{isOpen ? (
				<ul className={styles.list}>
					{items
						.sort((a: ICourse, b: ICourse) => Number(a.price) - Number(b.price))
						.map(({ name, price, desc, id }: Omit<ICourse, 'category'>) => (
							<>
								<li key={id} className={styles.item}>
									<div className={styles.item_title}>
										<p className={styles.item_title_name}>{name}</p>
										{price !== 999 ? <p>{String(price)} zł</p> : null}
									</div>
									<div>
										<p className={styles.item_desc}>{desc}</p>
									</div>
								</li>
							</>
						))}
				</ul>
			) : null}
		</div>
	);
};

export default MenuItem;
