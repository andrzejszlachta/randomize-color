import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <h1>Randomize color</h1>
      <div className="container">
        <Button color="limegreen" text="Click Me" />
        <Button color="pink" text="Me too" />
        <Button color="skyblue" text="Me three" />
        <Button color="brown" text="Don't" fontColor="black" />
      </div>
    </>
  );
}

export default App;
