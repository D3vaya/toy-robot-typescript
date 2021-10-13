#Rompecabezas de codificación de robot de juguete
La aplicación es una simulación de un robot de juguete que se mueve sobre una mesa cuadrada, de dimensiones 5 unidades x 5 unidades.
No hay otras obstrucciones en la superficie de la mesa.
El robot puede deambular libremente por la superficie de la mesa, pero debe evitarse que caiga y se destruya. Debe evitarse cualquier movimiento que pueda provocar la caída del robot de la mesa; sin embargo, aún se deben permitir otros comandos de movimiento válidos.
Cree una aplicación que pueda leer en comandos de la siguiente forma:

PLACE X, Y, F
MOVE
IZQUIERDA
DERECHA
REPORT

- PLACE pondrá el robot de juguete sobre la mesa en la posición X, Y y mirando al NORTH, SUR, ESTE u OESTE.
- El origen (0,0) se puede considerar como la esquina más SUROESTE.
- El primer comando válido para el robot es un comando PLACE, después de eso, se puede emitir cualquier secuencia de comandos, en cualquier orden, incluido otro comando PLACE. La aplicación debe descartar todos los comandos en la secuencia hasta que se haya ejecutado un comando PLACE válido.
- MOVE moverá el robot de juguete una unidad hacia adelante en la dirección en la que se encuentra actualmente.

IZQUIERDA y DERECHA rotarán el robot 90 grados en la dirección especificada sin cambiar la posición del robot.

REPORT anunciará las X, Y y F del robot. Esto puede ser de cualquier forma, pero la salida estándar es suficiente.

Un robot que no está en la mesa puede elegir ignorar los comandos MOVER, IZQUIERDA, DERECHA e INFORME. . La entrada puede ser de un archivo o de una entrada estándar, según lo elija el desarrollador. . Proporcione datos de prueba para ejercitar la aplicación.

Restricciones: El robot de juguete no debe caerse de la mesa durante el movimiento. Esto también incluye la colocación inicial del robot de juguete. Debe ignorarse cualquier movimiento que pueda provocar la caída del robot.

Ejemplo de entrada y salida:

PLACE 0,0, NORTH
MOVE
REPORT

Salida: 0,1, NORTH
