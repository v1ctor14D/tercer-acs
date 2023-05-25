let circleX = [];
let circleSpeed = [];
const numCircles = 4;

function setup() {
  createCanvas(450, 450);

  let initialX = 50;
  let spacing = 80;

  for (let i = 0; i < numCircles; i++) {
    circleX[i] = initialX + i * spacing; // Posición inicial en x del círculo
    circleSpeed[i] = 5; // Velocidad de movimiento del círculo en el eje x
  }
}

function draw() {
  background(199, 218, 145);

  strokeWeight(0);
  //quad
  fill(124, 179, 66);
  quad(30, 350, 500, 193, 500, 500, 15, 273);
  fill(56, 142, 60);
  quad(50, 500, 300, 193, 500, 500, 15, 273);
  //elipse del fondo
  strokeWeight(0);
  fill(39, 174, 96); //verde
  ellipse(250, 190, 350, 350);
  fill(48, 63, 159); //azul
  ellipse(220, 190, 250, 250);
  fill(150); //gris
  ellipse(15, 300, 250, 250);
  fill(204, 0, 51); //rojo
  ellipse(2, 300, 250, 250);
  fill(51, 102, 0); //verde oscuro
  ellipse(2, 300, 150, 150);

  for (let i = 0; i < numCircles; i++) {
    // Actualizar la posición del círculo
    circleX[i] += circleSpeed[i];

    // Verificar si el círculo ha alcanzado los límites del canvas
    if (circleX[i] > width || circleX[i] < 0) {
      // Invertir la velocidad para cambiar la dirección del movimiento
      circleSpeed[i] *= -1;
    }

    // Dibujar el círculo en la posición actualizada
    strokeWeight(0);
    fill(250); // Blanco
    ellipse(circleX[i], 100 + i * 70, 110, 110);
    fill(0);
    ellipse(circleX[i], 100 + i * 70, 90, 90);
    fill(247, 220, 111 );
    ellipse(circleX[i], 100 + i * 70, 70, 70);
    fill(29, 131, 72);
    ellipse(circleX[i], 100 + i * 70, 50, 60);
    fill(0);
    ellipse(circleX[i],100 + i * 70, 20,65)
  }
}
