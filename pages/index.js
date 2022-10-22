import Head from 'next/head';
import React from 'react';

function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio | Eko Rahayu Widodo</title>
        <meta
          name="description"
          content="Front-end Web developer portfolio | make your website modern and minimalist using React.js."
        />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
    </div>
  );
}

export default Home;