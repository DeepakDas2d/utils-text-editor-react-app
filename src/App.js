// import "./App.css";
import Navbar from "./component/Navbar";
import Alert from "./component/Alert";
import TextForm from "./component/TextForm";
// import Aboutus from "./component/Aboutus";
import React, { useState } from "react"; //importing the use state

// import react router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // usestate
  let [mode, setmode] = useState("light");
  let [text, newtext] = useState("Enable Dark Mode");
  let [alert, setalert] = useState(null);

  // alert  show functions
  let showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
    console.log("show alert is  call ");
  };

  // function for changing the dark to light mode mode
  let togglemode = () => {
    console.log("you are triggred ");

    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#1E1E1E";
      newtext("Enable Light Mode ");
      showalert("Enable Light Mode", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      newtext("Enable dark mode ");
      showalert("Enable dark mode ", "success");
    }
  };

  // let togglemode = () => {
  //   console.log("you are triggered ");

  //   if (mode === "light") {
  //     setmode("dark");
  //     // document.body.style.backgroundColor = "#00274d"; // Dark mode background
  //     document.body.style.background =
  //       "linear-gradient(135deg, #b3cde0, #a2d9ff, #cce5ff, #e0f7ff)"; // Light mode gradient background

  //     newtext("Enable Light Mode ");
  //     showalert("Enable Light Mode", "success");
  //   } else {
  //     setmode("light");
  //     document.body.style.backgroundColor = "#00274d"; // Dark mode background

  //     // document.body.style.background =
  //     //   "linear-gradient(135deg, #b3cde0, #a2d9ff, #cce5ff, #e0f7ff)"; // Light mode gradient background
  //     newtext("Enable Dark Mode ");
  //     showalert("Enable Dark Mode", "success");
  //   }
  // };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils: A Text Editor App"
          home="Home"
          about="About Us"
          mode={mode}
          text={text}
          toggle={togglemode}
        />{" "}
        {/*  searchbar={true} */}
        <Alert alert={alert} />
        <Routes>
          {/* <Route path="/about"  element={<Aboutus/>}/> */}
          <Route
            path="/"
            element={
              <div className="container">
                {" "}
                <TextForm
                  heading="Enter The Text To Anlize Below "
                  showalert={showalert}
                  toggle={togglemode}
                  mode={mode}
                />
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
