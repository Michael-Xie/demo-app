import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(true);
  useEffect(() => {
    if (refresh)
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NOT_SECRET_CODE}&count=5`
        )
        .then((result) => {
          console.log("Setting retrieved data");
          setData(result.data);
          console.log("Resetting refresh data to false");
          setRefresh(false);
        });
  }, [refresh]);

  const handleRefresh = () => {
    console.log("Refreshing data");
    setRefresh(true);
  };
  return (
    <div className="App">
      <button onClick={handleRefresh}>Refresh</button>
      {data.length > 0 &&
        data.map((item, i) => {
          return (
            <div key={`${i}-${item.title}`}>
              <h1>{item.title}</h1>
              <p>Date: {item.date}</p>
              <p>{item.explanation}</p>
              <img src={item.url} alt={item.title} />
            </div>
          );
        })}
    </div>
  );
}

export default App;
