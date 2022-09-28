import './App.css';
import { Header } from './components/Header';
import { CryptoList } from './components/CryptoList';
import { Footer } from './components/Footer';
function App() {
  return (
    <div className="main">
      <Header/>
      <CryptoList/>
      <Footer/>
    </div>
  );
}

export default App;