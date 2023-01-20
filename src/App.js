import Layout from "./components/Layout";
import CardList from "./components/CardList";
import products from "./content/Products.json";
import "./styles/App.css"

export default function App() {

  console.log(products.products);

  return (
    <div className="app">
      <Layout>
        <CardList items={products.products} />
      </Layout>
    </div>
  );
}