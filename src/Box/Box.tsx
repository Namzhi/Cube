import React from 'react'
import { ThreeElements } from '@react-three/fiber'
import { useAppSelector } from '../hooks/hooks'

export function Box(props: ThreeElements['mesh']) {
    const length = useAppSelector(state => state.cube.length)
    return (
        <>
            <mesh
                scale={0.1}>
                position = {[0, 0, 0]}
                <boxGeometry args={[length, length, length]}/>
                <meshBasicMaterial color={'blue'}/>
            </mesh>
        </>
    )
}
