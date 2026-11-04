## A1. Conversiones de tipos

| Expresión | Mi predicción | Resultado real | Tipo (typeof) | Explicación |

| "5" + 3 | 53 | 53 | string | con + y un texto, junta los dos |
| "5" _ 3 | 53 | 15 | number | _ pasa el texto a número |
| "5" - "2" | 52 | 3 | number | - pasa los textos a número |
| Number("") | null | 0 | number | un texto vacío da 0 |
| Number("12px") | 12 | NaN | number | si tiene letras no se puede convertir |
| parseInt("12px") | 12 | 12 | number | lee hasta que encuentra una letra |
| parseFloat("3.75€") | 3.75 | 3.75 | number | lee los decimales y para en el € |
| "10" == 10 | true | true | boolean | == no mira el tipo |
| "10" === 10 | false | false | boolean | === sí mira el tipo |
| null + 1 | null | 1 | number | null cuenta como 0 |
| undefined + 1 | null | NaN | number | undefined no se puede sumar |
| typeof NaN | NaN | number | string | NaN es de tipo number |
| Boolean("0") | false | true | boolean | es un texto con algo dentro, así que es true |
| 0 \|\| "valor por defecto" | valor por defecto | valor por defecto | string | \|\| cambia el 0 porque es falso |
| 0 ?? "valor por defecto" | 0 | 0 | number | ?? solo cambia null y undefined |

## ¿Por qué NaN === NaN devuelve false?

Dos NaN no se consideran iguales, porque no son un valor concreto, solo “algo que salió mal”.
NaN es el único valor que no es igual ni a sí mismo.


## A2. Analizar código
1. ¿Qué muestra cada console.log? Ejecútalo después y compara.
El primero muestra lo dentro de la función: 55.
El segundo lo de fuera: 0.

2. ¿Por qué total vale distinto dentro y fuera de la función?
Porque hay dos variables distintas con el mismo nombre. Dentro de la función, let total crea una variable local que solo existe en esa función y anula a la global.
La función modifica la local, y la global se queda en 0.

3. ¿Qué error produce la última línea y por qué?
Al ser const, la variable descuento solo existe dentro de las llaves donde se declara. Fuera del if, descuento no existe.

4. ¿Qué cambia si dentro de la función sustituyes let total = … por total = …?
Sin let, ya no se crea una variable local: la asignación modifica la total global

5. ¿Qué ocurre si añades gastosEnvio = 7; al final del programa?
Si añades gastosEnvio = 7; al final, el programa da un error, porque gastosEnvio se declaró con const y una constante no se puede reasignar. El error es TypeError: Assignment to constant variable.

