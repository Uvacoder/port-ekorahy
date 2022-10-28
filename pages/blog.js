import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function blog() {
  return (
    <>
    <Head>
      <title>Ekorahy | Blog</title>
      <meta
          name="description"
          content="Ekorahy Blog is a technology blog that provides updated content about technological developments"
        />
        <link rel="shortcut icon" href="/favicon.png" />
    </Head>
    <main className="py-20">
    <div className="w-full h-full p-8 text-center">
      <h2 className="font-Kanit font-bold text-primary text-lg">Opps.. Sorry :(</h2>
      <h2 className="font-Kanit font-semibold text-lg text-primary">This page is under development</h2>
      <p className="my-2 font-Quicksand font-thin text-sm text-secondary">Please Try again later . . .</p>
        <div className="inline-block my-4 lg:mx-auto">
            <Image src="/illustration_of_development.png" height={450} width={450} className="rounded" alt="Profile Image" />
          </div>
          <Link href="/"><a className="bg-primary text-white font-Quicksand text-sm py-2 px-4 rounded">Back to Home</a></Link>
        </div>
    </main>
    </>
  );
}

export default blog;