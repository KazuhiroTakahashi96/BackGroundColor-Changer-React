import "./App.css";

function App() {
  const r = Math.random() * 256;
  const g = Math.random() * 256;
  const b = Math.random() * 256;
  console.log(r, g, b);

  return (
    <>
      <p className="color">RGB</p>
      <button className="btn">Change BG Color</button>
    </>
  );
}

export default App;
