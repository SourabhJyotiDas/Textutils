import { useState } from "react";
import Alert from "./componenets/Alert";
import Navbar from "./componenets/Navbar";
import Textform from "./componenets/Textform";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from "./componenets/About";



function App() {
  const [mode, setmode] = useState('light'); // whether dark mode enabled or not 
  const [modetxt, setmodetxt] = useState('Dark Mode');
  const [alertTxt, setalertTxt] = useState(null)

  const funcAlert = (message, type) => {
    setalertTxt({
      msg: message,
      types: type
    })
    setTimeout(() => {
      setalertTxt(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmodetxt('Light Mode')
      setmode('dark')
      document.body.style.backgroundColor = '#343a40'
      funcAlert('Dark Mode has been enabled', 'success')
      document.title = 'TextUtils App -- Dark Mode'
      setTimeout(() => {
        document.title = "TextUtils App"
      }, 1500);
    }
    else {
      setmodetxt('Dark Mode')
      setmode('light')
      document.body.style.backgroundColor = 'white'
      funcAlert('Light Mode has been enabled', 'success')
      document.title = 'TextUtils App -- Light Mode'
      setTimeout(() => {
        document.title = 'TextUtils App'
      }, 1500);
    }
  }

  return (
    <>

      <BrowserRouter>
        <Navbar titleText="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} modetxt={modetxt} />
        <Alert alertTxt={alertTxt} />
        <div className="container  my-3">
          <Routes>
            <Route path="/" element={<Textform heading="Enter the text below" mode={mode} funcAlert={funcAlert} />} />
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>

  );
}

export default App;