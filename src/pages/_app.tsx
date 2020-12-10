import 'tailwindcss/tailwind.css';
import '../styles/styles.css';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;