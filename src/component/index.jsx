import {
  PerspectiveCamera,
  OrbitControls,
  Environment,
} from "@react-three/drei";
import { useEffect, useRef, useContext } from "react";
import * as THREE from "three";
import gsap from "gsap";
import Event from "../context/Event";

export default function Three() {
  const { user } = useContext(Event);

  // useEffect(()=>{

  // },[user])

  const angletoradians = (angle) => {
    return (Math.PI * angle) / 180;
  };

  const camref = useRef(null);
  const lightref = useRef(null);
  const ballref = useRef(null);
  // const objref =useRef(null)
  // useEffect(() => {
  //   if (!!ballref.current) {
  //     console.log(ballref.current)
  //     gsap.to(ballref.current.position, {
  //       x: -2,
  //       duration: 2,
  //       ease: "power1.out",
  //     });
  //     gsap.to(ballref.current.position, {
  //       y: 1.1,
  //       ease: "bounce.out",
  //       duration: 1.5,
  //     });
  //   }
  //   // if(!!camref.current){
  //   //   gsap.to(camref.current.position,{
  //   //        z:-3.24697,
  //   //        y:2,
  //   //        x:5,
  //   //        ease:"expo.out",
  //   //        duration:2,
  //   //   })
  //   // }
   
  // }, [ballref]);

  useEffect(() => {
    if (!!camref.current) {
      gsap.to(camref.current.position, {
        x: user.camx,
        y: user.camy,
        z: user.camz,
        ease: "expo.out",
        duration: .6,
      });
    }
    if (!!lightref.current) {
      console.log(lightref.current)
      gsap.to(lightref.current.position, {
        x: user.lightx,
        y: user.lighty,
        z: user.lightz,
        ease: "expo.out",
        duration: 1.2,
      });
      gsap.to(lightref.current, {
        intensity: user.light,
      });
    }
    if(!!ballref.current){
      gsap.to(ballref.current.position,{
        x:user.spherex,
        y:user.spherey,
        z:user.spherez,
        ease:"expo.out",
        duration:.5,
      })
    }
  }, [user]);

  // webGL

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 1, 6]}
        rotateOnAxis={angletoradians(10)}
        ref={camref}
      />
      <OrbitControls
        dampingFactor={0.16}
        enablePan={user.nav}
        enableRotate={user.nav}
        enableZoom={user.nav}
        enabled={user.orb}
      />
      <mesh position={[2,3,0]} castShadow ref={ballref}>
        <sphereGeometry args={[user.ballr, 32, 32]} />
        <meshPhysicalMaterial
          color="#ffffff"
          roughness={0.21}
          clearcoatRoughness={28}
        />
      </mesh>
      <mesh
        position={[-0.6, 0.1, 0]}
        rotation={[-angletoradians(90), 0, 0]}
        receiveShadow={true}
        visible={user.plane}
      >
        <planeGeometry args={[6, 8]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* <axesHelper position={[0, 0, 0]} /> */}
      {/* <gridHelper /> */}
      {/* <ambientLight args={["#ffffff", .2]} /> */}
      <spotLight
        args={[user.lightcolor, 10, 200, angletoradians(35), 2]}
        position={[3, 2.5, 0]}
        castShadow={user.axis}
        ref={lightref}
      />
      {/* <pointLight
        args={[user.lightcolor, 10, 200, angletoradians(35), 2]}
        position={[3, 2.5, 0]}
        castShadow={user.axis}
        ref={lightref}
      /> */}

      {/* Environments */}
      <Environment background blur={15}>
        <mesh>
          <sphereGeometry args={[35, 64, 64]} />
          <meshBasicMaterial color={user.encolor} side={THREE.BackSide} />
        </mesh>
      </Environment>
    </>
  );
}
