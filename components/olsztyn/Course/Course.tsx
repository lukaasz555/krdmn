import React from 'react';
import styles from './Course.module.scss';

const Course = ({ name, desc, price }: any) => {
	return (
		<div className={styles.course}>
			<div className={styles.course_left}>
				<p className={styles.course_left_title}>{name}</p>
				<p className={styles.course_left_desc}>{desc}</p>
			</div>

			<div className={styles.course_right}>
				<p>{Number(price)}zł</p>
			</div>
		</div>
	);
};

export default Course;
