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
  const keywords = {
    saludoIn: { input: entradas.saludoIn, output: salidas.saludoOut },
    nombreIn: { input: entradas.nombreIn, output: salidas.nombreOut },
    materiaIn: { input: entradas.materiaIn, output: salidas.materiaOut },
    despedidaIn: { input: entradas.despedidaIn, output: salidas.despedidaOut },
    edadIn: { input: entradas.edadIn, output: salidas.edadOut },
    respIn: { input: entradas.respIn, output: salidas.respOut },
    quienIn: { input: entradas.quienIn, output: salidas.quienOut },
    chisteIn: { input: entradas.chisteIn, output: salidas.chisteOut },
    echarPerrosIn: {
      input: entradas.echarPerrosIn,
      output: salidas.echarPerrosOut,
    },
    estadoIn: { input: entradas.estadoIn, output: salidas.estadoOut },
    preIn: { input: entradas.preIn, output: salidas.preOut },
    cancelarIn: { input: entradas.cancelarIn, output: salidas.cancelarOut },
    ocupaIn: { input: entradas.ocupaIn, output: salidas.ocupaOut },
    skynetIn: { input: entradas.skynetIn, output: salidas.skynetOut },
  };

  message = message.toLowerCase();

  for (let keyword in keywords) {
    if (keywords[keyword].input.includes(message)) {
      agregarMensajeBot(
        keywords[keyword].output[
          Math.floor(Math.random() * keywords[keyword].output.length)
        ]
      );
      return;
    }
  }
}
