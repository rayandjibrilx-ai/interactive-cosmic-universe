
import * as THREE from "three";

const canvas = document.querySelector("#universe");
const loading = document.querySelector("#loading-screen");
const panel = document.querySelector("#planet-panel");

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x030611);
scene.fog = new THREE.FogExp2(0x030611, 0.0008);

const camera = new THREE.PerspectiveCamera(
  55,
  window.innerWidth / window.innerHeight,
  0.1,
  1500
);

camera.position.set(0, 32, 95);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: false,
  powerPreference: "high-performance"
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.outputColorSpace = THREE.SRGBColorSpace;

// Lighting
scene.add(new THREE.AmbientLight(0x8095c0, 1.4));

const sunLight = new THREE.PointLight(0xffffff, 1800, 500, 1.5);
sunLight.position.set(0, 0, 0);
scene.add(sunLight);

// Stars
const starPositions = [];
const starColors = [];

for (let i = 0; i < 4000; i++) {
  starPositions.push(
    (Math.random() - 0.5) * 900,
    (Math.random() - 0.5) * 600,
    (Math.random() - 0.5) * 900
  );

  const brightness = 0.5 + Math.random() * 0.5;
  starColors.push(brightness, brightness, 1);
}

const starGeometry = new THREE.BufferGeometry();

starGeometry.setAttribute(
  "position",
  new THREE.Float32BufferAttribute(starPositions, 3)
);

starGeometry.setAttribute(
  "color",
  new THREE.Float32BufferAttribute(starColors, 3)
);

const starMaterial = new THREE.PointsMaterial({
  size: 1.15,
  vertexColors: true,
  sizeAttenuation: true
});

const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

// Sun
const sun = new THREE.Mesh(
  new THREE.SphereGeometry(5, 32, 24),
  new THREE.MeshBasicMaterial({ color: 0xffc15a })
);

scene.add(sun);

const sunGlow = new THREE.Mesh(
  new THREE.SphereGeometry(6.5, 24, 16),
  new THREE.MeshBasicMaterial({
    color: 0xff8500,
    transparent: true,
    opacity: 0.12,
    side: THREE.BackSide
  })
);

sun.add(sunGlow);

// Solar system data
const planetData = [
  {
    name: "MERCURY",
    color: 0xa8a49d,
    size: 0.8,
    distance: 10,
    speed: 0.45,
    type: "Terrestrial",
    day: "58.6 Earth days",
    moons: "0",
    description: "The smallest planet and the closest world to the Sun."
  },
  {
    name: "VENUS",
    color: 0xe8b77c,
    size: 1.3,
    distance: 15,
    speed: 0.32,
    type: "Terrestrial",
    day: "243 Earth days",
    moons: "0",
    description: "A scorching planet covered by thick clouds."
  },
  {
    name: "EARTH",
    color: 0x258aff,
    size: 1.55,
    distance: 21,
    speed: 0.24,
    type: "Terrestrial",
    day: "24 hours",
    moons: "1",
    description: "Our home planet, with liquid-water oceans and known life."
  },
  {
    name: "MARS",
    color: 0xe45e40,
    size: 1.15,
    distance: 28,
    speed: 0.18,
    type: "Terrestrial",
    day: "24.6 hours",
    moons: "2",
    description: "The red planet, home to enormous volcanoes and ancient valleys."
  },
  {
    name: "JUPITER",
    color: 0xd8b28d,
    size: 3.2,
    distance: 39,
    speed: 0.12,
    type: "Gas giant",
    day: "9.9 hours",
    moons: "95",
    description: "The largest planet, famous for its Great Red Spot."
  },
  {
    name: "SATURN",
    color: 0xe5d2a0,
    size: 2.7,
    distance: 51,
    speed: 0.09,
    type: "Gas giant",
    day: "10.7 hours",
    moons: "274",
    description: "A gas giant surrounded by magnificent rings of ice and rock."
  },
  {
    name: "URANUS",
    color: 0x7adbe2,
    size: 2.05,
    distance: 63,
    speed: 0.065,
    type: "Ice giant",
    day: "17.2 hours",
    moons: "28",
    description: "An icy giant that rotates on its side."
  },
  {
    name: "NEPTUNE",
    color: 0x4268ff,
    size: 1.95,
    distance: 74,
    speed: 0.05,
    type: "Ice giant",
    day: "16.1 hours",
    moons: "16",
    description: "A distant blue world with supersonic winds."
  }
];

const planets = [];
const pickableObjects = [];

function createOrbit(distance) {
  const points = [];
  const segments = 128;

  for (let i = 0; i <= segments; i++) {
    const angle = (i / segments) * Math.PI * 2;

    points.push(
      new THREE.Vector3(
        Math.cos(angle) * distance,
        0,
        Math.sin(angle) * distance
      )
    );
  }

  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  const line = new THREE.LineLoop(
    geometry,
    new THREE.LineBasicMaterial({
      color: 0x27405e,
      transparent: true,
      opacity: 0.5
    })
  );

  scene.add(line);
}

