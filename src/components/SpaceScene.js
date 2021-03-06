import React, { useEffect, useRef, useMemo, useCallback } from 'react'
import { Canvas, extend, useFrame, useResource, useThree } from 'react-three-fiber'
import * as resources from './resources/index.js'
import * as THREE from 'three/src/Three'
// import { useFrame } from 'react-three-fiber/types/src/hooks';

extend(resources)

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
geo.faces.push( new THREE.Face3( 6, 5, 1 ) ); //GFB
geo.faces.push( new THREE.Face3( 5, 8, 4 ) ); //FIE
geo.faces.push( new THREE.Face3( 4, 1, 5 ) ); //EBF
geo.faces.push( new THREE.Face3( 2, 3, 7 ) ); //CDH
geo.faces.push( new THREE.Face3( 7, 6, 2 ) ); //HGC
geo.faces.push( new THREE.Face3( 3, 4, 8 ) ); //DEI
geo.faces.push( new THREE.Face3( 8, 7, 3 ) ); //IHD
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
useFrame(() => {
    rof.current.rotation.set(0, 0.005 + rof.current.rotation.y, 0)
    rof.current.scale.set(5, 5, 5)
    rof.current.position.set(0, 0, -10)
})
return (
    <mesh ref={rof} material={new THREE.MeshBasicMaterial({ color: "#00AAE6", wireframe:true, transparent:true})} geometry={geo} /> 
    )

}

function Particle({ geometry, material, xInit, yInit, zInit, scale, rot_speed, trans_speed}) {
let ref = useRef()
let ySpeed = 0.2

useFrame(() => {
    ref.current.scale.set(scale, scale, scale)
    ref.current.rotation.set(ref.current.rotation.x + rot_speed, ref.current.rotation.y + rot_speed, ref.current.rotation.z + rot_speed)
    ref.current.position.set(
    ref.current.position.y < -160 ? xInit: (ref.current.position.x > 0) ? ref.current.position.x + trans_speed : ref.current.position.x - trans_speed, 
    ref.current.position.y < -160 ? -5: ref.current.position.y - ySpeed,
    ref.current.position.y < -160 ? zInit: (ref.current.position.z > 0) ? ref.current.position.z + trans_speed : ref.current.position.z - trans_speed
    )
})
return <mesh ref={ref} material={material} geometry={geometry} position={[xInit, yInit, zInit]} color={"white"}/>
}

function randomGeo(){
const list = [
    new THREE.BoxBufferGeometry(),
    new THREE.IcosahedronBufferGeometry(), 
    new THREE.PlaneBufferGeometry(),
    new THREE.DodecahedronBufferGeometry(),
    new THREE.RingBufferGeometry(),
    new THREE.TetrahedronBufferGeometry(),
    new THREE.OctahedronBufferGeometry(),
    new THREE.CircleBufferGeometry(),
]
return list[Math.floor(Math.random()*8)]
}

function Swarm() {
const light = useRef()
const [materialRef, material] = useResource()

// randomly initialize swarm parameters to avoid parameter refresh on scroll
const Geo = randomGeo();
const x_inits = Array.from({length: 70}, () => Math.random() * 15 - 7.5);
const y_inits = Array.from({length: 70}, () => Math.random()* 160 - 160);
const z_inits = Array.from({length: 70}, () => Math.random() * 15 - 7.5);
const scale_inits = Array.from({length: 70}, () => Math.random() + 1.5);
const rot_speed_inits = Array.from({length: 70}, () => Math.random() / 20);
const trans_speed_inits = Array.from({length: 70}, () => Math.random() / 15);

return (
    <>
    <pointLight ref={light} distance={100} intensity={2} color="yellow" />
    <directionalLight intensity={0.8} position={[0, 10, 40]} penumbra={1} color="turquoise"/>
    <directionalLight intensity={0.8} position={[30, 0, -20]} penumbra={1} color="red"/>
    <meshPhysicalMaterial ref={materialRef} />
    {new Array(70).fill().map((_, index) => <Particle 
        key={index} 
        material={material} 
        geometry={Geo} 
        xInit={x_inits[index]} 
        yInit={y_inits[index]} 
        zInit={z_inits[index]} 
        scale={scale_inits[index]}
        rot_speed={rot_speed_inits[index]}
        trans_speed={trans_speed_inits[index]}
    />)}
    </>
) 
}

function Stars() {
let group = useRef()
useFrame(() => {
    // group.current.rotation.set(0, 0.0005 + group.current.rotation.y, 0)
    group.current.children.forEach(function (sphere) {

        sphere.position.set(sphere.position.x, sphere.position.y < -250 ? 250 : sphere.position.y - 0.1, sphere.position.z)

    })
})
const [geo, mat, coords] = useMemo(() => {
    const geo = new THREE.SphereBufferGeometry(1, 10, 10)
    const mat = new THREE.MeshBasicMaterial({ color: "yellow" })
    const coords = new Array(500).fill().map(i => [Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 500 - 250])
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
useFrame(({ gl }) => void ((gl.autoClear = true), composer.current.render()), true)
return (
    <effectComposer ref={composer} args={[gl]}>
    <renderPass attachArray="passes" scene={scene} camera={camera} />
    <shaderPass attachArray="passes" args={[resources.FXAAShader]} material-uniforms-resolution-value={[1 / size.width, 1 / size.height]} renderToScreen />
    </effectComposer>
)
}

function MoveCam({mouse}) {
    
    // add a bit of momentum to the camera, weighted like: rot = a * current_rot + (1-a) * wanted_rot
    useFrame(({ camera }) => camera.updateProjectionMatrix(void (camera.rotation.x = 0.9*camera.rotation.x - 0.1*mouse.current[0]/700, camera.rotation.y = 0.8*camera.rotation.y + 0.2*mouse.current[1]/700, camera.rotation.z=1)))
    
    return null
}

function SpaceScene({cam_pos, cam_rot}){
    const mouse = useRef([0, 0])
    const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])
    return (
        <div className="home_space" id="Home">
            <Canvas camera={{ fov: 75, position: cam_pos, rotation: cam_rot}} onMouseMove={onMouseMove}>
                <Stars />
                <Swarm />
                <Effect />
                <RocketShip />
                <MoveCam mouse={mouse} />
            </Canvas>
        </div>
    )
}

export default SpaceScene;