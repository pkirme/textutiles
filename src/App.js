import { useState } from "react";
// import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import ShowAlert from "./components/ShowAlert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const onToggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark mode is Enabled", "success");
      document.title="Textutiles-Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode is Enabled", "success");
      document.title="Textutiles-Light Mode";
    }
  };

  const showAlert = (msg, type) => {
    setAlert({ msg: msg, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Navbar title="TextUtility" mode={mode} onToggleMode={onToggleMode} />
      <ShowAlert alertMsg={alert} />
      <div className="container my-3">
        <TextForm
          title="Enter the text to analyze"
          mode={mode}
          showAlert={showAlert}
        />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
