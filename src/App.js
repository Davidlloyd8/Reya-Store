import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="checkout/:slug" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
