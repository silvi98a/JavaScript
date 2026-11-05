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

## A3. Decisiones y bucles: boletín de notas
Aprobados: 6
Media: 6.81
Nota más alta: 10

## A4. Set y Map: lista de inscripciones
Sin normalizar: 6
Normalizados: 4
ana@ies.es → 2
luis@ies.es → 2
marta@ies.es → 2
pablo@ies.es → 1
[ 'ana@ies.es', 'luis@ies.es', 'marta@ies.es', 'pablo@ies.es' ]

1. Usa un Set para obtener los correos sin repetir. ¿Cuántos salen? ¿Por qué no es el resultado que esperabas?
Salen 6 correos. No es lo que esperaba (4) porque el Set compara los textos tal cual, y “ana@ies.es” y “ANA@ies.es” son strings distintos por las mayúsculas. Lo mismo pasa con “marta@ies.es” y “Marta@ies.es”. Solo se elimina el duplicado exacto “luis@ies.es”.


2. Repite el apartado normalizando antes cada correo a minúsculas (correo.toLowerCase()). ¿Cuántos salen ahora?
Ahora salen 4. Al pasar cada correo a minúsculas con toLowerCase() antes de añadirlo, las variantes de ana y de marta pasan a ser el mismo texto y el Set solo guarda uno de cada.


3. Usa un Map para contar cuántas veces aparece cada correo normalizado. Recórrelo y muestra luis@ies.es → 2.
Recorro el array y, para cada correo normalizado, miro si ya está en el Map. Si está, le sumo 1 a su contador; si no, lo creo con valor 1. Después recorro el Map y muestro cada pareja, por ejemplo luis@ies.es → 2. El resultado es: ana 2, luis 2, marta 2 y pablo 1.


4. Convierte el Set del apartado 2 en un array ordenado alfabéticamente.
Convierto el Set del apartado 2 en array con el operador spread ([...unicosNorm]) y le aplico .sort(), que lo ordena alfabéticamente: ana, luis, marta, pablo.