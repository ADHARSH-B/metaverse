import './App.css';
import Auth from './components/Moralis_Authentication/Auth';
import { MoralisProvider } from "react-moralis";
function App() {
  return (
    <MoralisProvider appId="Cw2XOQVnfptT7SbBouFjeAZt9P2BK3OaVoG98qyJ" serverUrl="https://mfaocdoyxwpv.usemoralis.com:2053/server">
    <div className="App">
      <Auth/>
    </div>
    </MoralisProvider>
  );
}

export default App;
