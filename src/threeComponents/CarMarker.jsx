const CarMarker = ({ position }) => {
    return <mesh position={position}>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="hotpink" />s
    </mesh>
}

export default CarMarker;