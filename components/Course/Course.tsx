import React from 'react';
import styles from './Course.module.scss';

type CourseProps = {
	name: string;
	desc?: string;
	price: Number;
};

const Course = ({ name, desc, price }: CourseProps) => {
	return (
		<div className={styles.course}>
			<div className={styles.course_left}>
				<p className={styles.course_left_title}>{name}</p>
				<p className={styles.course_left_desc}>{desc}</p>
			</div>

			<div className={styles.course_right}>
				<p>{Number(price) === 999 ? null : `${price}zł`}</p>
			</div>
		</div>
	);
};

export default Course;
