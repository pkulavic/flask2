// threejsSceneModule.js
import * as THREE from './node_modules/three/build/three.module.js';
import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls.js';

export function createScene(containerId, coordinates) {
  // Set up the WebGLRenderer, Scene and PerspectiveCamera
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById(containerId).appendChild(renderer.domElement);

  // Create BufferGeometry from the provided coordinates
  const geometry = new THREE.BufferGeometry();
  const vertices = new Float32Array(coordinates);
  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

  // Create a blue material
  const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });

  // Create a mesh from the BufferGeometry and material
  const mesh = new THREE.Mesh(geometry, material);

  // Add the mesh to the scene
//   scene.add(mesh);

    // Create a set of points in space
    const points_vertices = [];
    for ( let i = 0; i < 10000; i ++ ) {

    	const x = THREE.MathUtils.randFloatSpread( 2000 );
	    const y = THREE.MathUtils.randFloatSpread( 2000 );
	    const z = THREE.MathUtils.randFloatSpread( 2000 );

	    points_vertices.push( x, y, z );

    }
    const points_geometry = new THREE.BufferGeometry();
    points_geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( points_vertices, 3 ) );
    const points_material = new THREE.PointsMaterial( { color: 0xffffff } );
    const points = new THREE.Points( points_geometry, points_material );
    scene.add(points);




  // Position the camera
  camera.position.z = 5;

  // Set up OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }

  animate();
}

