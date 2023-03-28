import './App.css';
import WeatherInfo from './components/WeatherInfo.js';
import Form from './components/Form.js';

function App() {
  return (
    <div className="app">
      <section className="opacityBox">
        <div className="contentBox">
        <header className="wrapper">
          <h1>Toronto Temperature Calculator</h1>
          <h2>"If you don't like the weather here, stick around an hour..."</h2>
          <h3 className="wrapper">Click here for Toronto Weather</h3>
        </header>
        <Form />
        {/* <WeatherInfo /> */}
        </div>
      </section>
    </div>
  );
}

export default App;
