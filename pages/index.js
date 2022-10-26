import Head from 'next/head';
import React from 'react';
import About from '../components/About';
import Certificates from '../components/Certificates';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import TechStack from '../components/TechStack';

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
      <main className="bg-white relative md:py-10 md:container">
        <Hero />
        <About />
        <TechStack />
        <Portfolio />
        <Certificates />
      </main>
    </>
  );
}

export default Home;