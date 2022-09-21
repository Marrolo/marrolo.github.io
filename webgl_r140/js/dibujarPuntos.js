/*
Seminario #1 dibujar puntos coon VBOs
*/
// Shader de vertices
const VSHADER_SOURCE = `
    attribute vec3 posicion;
    void main(){
        gl_Position = vec4(posicion,1.0);
        gl_PointSize = 10.0;
    }
`
// shader de fragmentos 
const FSHADER_SOURCE = `
    uniform highp vec3 color;
    vid main(){
        gl_FragColor = vec4(color,1.0);
    }
` 
//Globales
const clicks = [];
let colorFragmento;

function main(){
    // Recupera el lienzo
    const canvas = document.getElementById("canvas");
    const gl = getWebGLContext(canvas);

    //cargo shaders en GPU
    if(!initShaders(gl,VSHADER_SOURCE,FSHADER_SOURCE)){
        console.log("mal");
    }

    //color de borrado
    gl.clearColor(0.0, 0.0, 0.3, 1.0);

    //Localiza el att del shader posicion
    const coordenadas = gl.getAttribLocation(gl.program, 'posicion');

    //Creea buffer,etc..
    const bufferVertices = gl.createBuffer();
}