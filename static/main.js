// main.js
import { createScene } from './scene.js';

const containerId = 'container';
const coordinates = [
  // X, Y, Z coordinates for each vertex
  -1.0, -1.0,  1.0,
   1.0, -1.0,  1.0,
   1.0,  1.0,  1.0,
  -1.0,  1.0,  1.0,
];

createScene(containerId, coordinates);

