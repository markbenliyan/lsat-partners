import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_MEASUREMENT_ID } from '../utilities/GoogleAnalytics';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {GA_MEASUREMENT_ID && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              ></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_MEASUREMENT_ID}');
                  `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
