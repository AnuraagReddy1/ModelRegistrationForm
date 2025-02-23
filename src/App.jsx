import { useState } from "react";
import "./App.css";
import Trail from "./Trail";
import ModelRegForm from "./ModelRegForm";

function App() {
  const [on, setOn] = useState(false);
  return (
    <>
      <ModelRegForm />
      {/* <Trail /> */}
      {/* <button
        onClick={() => {
          setOn(!on);
        }}
      >
        toggle
      </button> */}
      {/*
      <Sidebar />
      {console.log(on)}
      {on ? <Home /> : <About />} */}
    </>
  );
}

export default App;
