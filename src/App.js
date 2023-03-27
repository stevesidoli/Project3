import './App.css';
import WeatherInfo from './components/WeatherInfo.js';

function App() {
  return (
    <div className="app">
      <section className="contentBox">
        <header class="wrapper">
          <h1>Toronto Weather App</h1>
          <h2>If you don't like the weather here, stick around an hour...</h2>
        </header>
        <WeatherInfo />
      </section>
    </div>
  );
}

export default App;
