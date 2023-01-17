import React from 'react';
import styles from './layout.module.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return <main className={styles.layout_wrapper}>{children}</main>;
};

export default Layout;
