import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import Link from "next/link";

function underConstruction() {
  return (
    <div>
      <Head>
        <title>Under Construction</title>
        <meta name="description" content="cosmetic website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1 className="font-body font-bold text-5xl text-center mt-72 mb-20 leading-extra-large">
        THIS PAGE IS UNDER CONSTRUCTION.<br></br> THANK YOU!
      </h1>
      <Link href="/">
        <p className="font-body font-medium text-center uppercase text-xs cursor-pointer hover:text-gray-500">
          Back to HOME
        </p>
      </Link>

      <Footer />
    </div>
  );
}

export default underConstruction;
