import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Canvas } from "@react-three/fiber";
// import {Html} from '@react-three/drei'
import { Suspense } from "react";
import Three from "./component/index";
import Inp from "./component/Inp";
import Eventprovider from "./context/EventProvider";

function App() {
  return (
    <div id="cont">
     
    <Eventprovider >
      <div className="can">

      <Canvas id="can" shadows>
        <Suspense fallback={null}>
          <Three />
        </Suspense>
      </Canvas>
      </div>
      <div className="inp">
      <Inp id="inps"/>
      </div>
    </Eventprovider>
    </div>
  );
}

export default App;
