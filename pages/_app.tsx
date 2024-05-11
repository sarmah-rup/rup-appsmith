import { AppProps } from 'next/app';
import '../app/ui/global.css'; // Import your global CSS file

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