planetData.forEach((data, index) => {
  createOrbit(data.distance);

  const orbit = new THREE.Group();
  scene.add(orbit);

  const material = new THREE.MeshStandardMaterial({
    color: data.color,
    roughness: 0.85,
    metalness: 0.02
  });

  const planet = new THREE.Mesh(
    new THREE.SphereGeometry(data.size, 32, 24),
    material
  );

  planet.position.x = data.distance;
  planet.userData.planetIndex = index;
  planet.userData.data = data;
  orbit.add(planet);

  // Simple colored cloud layer for Earth
  if (data.name === "EARTH") {
    const clouds = new THREE.Mesh(
      new THREE.SphereGeometry(data.size * 1.025, 24, 20),
      new THREE.MeshBasicMaterial({
        color: 0x9bdcff,
        transparent: true,
        opacity: 0.12,
        wireframe: true
      })
    );

    planet.add(clouds);
  }

  // Saturn's rings
  if (data.name === "SATURN") {
    const rings = new THREE.Mesh(
      new THREE.RingGeometry(data.size * 1.35, data.size * 2.1, 64),
      new THREE.MeshBasicMaterial({
        color: 0xc9b68e,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8
      })
    );

    rings.rotation.x = -Math.PI / 2.4;
    planet.add(rings);
  }

  planets.push({
    orbit,
    planet,
    data,
    index
  });

  pickableObjects.push(planet);
});

// Selection and information panel
let selectedIndex = 2;

function selectPlanet(index) {
  const item = planets[index];

  if (!item) return;

  selectedIndex = index;

  document.querySelector("#planet-number").textContent =
    String(index + 1).padStart(2, "0") + " / 08";

  document.querySelector("#planet-name").textContent = item.data.name;
  document.querySelector("#planet-description").textContent =
    item.data.description;

  document.querySelector("#planet-type").textContent = item.data.type;
  document.querySelector("#planet-day").textContent = item.data.day;
  document.querySelector("#planet-moons").textContent = item.data.moons;

  panel.classList.remove("hidden");

  document.querySelectorAll(".planet-nav button").forEach((button, i) => {
    button.classList.toggle("active", i === index);
  });
}

document.querySelectorAll(".planet-nav button").forEach((button) => {
  button.addEventListener("click", () => {
    selectPlanet(Number(button.dataset.planet));
  });
});

document.querySelector("#close-panel").addEventListener("click", () => {
  panel.classList.add("hidden");
});

document.querySelector("#explore-button").addEventListener("click", () => {
  document.querySelector(".intro").style.opacity = "0";
  document.querySelector(".intro").style.pointerEvents = "none";
  selectPlanet(2);
});

document.querySelector("#focus-button").addEventListener("click", () => {
  const item = planets[selectedIndex];
  const position = new THREE.Vector3();

  item.planet.getWorldPosition(position);

  const direction = new THREE.Vector3(0, 0, 1);
  const target = position.clone().add(direction.multiplyScalar(
    Math.max(item.data.size * 5, 8)
  ));

  cameraTarget.copy(target);
  lookTarget.copy(position);
  followSelection = true;
});

// Mouse, touch and zoom controls
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

let dragging = false;
let moved = false;
let lastX = 0;
let lastY = 0;
let yaw = 0;
let pitch = 0.3;

const cameraTarget = new THREE.Vector3(0, 32, 95);
const lookTarget = new THREE.Vector3(0, 0, 0);
let followSelection = false;

canvas.addEventListener("pointerdown", (event) => {
  dragging = true;
  moved = false;
  lastX = event.clientX;
  lastY = event.clientY;

  canvas.setPointerCapture(event.pointerId);
});

canvas.addEventListener("pointermove", (event) => {
  if (!dragging) return;

  const dx = event.clientX - lastX;
  const dy = event.clientY - lastY;

  if (Math.abs(dx) + Math.abs(dy) > 3) moved = true;

  yaw -= dx * 0.004;
  pitch = THREE.MathUtils.clamp(pitch + dy * 0.003, -1.1, 1.1);

  lastX = event.clientX;
  lastY = event.clientY;

  followSelection = false;
});

canvas.addEventListener("pointerup", (event) => {
  dragging = false;

  if (moved) return;

  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(pointer, camera);

  const hits = raycaster.intersectObjects(pickableObjects, false);

  if (hits.length > 0) {
    selectPlanet(hits[0].object.userData.planetIndex);
  }
});

canvas.addEventListener("pointercancel", () => {
  dragging = false;
});

canvas.addEventListener("wheel", (event) => {
  event.preventDefault();

  const direction = new THREE.Vector3();
  camera.getWorldDirection(direction);

  cameraTarget.addScaledVector(direction, event.deltaY * 0.035);
  followSelection = false;
}, { passive: false });

// Animation
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);

  const time = clock.getElapsedTime();

  stars.rotation.y = time * 0.003;
  sun.rotation.y = time * 0.12;

  planets.forEach((item) => {
    item.orbit.rotation.y = time * item.data.speed * 0.2;
    item.planet.rotation.y = time * 0.35;
  });

  if (followSelection) {
    const item = planets[selectedIndex];
    const position = new THREE.Vector3();

    item.planet.getWorldPosition(position);

    const offset = new THREE.Vector3(
      Math.max(item.data.size * 3.5, 5),
      Math.max(item.data.size * 1.5, 3),
      Math.max(item.data.size * 5, 8)
    );

    cameraTarget.lerp(position.clone().add(offset), 0.035);
    lookTarget.lerp(position, 0.035);
  }

  const radius = cameraTarget.length();

  const x = Math.sin(yaw) * Math.cos(pitch) * radius;
  const y = Math.sin(pitch) * radius;
  const z = Math.cos(yaw) * Math.cos(pitch) * radius;

  const desiredPosition = new THREE.Vector3(x, y, z);

  if (!followSelection) {
    camera.position.lerp(desiredPosition, 0.06);
    camera.lookAt(lookTarget);
  } else {
    camera.position.lerp(cameraTarget, 0.05);
    camera.lookAt(lookTarget);
  }

  renderer.render(scene, camera);
}

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

selectPlanet(2);
animate();

loading.style.opacity = "0";

setTimeout(() => {
  loading.style.display = "none";
}, 550);
