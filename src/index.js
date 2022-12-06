import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'
import * as THREE from 'three'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const cameraSettings = {  
            
      fov: 45, 
      near: 0.1, 
      far: 200,  
      position: [ 3, 2, 6 ]  
      
} 


root.render(
    
       <Canvas    

                    dpr={ [ 1, 2 ] }


                  flat

                   gl={ {
                        antialias: true,
                        toneMapping: THREE.CineonToneMapping,
                        outputEncoding: THREE.sRGBEncoding

                    } }
       
               
       
                  camera={ cameraSettings } >

             <Experience />

       </Canvas>
    
)