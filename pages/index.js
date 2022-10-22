import Head from 'next/head';
import React from 'react';
import Hero from '../components/Hero';

function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Eko Rahayu Widodo</title>
        <meta
          name="description"
          content="Front-end Web developer portfolio | make your website modern and minimalist using React.js."
        />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <main>
        <Hero />
      </main>
    </>
  );
}

export default Home;