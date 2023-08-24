import './App.css';
import './Navbar.css';
import './Header.css';
import Navbar from './Navbar.js';
import Header from './Header.js';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="App">
        <p>This should just be plain text.</p>
      </div>
    </>
  );
}

export default App;
