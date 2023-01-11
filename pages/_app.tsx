import type { AppProps } from 'next/app';
import '../styles/olsztyn/global.scss';

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
