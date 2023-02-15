import './App.css';
import Calculator from './components/calculator/calculator';
import Counter from './components/counter/counter';
import ProductList from './components/product-list/product-list';
import Header from './containers/header/header';

import products from './data/products.json';

function App() {
  return (<>
    <Header />
    <div className="App">

      <h2>Exo 02 - Collection</h2>
      <ProductList products={products} />

      <h2>Exo 03 - Event & State</h2>
      <Counter />
      <Counter step={5} />

      <h2>Formulaire</h2>
      <Calculator />

    </div>
  </>);
}

export default App;
