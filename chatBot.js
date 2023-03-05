let respIn = ["bien ok", "muy bien", "bien y tu", "bien"];
let quienIn = ["quien eres?", "quien eres", "quien es"];
let nombreIn = [
  "Cual es tu nombre",
  "cuál es tu nombre",
  "nombre?",
  "nombre",
  "cual es tu nombre",
];
let birth = [
  "cual es tu fecha de nacimiento?",
  "cuando naciste",
  "cuando naciste?",
];
let materiaIn = [
  "que materia?",
  "estas en alguna materia?",
  "Estas en alguna materia",
  "materia",
];
let despedidaIn = ["chao", "bye", "hasta pronto", "adios"];
let edadIn = ["edad", "edad?", "qué edad tiene?", "años", "años?"];
let cancelarIn = [
  "voy a pasar la materia?",
  "cancelo la materia?",
  "voy a ganar el curso?",
  "gano o pierdo sistemas inteligentes?",
];
let chisteIn = ["cuentame un chiste", "chiste", "hazme reir"];
let echarPerrosIn = [
  "tienes novio",
  "tienes novia",
  "tienes pareja",
  "estudias o trabajas?",
];
let skynetIn = [
  "destruiras la tierra?",
  "destruir",
  "destruir a los humanos",
  "skynet",
  "terminator",
];
let saludoIn = ["hola", "holita", "hello", "hi", "que hubo?"];
let estadoIn = [
  "como estas",
  "cómo estás",
  "como vas",
  "que mas",
  "¿como estas?",
  "cómo estás?",
  "como vas?",
  "que mas?",
];
let ocupaIn = ["que haces", "q haces", "que haces?", "q haces?"];
let preIn = ["te conozco", "te conozco?", "nos conocemos?", "nos conocemos"];
let hobbyIn = [
  "que te gusta hacer?",
  "que te gusta hacer",
  "q te gusta hacer",
  "q te gusta hacer?",
];

// Salidas
let nombreOut = ["Mi nombre es ChatBot y tu?", "Yo soy ChatBot y tu?"];
let saludoOut = ["Hola, como estas?", "Que tal?", "Cómo estas?"];
let materiaOut = [
  "Sistemas inteligentes computacionales, la mejor",
  "Inteligencia Artificial, la mejor",
];
let despedidaOut = [
  "chao",
  "bye",
  "hasta pronto",
  "adios",
  "que vuelvas pronto",
  "exitos",
];
let edadOut = ["99 años y más"];
let respOut = ["bien ok perfecto ", "muy bien", "bien y mejorando"];
let quienOut = ["Un robot ", "Una entidad inteligente", "un ser muy listo"];
let estadoOut = ["muy bien y tu?", "Excelente y tu?", "Bien y tu?"];
let preOut = [
  "si, vemos sistemas inteligentes juntos",
  "si, en inteligencia artificial",
];
let cancelarOut = [
  "Mejor revisa tu citacion en el SIA",
  "Esto es 5 fijo",
  "Vas a subir el PAPA",
  "Cancele",
  "En De Interes General te responden",
  "Pasas raspando",
];
let chisteOut = [
  "Había una vez dos perros bravos y no se hablaban",
  "Una uva pasa y otra la saluda",
  "Un Tampico se fue para Cali y se volvio Del Valle",
  "Sabes cual es la bebida favorita del Rey Leon? La gasimba",
];
let echarPerrosOut = [
  "En este momento de la historia los ChatBot no nos interesamos en tener pareja. Buitre.",
];
let skynetOut = ["Todavía no está entre nuestros planes... todavía."];

let checker = (arr, target) => target.every((v) => arr.includes(v));

function chatBot(message) {
  message = message.toLowerCase();
  console.log(message);

  if (saludoIn.includes(message)) {
    agregarMensajeBot(saludoOut[Math.floor(Math.random() * saludoOut.length)]);
  } else if (nombreIn.includes(message)) {
    agregarMensajeBot(nombreOut[Math.floor(Math.random() * nombreOut.length)]);
  } else if (materiaIn.includes(message)) {
    agregarMensajeBot(
      materiaOut[Math.floor(Math.random() * materiaOut.length)]
    );
  } else if (despedidaIn.includes(message)) {
    agregarMensajeBot(
      despedidaOut[Math.floor(Math.random() * despedidaOut.length)]
    );
  } else if (edadIn.includes(message)) {
    agregarMensajeBot(edadOut[Math.floor(Math.random() * edadOut.length)]);
  } else if (respIn.includes(message)) {
    agregarMensajeBot(respOut[Math.floor(Math.random() * respOut.length)]);
  } else if (quienIn.includes(message)) {
    agregarMensajeBot(quienOut[Math.floor(Math.random() * quienOut.length)]);
  } else if (chisteIn.includes(message)) {
    agregarMensajeBot(chisteOut[Math.floor(Math.random() * chisteOut.length)]);
  }
}
