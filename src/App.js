import './App.scss';
import Routes from './Routes';
import Header from './components/Header';
import { GlobalProvider } from './hooks/useGlobalContext'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Routes />
      </GlobalProvider>
    </div>
  );
}

export default App;
