import Menu from './components/Menu';
import style from './layout.module.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<section className={style.layout_wrapper}>
			<Menu />
			<main>{children}</main>
		</section>
	);
};

export default Layout;
