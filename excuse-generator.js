#!/usr/bin/env node

/**
 * Generador simple de excusas para Node.js.
 * Uso:
 *   node excuse-generator.js
 *   node excuse-generator.js "Carlos"
 */

const excuses = [
  "el trafico estaba imposible",
  "mi internet se cayo justo al enviar el archivo",
  "tuve una emergencia familiar de ultimo minuto",
  "el servidor se reinicio sin aviso",
  "se fue la luz en mi zona",
  "mi alarma no sono",
  "estaba resolviendo un bug critico",
  "la actualizacion tardo mucho mas de lo esperado"
];

const who = [
  "Mi perro",
  "Mi abuela",
  "El vecino",
  "Un extraterrestre"
];

const action = [
  "se comio",
  "rompio",
  "perdio",
  "borro"
];

const what = [
  "mi tarea",
  "el informe final",
  "las llaves del carro",
  "la presentacion",
  "mi laptop",
  "el archivo del proyecto"
];

const when = [
  "ayer por la noche",
  "esta manana",
  "hace un rato",
  "justo antes de salir",
  "durante la madrugada",
  "camino al trabajo"
];

const randomWho = who[Math.floor(Math.random() * who.length)];
const randomAction = action[Math.floor(Math.random() * action.length)];
const randomWhat = what[Math.floor(Math.random() * what.length)];
const randomWhen = when[Math.floor(Math.random() * when.length)];

const excuse = `${who[Math.floor(Math.random() * who.length)]} ${action[Math.floor(Math.random() * action.length)]} ${what[Math.floor(Math.random() * what.length)]} ${when[Math.floor(Math.random() * when.length)]}.`;
console.log(excuse);




/*
module.exports = { generateExcuse, excuses, who, action, what, when };
function generateExcuse(name = "Jefe") {
  const index = Math.floor(Math.random() * excuses.length);
  const excuse = excuses[index];
  return `${name}, ${excuse}.`;
}

if (require.main === module) {
  const nameArg = process.argv[2] || "Jefe";
  console.log(generateExcuse(nameArg));
}
*/
