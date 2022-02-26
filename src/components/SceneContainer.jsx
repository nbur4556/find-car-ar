import { DefaultXRControllers, ARCanvas } from '@react-three/xr';

//test
const Box = () => {
    return <mesh>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="hotpink" />s
    </mesh>
}

const SceneContainer = () => {
    return <ARCanvas>
        <ambientLight />
        <Box />
        <DefaultXRControllers />
    </ARCanvas>
}

export default SceneContainer;