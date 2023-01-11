import style from './layout.module.scss';
import TopNav from '../../components/olsztyn/TopNav/TopNav';
import Footer from '../../components/olsztyn/Footer/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<section className={style.layout_wrapper}>
			<TopNav />
			<main className={style.layout_content}>{children}</main>
			<Footer />
		</section>
	);
};

export default Layout;
