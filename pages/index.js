import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import Banner from "../components/Banner";
import Section from "../components/Section";
import ProductList from "../components/ProductList";
import makeupProductList from "../components/makeupProductList";
import hairProductList from "../components/hairProductList";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cosmetic</title>
        <meta name="description" content="cosmetic website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <Section
        title={"Skincare"}
        brief={`It's about using ingredients that are vetted and verified`}
        textButton={"Shop All"}
        imagePath={"model-1.jpg"}
        flip={false}
      />
      <Section
        title={"Makeup"}
        brief={`Clean ingredients. Powerfull payoff`}
        textButton={"Shop All"}
        imagePath={"makeup.jpg"}
        flip={true}
      />
      <ProductList productList={makeupProductList} />
      <Section
        title={"Clean Hair Fares"}
        brief={`No synthetic fragrances. No parabens. Ever`}
        textButton={"Shop All"}
        imagePath={"hair.jpg"}
        flip={false}
      />
      <ProductList productList={hairProductList} />

      <Footer />
    </div>
  );
}
