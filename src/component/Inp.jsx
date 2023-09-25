import React, { useState, useContext, useEffect } from "react";
import Event from "../context/Event";
import "./inp.css";
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
  const [sphere,setSphere]=useState(true)
  const [cube,setCube]=useState(true)
  const [spherex, setSpherex] = useState(-2);
  const [spherey, setSpherey] = useState(1.1);
  const [spherez, setSpherez] = useState(0);
  const [encolor, setEncolor] = useState("#20253C");
  const [axis, setAxis] = useState(true);
  const [plane, setPlane] = useState(true);
  const [orb, setOrb] = useState(true);
  const [nav, setNav] = useState(true);

  const { setUser } = useContext(Event);
  const { user } = useContext(Event);
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
      spherex,
      spherey,
      spherez,
      encolor,
      orb,
      plane,
      nav,
      lightcolor,
      sphere,
      cube,
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
    spherex,
    spherey,
    spherez,
    encolor,
    plane,
    orb,
    nav,
    lightcolor,
    sphere,
    cube,
  ]);

  return (
    <div>
      <h3>Controls</h3>
      <div className="inputs">
        <div className="sect">
          <p>Camera</p>
          <div className="comp">
            <label> CameraX </label>
            <input
              type="range"
              name="grid"
              min={2}
              max={10}
              value={camx}
              id="camx"
              onChange={(e) => setCamx((prev) => e.target.value)}
            />
          </div>
          <div className="comp">
            <label> CameraY</label>
            <input
              type="range"
              name="grid"
              min={2}
              max={10}
              value={camy}
              id="camy"
              onChange={(e) => setCamy((prev) => e.target.value)}
            />
          </div>
          <div className="comp">
            <label>CameraZ</label>
            <input
              type="range"
              name="grid"
              min={2}
              max={10}
              value={camz}
              id="camz"
              onChange={(e) => setCamz((prev) => e.target.value)}
            />
          </div>
        </div>

        <div className="sect">
          <p>Light</p>
          <div className="comp">
            <label>Light intensity</label>
            <input
              type="number"
              name="grid"
              // min={0}
              // max={200}
              value={light}
              id="lightint"
              onChange={(e) => setLight(e.target.value)}
            />
          </div>
          <div className="comp">
            <label>LigthX</label>
            <input
              type="range"
              name="grid"
              min={2}
              max={10}
              value={lightx}
              id="lightx"
              onChange={(e) => setLightx((prev) => e.target.value)}
            />
          </div>
          <div className="comp">
            <label>LigthY</label>
            <input
              type="range"
              name="grid"
              min={2}
              max={10}
              value={lighty}
              id="lighty"
              onChange={(e) => setLighty((prev) => e.target.value)}
            />
          </div>
          <div className="comp">
            <label>LigthZ</label>
            <input
              type="range"
              name="grid"
              min={-2}
              max={10}
              value={lightz}
              id="lightz"
              onChange={(e) => setLightz((prev) => e.target.value)}
            />
          </div>
          <div className="comp">
            <label>Light color</label>
            <input
              type="color"
              onChange={(e) => setLightcolor(e.target.value)}
            />
          </div>
        </div>
        <div className="sect">
          <p>Sphere</p>
          <div className="comp">
          <label>Sphere</label>
          <input
            type="checkBox"
            name="sphere"
            id="sphere"
            checked={sphere}
            onChange={() => setSphere((prev) => !prev)}
          />
        </div>
        <div className="comp">
          <label>Cube</label>
          <input
            type="checkBox"
            name="cube"
            id="cube"
            checked={cube}
            onChange={() => setCube((prev) => !prev)}
          />
        </div>
          <div className="comp">
            <label>Object X</label>
            <input
              type="range"
              name="objx"
              min={-10}
              max={10}
              value={spherex}
              id="spherex"
              onChange={(e) => setSpherex((prev) => e.target.value)}
            />
            <input
              type="number"
              name="objx"
              min={-10}
              max={10}
              value={spherex}
              id="spherexnum"
              onChange={(e) => setSpherex((prev) => e.target.value)}
            />
          </div>
          <div className="comp">
            <label>Object Y</label>
            <input
              type="range"
              name="objy"
              min={-10}
              max={10}
              value={spherey}
              id="spherey"
              onChange={(e) => setSpherey((prev) => e.target.value)}
            />
            <input
              type="number"
              name="objy"
              min={-10}
              max={10}
              value={spherey}
              id="sphereynum"
              onChange={(e) => setSpherey((prev) => e.target.value)}
            />
          </div>
          <div className="comp">
            <label>Object Z</label>
            <input
              type="range"
              name="objz"
              min={-10}
              max={10}
              value={spherez}
              id="spherez"
              onChange={(e) => setSpherez((prev) => e.target.value)}
            />
            <input
              type="number"
              name="objz"
              min={-10}
              max={10}
              value={spherez}
              id="sphereznum"
              onChange={(e) => setSpherez((prev) => e.target.value)}
            />{" "}
          </div>
          <div className="comp">
            <label>Sphere Radius</label>
            <input
              type="number"
              name="grid"
              value={ballr}
              id="lightint"
              onChange={(e) => setBallr(e.target.value)}
            />
          </div>
        </div>
        <div className="comp">
          <label>Environment color</label>
          <input type="color" onChange={(e) => setEncolor(e.target.value)} />
        </div>
        <div className="comp">
          <p style={{ color: "#e1c243" }}>
            Orbit always points camera at the object
          </p>
        </div>
        <div className="comp">
          <label>Orbit Enabled</label>
          <input
            type="checkBox"
            name="pass"
            id="orb"
            checked={orb}
            onChange={() => setOrb((prev) => !prev)}
          />
        </div>
        <div className="comp">
          <label>Shadows</label>
          <input
            type="checkBox"
            name="pass"
            id="pass"
            checked={axis}
            onChange={() => setAxis((prev) => !prev)}
          />
        </div>
        <div className="comp">
          <label>Plane visible</label>
          <input
            type="checkBox"
            name="pass"
            id="plane"
            checked={plane}
            onChange={() => setPlane((prev) => !prev)}
          />
        </div>
        <div className="comp">
          <p style={{ color: "#d94a40" }}>
            For navigation to work properly make sure orbit is enabled{" "}
          </p>
        </div>
        <div className="comp">
          <label>Navigation</label>
          <input
            type="checkBox"
            name="pass"
            id="nav"
            checked={nav}
            onChange={() => setNav((prev) => !prev)}
          />
        </div>
      </div>
    </div>
  );
}

export default Inp;
