function App() {
  console.log(process.env.REACT_APP_NASA_API_KEY);
  return (
    <div className="App">
      <p>Hello world</p>
      <p>API key: {process.env.REACT_APP_NOT_SECRET_CODE}</p>
    </div>
  );
}

export default App;
