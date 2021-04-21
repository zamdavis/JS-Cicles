//While//

//Mientras que la condición sea verdadera, el código se ejecuta//
let i = 0;
while (i < 3) { // muestra 0, luego 1, luego 2
alert( i );
i++;
}

let i = 3;
while (i) { // cuando i es 0, la condición es false, y el bucle se para
alert( i );
i--;
}

//Do while//

//El ciclo ejecuta primero el cuerpo, luego verifica la condición,si es cierto, lo ejecutará una y otra vez.//

let i = 0;
do {
alert( i );
i++;
} while (i < 3);

//For//

for (let i = 0; i < 3; i++) { // muestra 0, luego 1, luego 2
    alert(i);
    }