import React from 'react';
import ReactDOM from 'react-dom/client';
import {Canvas} from '@react-three/fiber'
import {Provider} from 'react-redux'
import {store} from './store'

import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';

import {App} from './App/App';
import {Box} from './Box/Box';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
            <Canvas camera={{fov: 75, position: [0.5, 1, 3]}}>
                <Box/>
            </Canvas>
        </Provider>
    </React.StrictMode>
);