import './App.css';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Toaster />
      <Navbar />
      <Products />
    </div>
  );
}

export default App;
