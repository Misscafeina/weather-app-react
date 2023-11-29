function App() {
  //const url='https://api.openweathermap.org/data/2.5/weather?q=mijas&appid=42171026e534ffc7a13395ee06964088'
  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Mijas</p>
          </div>
          <div className="temp">
            <h1>18 °C</h1>
          </div>
          <div className="Clouds"></div>
        </div>
      </div>
      <div className="bottom">
        <div className="feels">
          <p>19 °C</p>
        </div>
        <div className="humidity">
          <p>74%</p>
        </div>
        <div className="wind">
          <p>14 km/h</p>
        </div>
      </div>
    </div>
  );
}

export default App;
