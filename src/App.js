import logo from './logo.png';
import './App.css';
import Currency from './components/Currency';

function App() {
  return (
    <div className='App'>
      <div className='app-container'>
        <div className='card'>
          <header className='logo'>
            <img src={logo} alt='logo' />
            <h2>Ethereum</h2>
            <h5>ETH</h5>
          </header>
          <section className='currency-convertor'>
            <Currency></Currency>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
