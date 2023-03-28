// シーンの定義
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
var sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

// レイの発射
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
}

window.addEventListener('mousemove', onMouseMove, false);

function render() {
    requestAnimationFrame(render);

    // レイの発射
    raycaster.setFromCamera(mouse, camera);

    // レイとオブジェクトの交差判定
    var intersects = raycaster.intersectObject(sphere);

    // 交差している場合は赤色にする
    if (intersects.length > 0) {
        intersects[0].object.material.color.set(0xff0000);
    } else {
        sphere.material.color.set(0x00ff00);
    }

    // レンダリング
    renderer.render(scene, camera);
}

render();
