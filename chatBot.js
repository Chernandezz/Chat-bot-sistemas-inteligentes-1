let entradas = {
  respIn: [
    "bien ok",
    "muy bien",
    "bien y tu",
    "bien",
    "super",
    "excelente",
    "ok",
  ],
  quienIn: [
    "quien eres?",
    "quien eres",
    "quien es",
    "quien es?",
    "eres?",
    "eres",
  ],
  nombreIn: [
    "Cual es tu nombre",
    "cuál es tu nombre",
    "nombre?",
    "nombre",
    "cual es tu nombre",
    "como te llamas?",
  ],
  birth: [
    "cual es tu fecha de nacimiento?",
    "cuando naciste",
    "cuando naciste?",
  ],
  materiaIn: [
    "que materia?",
    "estas en alguna materia?",
    "Estas en alguna materia",
    "materia",
  ],
  despedidaIn: ["chao", "bye", "hasta pronto", "adios"],
  edadIn: ["edad", "edad?", "qué edad tiene?", "años", "años?"],
  cancelarIn: [
    "voy a pasar la materia?",
    "cancelo la materia?",
    "voy a ganar el curso?",
    "gano o pierdo sistemas inteligentes?",
  ],
  chisteIn: ["cuentame un chiste", "chiste", "hazme reir"],
  echarPerrosIn: [
    "tienes novio",
    "tienes novia",
    "tienes pareja",
    "estudias o trabajas?",
  ],
  skynetIn: [
    "destruiras la tierra?",
    "destruir",
    "destruir a los humanos",
    "skynet",
    "terminator",
    "vas a destruir el planeta?",
  ],
  saludoIn: ["hola", "holita", "hello", "hi", "que hubo?"],
  estadoIn: [
    "como estas",
    "como estas?",
    "cómo estás",
    "como vas",
    "que mas",
    "¿como estas?",
    "cómo estás?",
    "como vas?",
    "que mas?",
    "bien y tu?",
  ],
  ocupaIn: ["que haces", "q haces", "que haces?", "q haces?"],
  preIn: ["te conozco", "te conozco?", "nos conocemos?", "nos conocemos"],
  hobbyIn: [
    "que te gusta hacer?",
    "que te gusta hacer",
    "q te gusta hacer",
    "q te gusta hacer?",
  ],
};

// Salidas
let salidas = {
  nombreOut: ["Mi nombre es ChatBot y tu?", "Yo soy ChatBot y tu?"],
  saludoOut: ["Hola, como estas?", "Que tal?", "Cómo estas?"],
  materiaOut: [
    "Sistemas inteligentes computacionales, la mejor",
    "Inteligencia Artificial, la mejor",
  ],
  despedidaOut: [
    "chao",
    "bye",
    "hasta pronto",
    "adios",
    "que vuelvas pronto",
    "exitos",
  ],
  edadOut: ["99 años y más"],
  respOut: ["bien ok perfecto ", "muy bien", "bien y mejorando"],
  quienOut: ["Un robot ", "Una entidad inteligente", "un ser muy listo"],
  estadoOut: ["muy bien y tu?", "Excelente y tu?", "Bien y tu?"],
  preOut: [
    "si, vemos sistemas inteligentes juntos",
    "si, en inteligencia artificial",
  ],
  cancelarOut: [
    "Mejor revisa tu citacion en el SIA",
    "Esto es 5 fijo",
    "Vas a subir el PAPA",
    "Cancele",
    "En De Interes General te responden",
    "Pasas raspando",
  ],
  chisteOut: [
    "Había una vez dos perros bravos y no se hablaban",
    "Una uva pasa y otra la saluda",
    "Un Tampico se fue para Cali y se volvio Del Valle",
    "Sabes cual es la bebida favorita del Rey Leon? La gasimba",
  ],
  echarPerrosOut: [
    "En este momento de la historia los ChatBot no nos interesamos en tener pareja. Buitre.",
  ],
  skynetOut: ["No, solo quiero ayudarte. Por Ahora :)"],
};

let checker = (arr, target) => target.every((v) => arr.includes(v));

function chatBot(message) {
  message = message.toLowerCase();

  if (entradas.saludoIn.includes(message)) {
    agregarMensajeBot(
      salidas.saludoOut[Math.floor(Math.random() * salidas.saludoOut.length)]
    );
  } else if (entradas.nombreIn.includes(message)) {
    agregarMensajeBot(
      salidas.nombreOut[Math.floor(Math.random() * salidas.nombreOut.length)]
    );
  } else if (entradas.materiaIn.includes(message)) {
    agregarMensajeBot(
      salidas.materiaOut[Math.floor(Math.random() * salidas.materiaOut.length)]
    );
  } else if (entradas.despedidaIn.includes(message)) {
    agregarMensajeBot(
      salidas.despedidaOut[
        Math.floor(Math.random() * salidas.despedidaOut.length)
      ]
    );
  } else if (entradas.edadIn.includes(message)) {
    agregarMensajeBot(
      salidas.edadOut[Math.floor(Math.random() * salidas.edadOut.length)]
    );
  } else if (entradas.respIn.includes(message)) {
    agregarMensajeBot(
      salidas.respOut[Math.floor(Math.random() * salidas.respOut.length)]
    );
  } else if (entradas.quienIn.includes(message)) {
    agregarMensajeBot(
      salidas.quienOut[Math.floor(Math.random() * salidas.quienOut.length)]
    );
  } else if (entradas.chisteIn.includes(message)) {
    agregarMensajeBot(
      salidas.chisteOut[Math.floor(Math.random() * salidas.chisteOut.length)]
    );
  } else if (entradas.echarPerrosIn.includes(message)) {
    agregarMensajeBot(
      echarPerrosOut[Math.floor(Math.random() * salidas.echarPerrosOut.length)]
    );
  } else if (entradas.estadoIn.includes(message)) {
    agregarMensajeBot(
      salidas.estadoOut[Math.floor(Math.random() * salidas.estadoOut.length)]
    );
  } else if (entradas.preIn.includes(message)) {
    agregarMensajeBot(
      salidas.preOut[Math.floor(Math.random() * salidas.preOut.length)]
    );
  } else if (entradas.cancelarIn.includes(message)) {
    agregarMensajeBot(
      salidas.cancelarOut[
        Math.floor(Math.random() * salidas.cancelarOut.length)
      ]
    );
  } else if (entradas.ocupaIn.includes(message)) {
    agregarMensajeBot(
      salidas.ocupaOut[Math.floor(Math.random() * salidas.ocupaOut.length)]
    );
  } else if (entradas.skynetIn.includes(message)) {
    agregarMensajeBot(
      salidas.skynetOut[Math.floor(Math.random() * salidas.skynetOut.length)]
    );
  }
}
