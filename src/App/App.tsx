
import {ThreeElements } from '@react-three/fiber'
import { useAppDispatch } from '../hooks/hooks'
import {increment, decrement} from "../store/slice/cubeSlice";
import './App.scss'


export function App(props: ThreeElements['mesh']) {

    const dispatch = useAppDispatch();
    function handleScalePlus() {
        dispatch(increment())
    }

    function handleScaleMinus() {
        dispatch(decrement())
    }

    return (
        <>
            <div className="button__wrapper">
                <button className="button__plus btn btn-primary" onClick={handleScalePlus}>+</button>
                <button className="button__minus btn btn-danger" onClick={handleScaleMinus}>-</button>
            </div>
        </>)
}
