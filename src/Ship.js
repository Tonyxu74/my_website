import React, { useCallback, useEffect, useRef, useMemo } from 'react'
import { apply, Canvas, useRender, useResource, useThree } from 'react-three-fiber'
import * as resources from './resources/index'
import './ship_styles.css'
import "./App.css"
import * as THREE from 'three/src/Three'
apply(resources)

function shipmaker(){
  var geo = new THREE.Geometry();
  const vertlist = [
    new THREE.Vector3(0,11,0), //A
    new THREE.Vector3(-1,8,-1), //B
    new THREE.Vector3(-1,8,1), //C
    new THREE.Vector3(1,8,1), //D
    new THREE.Vector3(1,8,-1), //E
    new THREE.Vector3(-1,2,-1), //F
    new THREE.Vector3(-1,2,1), //G
    new THREE.Vector3(1,2,1), //H
    new THREE.Vector3(1,2,-1), //I
    new THREE.Vector3(-1.5,0,-1.5), //J
    new THREE.Vector3(-1.5,0,1.5), //K
    new THREE.Vector3(1.5,0,1.5), //L
    new THREE.Vector3(1.5,0,-1.5) //M
  ]
  for (let i = 0; i < vertlist.length; i++){
    geo.vertices.push(vertlist[i])
  }
  // top pyramid
  geo.faces.push( new THREE.Face3( 0, 1, 4 ) ); //ABE
  geo.faces.push( new THREE.Face3( 0, 1, 2 ) ); //ABC
  geo.faces.push( new THREE.Face3( 0, 2, 3 ) ); //ACD
  geo.faces.push( new THREE.Face3( 0, 3, 4 ) ); //ADE
  // main body
  geo.faces.push( new THREE.Face3( 1, 2, 6 ) ); //BCG
  geo.faces.push( new THREE.Face3( 6, 5, 1 ) ); //CGB
  geo.faces.push( new THREE.Face3( 5, 8, 4 ) ); //FIE
  geo.faces.push( new THREE.Face3( 4, 1, 5 ) ); //EBF
  geo.faces.push( new THREE.Face3( 2, 3, 7 ) ); //CDH
  geo.faces.push( new THREE.Face3( 7, 6, 2 ) ); //HGC
  geo.faces.push( new THREE.Face3( 7, 8, 4 ) ); //HIE
  geo.faces.push( new THREE.Face3( 4, 3, 7 ) ); //EDH
  //tail/boosters
  geo.faces.push( new THREE.Face3( 9, 5, 6 ) ); //JFG
  geo.faces.push( new THREE.Face3( 6, 10, 9 ) ); //GKJ
  geo.faces.push( new THREE.Face3( 10, 6, 7 ) ); //KGH
  geo.faces.push( new THREE.Face3( 7, 11, 10 ) ); //HLK
  geo.faces.push( new THREE.Face3( 11, 7, 8 ) ); //LHI
  geo.faces.push( new THREE.Face3( 8, 12, 11 ) ); //IML
  geo.faces.push( new THREE.Face3( 12, 8, 5 ) ); //MIF
  geo.faces.push( new THREE.Face3( 5, 9, 12 ) ); //FJM

  //bottom face
  geo.faces.push( new THREE.Face3( 9, 10, 11 ) ); //JKL
  geo.faces.push( new THREE.Face3( 11, 12, 9 ) ); //LMJ

  return geo
}

function RocketShip() {
  let rof = useRef()
  var geo = shipmaker();
  useRender(() => {
    rof.current.rotation.set(0, 0.005 + rof.current.rotation.y, 0)
    rof.current.scale.set(5, 5, 5)
    rof.current.position.set(0, 0, -10)
  })
  return (
    <mesh ref={rof} material={new THREE.MeshBasicMaterial({ color: "#00AAE6", wireframe:true, transparent:true})} geometry={geo} /> 
    )

}

function Particle({ geometry, material }) {
  let ref = useRef()
  let randscale = Math.random()*3 + 0.5 
  let t = 0
  let speed = 0.01 + Math.random() / 200
  let xFactor = Math.random() * 15 - 7.5 
  let yFactor = Math.random()/2 + 0.1
  let zFactor = Math.random() * 15 - 7.5
  let noise_speed = Math.random()/50
  let yInit = Math.random()*350 - 350
  useRender(() => {
    ref.current.scale.set(randscale, randscale, randscale)
    t += speed
    const s = Math.cos(t)
    ref.current.rotation.set(s * 5, s * 5, s * 5)
    ref.current.position.set(
      ref.current.position.y < -350 ? xFactor: (ref.current.position.x > 0) ? ref.current.position.x + noise_speed : ref.current.position.x - noise_speed, 
      ref.current.position.y < -350 ? -5: ref.current.position.y -yFactor,
      ref.current.position.y < -350 ? zFactor: (ref.current.position.z > 0) ? ref.current.position.z + noise_speed : ref.current.position.z - noise_speed
    )
  })
  return <mesh ref={ref} material={material} geometry={geometry} position={[xFactor, yInit, zFactor]} color={"white"}/>
}

