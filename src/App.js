import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="TextUtility" />
      <div className="container my-3">
        <TextForm title="Enter the text to analyze"/>
      </div>
    </>
  );
}

export default App;
