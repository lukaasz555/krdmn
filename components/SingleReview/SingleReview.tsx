import React from 'react';
import styles from './SingleReview.module.scss';

interface ISingleReview {
	reviewContent: string;
	reviewAuthor: string;
}

const SingleReview = ({ reviewContent, reviewAuthor }: ISingleReview) => {
	return (
		<div className={styles.review}>
			<p>{reviewContent}</p>
			<p
				style={{
					fontWeight: '500',
					fontFamily: 'Merriweather',
					fontSize: '1.2em',
				}}>
				{reviewAuthor}
			</p>
		</div>
	);
};

export default SingleReview;