function randomGeo(){
  const list = [
    new THREE.BoxBufferGeometry(),
    new THREE.IcosahedronBufferGeometry(), 
    new THREE.PlaneBufferGeometry(),
    new THREE.BoxBufferGeometry(),
    new THREE.DodecahedronBufferGeometry(),
    new THREE.RingBufferGeometry(),
    new THREE.TetrahedronBufferGeometry(),
    new THREE.TorusBufferGeometry(),
    new THREE.TorusKnotBufferGeometry(),
    new THREE.OctahedronBufferGeometry(),
    new THREE.ConeBufferGeometry(),
    new THREE.CircleBufferGeometry(),
    new THREE.CylinderBufferGeometry
  ];
  return list[Math.floor(Math.random()*13)]
}

function Swarm() {
  const light = useRef()
  //const [geometryRef, geometry] = useResource()
  const [materialRef, material] = useResource()
  const Geo = randomGeo();
  return (
    <>
      <pointLight ref={light} distance={100} intensity={2} color="yellow" />
      <directionalLight intensity={0.8} position={[0, 10, 40]} penumbra={1} color="turquoise"/>
      <directionalLight intensity={0.8} position={[30, 0, -20]} penumbra={1} color="red"/>
      <meshPhysicalMaterial ref={materialRef} />
      {new Array(300).fill().map((_, index) => <Particle key={index} material={material} geometry={Geo} />)}
    </>
  )
}

function Stars() {
  let group = useRef()
  let theta = 0
  useRender(() => {
    // Some things maybe shouldn't be declarative, we're in the render-loop here with full access to the instance
    // const r = 5 * Math.sin(THREE.Math.degToRad((theta += 0.01)))
    group.current.rotation.set(0, 0.0005 + group.current.rotation.y, 0)
  })
  const [geo, mat, coords] = useMemo(() => {
    const geo = new THREE.SphereBufferGeometry(1, 10, 10)
    const mat = new THREE.MeshBasicMaterial({ color: "yellow" })
    const coords = new Array(500).fill().map(i => [Math.random() * 500 - 250, Math.random() * 700 - 350, Math.random() * 500 - 250])
    return [geo, mat, coords]
  }, [])
  return (
    <group ref={group}>
      {coords.map(([p1, p2, p3], i) => (
        <mesh key={i} geometry={geo} material={mat} position={[p1, p2, p3]} />
      ))}
    </group>
  )
}

function Effect() {
  const composer = useRef()
  const { scene, gl, size, camera } = useThree()
  useEffect(() => void composer.current.setSize(size.width, size.height), [size])
  useRender(({ gl }) => void ((gl.autoClear = true), composer.current.render()), true)
  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" scene={scene} camera={camera} />
      {/* <waterPass attachArray="passes" factor={2} /> */}
      <afterimagePass attachArray="passes" factor={0.7} />
      <shaderPass attachArray="passes" args={[resources.FXAAShader]} material-uniforms-resolution-value={[1 / size.width, 1 / size.height]} renderToScreen />
    </effectComposer>
  )
}

export default function Ship() {
  return (
    <>
    <div className="main">
      <Canvas camera={{ fov: 75, position: [0, -45, 80], rotation:[0,0,1] }}>
        <Stars />
        <Swarm />
        <Effect />
        <RocketShip />
      </Canvas>
    </div>
      <div className="header-major">   
        <header className="App-header"> 
          <h1 className="Name">
            <span>TONY</span> XU
          </h1>
          <p className="Blurb">
            Hello! I'm a 3rd year Electrical student specializing in Biomed currently studying at UBC. My interests are
            deep learning and its applications to medical imaging (particularly cancer detection in digital pathology images). 
            Also taking a minor in Physics and avid space enthusiast!
          </p>
          <p className="Blurb">
            I like to play badminton, go to the gym, play piano, explore the food scene, and make cool things in my free time.
          </p>
          <div className="ButtonBox">

            <a href={`${process.env.PUBLIC_URL}/TonyXuWebsiteResume.pdf`} target="_blank" rel="noopener noreferrer">
              <button className="Button" type="button"><span>Resume</span></button>
            </a>
          
            <a href="https://www.github.com/Tonyxu74" target="_blank" rel="noopener noreferrer">
              <button className="Button" type="button"><span>GitHub</span></button>
            </a>

            <a target="_blank" rel="noopener noreferrer">
              <button className="Button" type="button"><span>Projects</span></button>
            </a>

          </div>
        </header>
      </div>
      </>
  )
}
