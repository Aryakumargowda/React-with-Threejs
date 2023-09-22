import React, { useState, useContext, useEffect } from "react";
import Event from "../context/Event";
import { color } from "framer-motion";

function Inp() {
  const [camx, setCamx] = useState(0);
  const [camy, setCamy] = useState(1);
  const [camz, setCamz] = useState(6);
  const [lightx, setLightx] = useState(3);
  const [lighty, setLighty] = useState(2.5);
  const [lightz, setLightz] = useState(0);
  const [light, setLight] = useState(10);
  const [lightcolor, setLightcolor] = useState("#ffffff");
  const [ballr, setBallr] = useState(1);
  const [encolor, setEncolor] = useState("#20253C");
  const [axis, setAxis] = useState(true);
  const [plane, setPlane] = useState(true);
  const [orb, setOrb] = useState(true);
  const [nav, setNav] = useState(true);

  const { setUser } = useContext(Event);
  // function print(a){
  //   console.log(typeof(a));
  // }

  useEffect(() => {
    // console.log("userUpdate")
    setUser({
      camx,
      axis,
      camy,
      camz,
      light,
      lightx,
      lighty,
      lightz,
      ballr,
      encolor,
      orb,
      plane,
      nav,
      lightcolor,
    });
  }, [
    camx,
    axis,
    camy,
    camz,
    light,
    lightx,
    lighty,
    lightz,
    ballr,
    encolor,
    plane,
    orb,
    nav,
    lightcolor,
  ]);

  return (
    <div>
      <h3 style={{ textAlign: "center", padding: "1.2em" }}>Controls</h3>
      <div
        className="inputs"
        style={{ padding: "1.2em", display: "flex", flexDirection: "column" }}
      >
        CameraX
        <input
          type="range"
          name="grid"
          min={2}
          max={10}
          value={camx}
          id="camx"
          onChange={(e) => setCamx((prev) => e.target.value)}
        />
        CameraY
        <input
          type="range"
          name="grid"
          min={2}
          max={10}
          value={camy}
          id="camy"
          onChange={(e) => setCamy((prev) => e.target.value)}
        />
        CameraZ
        <input
          type="range"
          name="grid"
          min={2}
          max={10}
          value={camz}
          id="camz"
          onChange={(e) => setCamz((prev) => e.target.value)}
        />
        Orbit Enabled
        <input
          type="checkBox"
          name="pass"
          id="orb"
          checked={orb}
          onChange={() => setOrb((prev) => !prev)}
        />
        Shadows
        <input
          type="checkBox"
          name="pass"
          id="pass"
          checked={axis}
          onChange={() => setAxis((prev) => !prev)}
        />
        Light intensity
        <input
          type="number"
          name="grid"
          // min={0}
          // max={200}
          value={light}
          id="lightint"
          onChange={(e) => setLight(e.target.value)}
        />
        LigthX
        <input
          type="range"
          name="grid"
          min={2}
          max={10}
          value={lightx}
          id="lightx"
          onChange={(e) => setLightx((prev) => e.target.value)}
        />
        LigthY
        <input
          type="range"
          name="grid"
          min={2}
          max={10}
          value={lighty}
          id="lighty"
          onChange={(e) => setLighty((prev) => e.target.value)}
        />
        LigthZ
        <input
          type="range"
          name="grid"
          min={-2}
          max={10}
          value={lightz}
          id="lightz"
          onChange={(e) => setLightz((prev) => e.target.value)}
        />
         Light color
        <input type="color" onChange={(e) => setLightcolor(e.target.value)} />
        Sphere Radius
        <input
          type="number"
          name="grid"
          value={ballr}
          id="lightint"
          onChange={(e) => setBallr(e.target.value)}
        />
        Environment color
        <input type="color" onChange={(e) => setEncolor(e.target.value)} />
        Plane visible
        <input
          type="checkBox"
          name="pass"
          id="plane"
          checked={plane}
          onChange={() => setPlane((prev) => !prev)}
        />
        <p style={{color:'#d94a40'}}>For navigation to work properly make sure orbit is enabled </p>
        Navigation
        <input
          type="checkBox"
          name="pass"
          id="nav"
          checked={nav}
          onChange={() => setNav((prev) => !prev)}
        />
      </div>
    </div>
  );
}

export default Inp;
