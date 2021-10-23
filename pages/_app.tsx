import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import AppProvider from '../src/contexts/Provider';
import { Header } from '../src/components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Header />
      <Component {...pageProps} />
    </AppProvider>
  );
}
export default MyApp;
