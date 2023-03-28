import './App.css';
import Form from './components/Form.js';
import TtcLogo from './assets/logo.png';

function App() {
  return (
    <div className="app">
      <section className="opacityBox">
          <header className="wrapper">
            <img src={TtcLogo} alt="Toronto Temperature Check Logo" height="175"></img>
            <h1>Toronto Temperature Check</h1>
            <h2>"If you don't like the weather here, stick around an hour..."</h2>
            </header>
            <h3 className="wrapper">The temperature now and an hour from now</h3>
          <Form />
      </section>
      <footer>
        <p>
          Created for <a href="https://junocollege.com/" target="_blank" rel="noreferrer">Juno College</a> by <a href="mailto:stevesidoli@gmail.com">Steve Sidoli.</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
