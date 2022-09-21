import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomeTemplate from './Templates/HomeTemplate';
import CollectionTemPlate from './Templates/CollectionTemplate';
import SearchTemplate from './Templates/SearchTemplate';
import CartTemplate from './Templates/CartTemplate';
import ProductTemplate from './Templates/ProductTemplate';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeTemplate />} />
          <Route path='/collection' element={<CollectionTemPlate />} />
          <Route path='/product' element={<ProductTemplate />} />
          <Route path='/search' element={<SearchTemplate />} />
          <Route path='/cart' element={<CartTemplate />} />
          <Route path="*" element={<h1>404 Not Found !</h1>} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
