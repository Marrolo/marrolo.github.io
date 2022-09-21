/*
EscenaBasica.js
*/
// SeminarionGPC 2

//Modulos necesarios
import * as THREE from "../lib/three.module.js";
import{GLTFLoader} from "../lib/GLTFLoader.module.js";

//Variables de consenso
let renderer, scene, camera;

//Otras globales
let esferaCubo;
let angulo = 0;

//Acciones
init();
loadScene();
render();

function init(){
    //Instanciar motor
    renderer = new THREE.WebGL1Renderer();
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.getElementById('coontainer').appendChild(renderer.domElement);

    //Instanciar la escena
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0.5,0.5,0.5);

    //Instanciar la camar
    camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,100);
    camera.position.set(0.5,2,7);
    camera.lookAt(0,1,0);
}

function loadScene(){
    const material = new THREE.MeshBasicMaterial({color:'yellow', wireframe: true});

    //Suelo
    const suelo= new THREE.Mesh.DefaultMatrixAutoUpdate(new THREE.PlaneGeometry(10,10,10,10), material);
    suelo.rotation.x = -Math.PI/2;
    scene.add(suelo);
    suelo.position.y = -0.2;

    //cubo y esfera
    const cubo = new THREE.Mesh(new THREE.BoxGeometry(2,2,2), material);
    const esfera = new THREE.Mesh(new THREE.SphereGeometry(1,20,20), material);
    

    esferaCubo= new THREE.Object3D();

    esferacubo.add(cubo);
    esferacubo.add(esfera);

    cubo.position.x=-1;
    esfera.position.x=1;
    esferaCubo.position.y=1.5;

    scene.add(esferaCubo);

    //modelo importado json
    const loader = new THREE.ObjectLoader();
    loader.load("models/soldado/soldado.json", function(objeto){
        cubo.add(objeto);
        objeto.position.set(0,1,0);
    });

    //modelo importado GLF
    const glloader = new GLTFLoader();
    glloader.load("models/RobotExpressive.glb", function(glft){
        glft.scene.position.y=1;
        glft.scene.rotation.y=-Math.PI/2;
        esfera.add(gltf.scene);
        console.log("ROBOT");
        console.log(gltf);
    })



    scene.add(new THREE.AxesHelper(3));
}

function update(){
    angulo+= 0.01;
    esferaCubo.rotation.y = angulo;
}

function render(){
    requestAnimationFrame(render);
    update();
    renderer.render(scene,camera);
}