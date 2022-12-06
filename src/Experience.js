
import { useRef } from 'react'

import { useThree , useFrame, extend } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import CustomObject from './CustomObject.js'

extend({ OrbitControls })


export default function Experience()
{
    /*
    const three = useThree()
    console.log(three)
    */

    const { camera, gl } = useThree()

    const cubeRef = useRef()
    const groupRef = useRef()

    useFrame((state, delta) =>
    {
        //console.log(state.clock)

        const angle = state.clock.elapsedTime

            /*
        state.camera.position.x = Math.sin(angle) * 8
        state.camera.position.z = Math.cos(angle) * 8
        state.camera.lookAt(0, 0, 0)
         console.log(angle)
         */



        cubeRef.current.rotation.y += delta
        //groupRef.current.rotation.y += delta
        //console.log(delta)
        //cubeRef.current.rotation.y += 0.01
        
    })


    return <>

        <directionalLight    position={ [ 1, 2, 3 ] }   intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <orbitControls args={ [ camera, gl.domElement ] } />  

<group ref={ groupRef }>
        <mesh position-x={ - 2 }>
            <sphereGeometry />
             <meshStandardMaterial color="orange" />
        </mesh>


        <mesh  ref={ cubeRef } rotation-y={ Math.PI * 0.25 } position-x= "2"  scale={ 1.5 }>
             <boxGeometry />
            <meshStandardMaterial color="mediumpurple"  wireframe />
        </mesh>


</group>
        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

            <CustomObject />
    </>

    

}