import "../styles/app.css"
import Layout from "../components/Layout.js";
import CardList from "../components/CardList.js";
import products from "../content/Products.json";

import Head from "next/head";

export default function App() {

  //console.log(products.products);

  return (
    <div className="app">
        <Head>
            <title>EstraLabs Shop</title>
        </Head>
        <Layout>
            <CardList items={products.products} />
        </Layout>
    </div>
  );
}
