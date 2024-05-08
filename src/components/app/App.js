import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CryptoPage from '../pages/CryptoPage';
import BirgeList from '../exchangesList/birgeList';
import MainContent from '../mainContent/MainContent';
import CryptoInfo from '../cryptoInfo/CryptoInfo';
import ExchangeInfo from '../exchangesInfo/ExchangeInfo';
import './App.css';
import AppHeader from '../appHeader/AppHeader';


function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <main className='bg-gray-100 w-full flex '>
          <Routes>
            <Route path="/main" element={<MainContent />} />
            <Route path="/crypto" element={<CryptoPage />} />
            <Route path='/crypto/:cryptoId' element={<CryptoInfo/>}></Route>
            <Route path="/exchanges" element={<BirgeList />}></Route>
            <Route path='/exchange/:id' element={<ExchangeInfo/>}></Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
