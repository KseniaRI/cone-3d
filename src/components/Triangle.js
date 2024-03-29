import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Triangle = ({ vertices, color }) => {
  const triangleMesh = useRef();

  useFrame(({ clock }) => {
    triangleMesh.current.rotation.z = clock.getElapsedTime();
  });

    return (
      <mesh
          ref={triangleMesh}
          position={[0, 0, 0]}
          rotation={[-Math.PI / 3, Math.PI / 8, 0]}
          scale={0.2}
        >
          <bufferGeometry attach="geometry">
            <bufferAttribute
              attach="attributes-position"
              count={vertices.length / 3}
              array={new Float32Array(vertices)}
              itemSize={3}
            />
          </bufferGeometry>
          <meshBasicMaterial color={color}/>
        </mesh>
    )
}

export default Triangle;