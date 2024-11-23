import style from './layout.module.scss';
import TopNav from '../../components/TopNav/TopNav';
import Footer from '../../components/Footer/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<section className={style.layout_wrapper}>
			<TopNav address='olsztyn' />
			<main className={style.layout_content}>{children}</main>
			<Footer address='olsztyn' />
		</section>
	);
};

export default Layout;
