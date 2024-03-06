import React from 'react';
import Head from 'next/head';
import * as userInfo from './index';

const About: React.FC = () => {
    const name = userInfo;
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="\'About\' Description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>About</h1>
        <p>Welcome to your Next.js app.</p>
      </main>

      <footer>
        <p>Footer content goes here.</p>
      </footer>
    </div>
  );
};

export default About;