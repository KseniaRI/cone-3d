import React, { useEffect, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { Color } from 'three';
import Triangle from './Triangle';
import { Spin } from 'antd';
import { fetchTrianglesData } from '../services/fetchTrianglesData';
import ConeCaption from './ConeCaption';

const ConeElement = ({coneParameters, setRequestStatus, requestStatus}) => {

  const [triangles, setTriangles] = useState([]);
  
  useEffect(() => {
    const getTriangles = async () => {
      try {
        const trianglesData = await fetchTrianglesData(coneParameters);
        setTriangles(trianglesData);
        setRequestStatus('success');
      } catch (error) {
        console.error('Error fetching triangles:', error);
        setRequestStatus('error');
      }
    }
    if (requestStatus === 'loading' || requestStatus === 'idle') {
      getTriangles();
    }
    
  }, [coneParameters, requestStatus, setRequestStatus]);

  const coneTriangulatedRepresentation = triangles.map((triangle, index) => {
    const vertices = triangle.flatMap((node) => [node.x, node.y, node.z]);
    const color = new Color().setHSL(index / triangles.length, 1, 0.5);
    return <Triangle color={color} vertices={vertices} key={index} />
  });
  
  return (
    <div id="canvas-container">
      {requestStatus === 'loading' && <Spin />}
      {requestStatus === 'error' && <p className='message'>Something went wrong...</p>}
      {requestStatus === 'success' &&
        <>
          <ConeCaption coneParameters={coneParameters}/>
          <Canvas>
            {coneTriangulatedRepresentation}
          </Canvas>
        </>
      }
    </div>   
  );
}

export default ConeElement;




