import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <body className="flex flex-col min-h-screen">
      <Head>
        <title>robin rocks 🤘</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow bg-gray-600">
        <div className="flex justify-center bg-gray-800 py-10">
          <Header title="Welcome 👋" />
        </div>
        <div className="flex justify-center pt-10">
          <p className="font-sans text-2xl text-white">Under construction</p>
        </div>
        <div className="flex justify-center pt-5">
          <p className="text-9xl">🚧</p>
        </div>
      </main>

      <Footer />
    </body>
  );
}
