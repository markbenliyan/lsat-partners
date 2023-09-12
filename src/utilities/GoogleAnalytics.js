export const GA_MEASUREMENT_ID = 'G-RETXTWBWWZ';

// Log the pageview with their URL
export const pageview = (url) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
