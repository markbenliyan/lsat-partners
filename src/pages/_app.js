// _app.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { pageview } from '../utilities/GoogleAnalytics';
import RootLayout from '../layouts/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      // Call the pageview function whenever the route changes
      pageview(url);
    };

    // When the component is mounted, subscribe to router changes
    // and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe from the event
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
