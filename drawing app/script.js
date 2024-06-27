// drawing boread palae and context
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isDrawing = false;
let brushColor = '#000000';
let brushSize = 5;

canvas.addEventListener('mousedown', () => { //drawing thinging thoign hrwer 
    isDrawing = true;
    ctx.beginPath(); 
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});


canvas.addEventListener('mousemove', (event) => {
    if (!isDrawing) return; 

    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.strokeStyle = brushColor;

    ctx.lineTo(event.clientX, event.clientY); 
    ctx.stroke(); 
    ctx.beginPath(); 
    ctx.moveTo(event.clientX, event.clientY); 
});

document.getElementById('clearButton').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

document.getElementById('colorPicker').addEventListener('input', (event) => {
    brushColor = event.target.value;
});

document.getElementById('brushSize').addEventListener('input', (event) => {
    brushSize = event.target.value;
});
