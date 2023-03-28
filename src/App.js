import './App.css';
import WeatherInfo from './components/WeatherInfo.js';

function App() {
  return (
    <div className="app">
      <section className="opacityBox">
        <div className="contentBox">
        <header className="wrapper">
          <h1>The Toronto Temperature App</h1>
          <h2>"If you don't like the temperature here, stick around an hour..."</h2>
        </header>
        <WeatherInfo />
        </div>
      </section>
    </div>
  );
}

export default App;
