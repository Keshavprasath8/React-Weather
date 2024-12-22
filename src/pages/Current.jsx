const Current = ({ item }) => {
  return (
    <div>
      <h2>Current Weather</h2>
      <p>Temperature: {item.temp}°K</p>
      <p>Pressure: {item.pressure} hPa</p>
      <p>Humidity: {item.humidity}%</p>
    </div>
  );
};

export default Current;
