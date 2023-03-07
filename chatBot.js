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
  expandirRepresentacionIaIn: [
    "mas",
    "expande tu respuesta",
    "continua",
    "mas?",
  ],
  agradecimientoIn: [
    "gracias",
    "gracias!",
    "gracias!",
    "gracias!!",
    "muchas gracias",
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
  representacionIaIn: [
    "que es la inteligencia artificial?",
    "que es la ia?",
    "formas de representación de conocimiento en IA",
    "formas de representación de conocimiento en inteligencia artificial",
    "formas de representación de conocimiento en IA?",
    "formas de representación de conocimiento en inteligencia artificial?",
    "cuales son las formas de representación de conocimiento en inteligencia artificial?",
    "formas de representación de la inteligencia artificial",
    "formas de representación IA",
  ],
  saludoIn: ["hola", "holita", "hello", "hi", "que hubo?"],
  ontologiaIn: ["que es la ontologia?", "que es la ontologia", "ontologia?"],
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
  inferenciaIn: [
    "que es la inferencia?",
    "que es la inferencia",
    "inferencia?",
    "inferencia",
  ],
};

// Salidas
let salidas = {
  nombreOut: [
    "Mi nombre es CRIS-TRON-X3000 y tu?",
    "Yo soy CRIS-TRON-X3000 y tu?",
  ],
  saludoOut: ["Hola, como estas?", "Que tal?", "Cómo estas?"],
  materiaOut: [
    "Sistemas inteligentes computacionales, la mejor",
    "Inteligencia Artificial, la mejor",
  ],
  agradecimientoOut: [
    "De nada",
    "De nada, es un placer ayudarte",
    "De nada!",
    "Con mucho gusto.",
  ],
  ontologiaOut: [
    'La ontología es una rama de la filosofía que se ocupa del estudio de la naturaleza de la realidad, la existencia y la estructura de las entidades que existen en el mundo. En otras palabras, la ontología se enfoca en la pregunta fundamental de "¿qué existe?" y en cómo se relacionan entre sí los distintos tipos de entidades existentes.',
    "En el ámbito de la inteligencia artificial y la informática, la ontología se refiere a una descripción formal y explícita de conceptos y relaciones relevantes en una determinada área de conocimiento. En este contexto, una ontología se utiliza para crear un modelo de conocimiento compartido entre personas y sistemas informáticos, lo que permite una mejor comprensión y procesamiento de la información en una determinada área. Las ontologías se utilizan en aplicaciones como la gestión de contenido web, la minería de datos y la interoperabilidad de sistemas informáticos.",
  ],

  expandirRepresentacionIaOut: [
    "Existen diversas formas de representación de conocimiento en IA, entre las que se incluyen:<br>Lógica: Es una forma de representación que utiliza reglas formales para representar el conocimiento y los hechos. La lógica proposicional y la lógica de primer orden son dos ejemplos de lógica utilizados en la representación de conocimiento en IA.<br>Redes Semánticas: Las redes semánticas son gráficos que representan el conocimiento en términos de objetos y relaciones entre ellos. Las redes semánticas son utilizadas a menudo en sistemas de procesamiento de lenguaje natural para representar el significado de las palabras.<br>Marcos: Los marcos son estructuras de datos que representan una situación o un concepto y sus atributos. Los marcos se utilizan a menudo para representar el conocimiento en sistemas de inteligencia artificial que deben comprender y modelar situaciones complejas.<br>Reglas de Producción: Las reglas de producción son un conjunto de reglas que describen cómo se deben tomar decisiones en base a ciertas condiciones. Las reglas de producción son a menudo utilizadas en sistemas expertos para representar el conocimiento.<br>Sistemas Basados en Casos: Los sistemas basados en casos representan el conocimiento en términos de casos y soluciones. Estos sistemas utilizan la información de casos anteriores para resolver problemas similares.<br>Redes Neuronales: Las redes neuronales son un tipo de modelo matemático que se basa en el funcionamiento de las neuronas en el cerebro. Estas redes se utilizan a menudo en la representación del conocimiento en sistemas de aprendizaje automático.<br>Lógica difusa: La lógica difusa es un tipo de lógica que permite la representación de incertidumbre y vaguedad en el conocimiento. Se utiliza a menudo en sistemas de control y toma de decisiones para representar el conocimiento y la incertidumbre asociada a las decisiones.",
  ],

  representacionIaOut: [
    "Algunas formas de representación de conocimiento en IA incluyen la lógica, redes semánticas, marcos, reglas de producción, sistemas basados en casos, redes neuronales y lógica difusa. Estas formas permiten representar el conocimiento de manera estructurada y comprensible para los sistemas de inteligencia artificial.",
    "La inteligencia artificial es la rama de la informática que se encarga de desarrollar sistemas que puedan realizar tareas que requieren inteligencia humana. La inteligencia artificial es una rama de la informática que se encarga de desarrollar sistemas que puedan realizar tareas que requieren inteligencia humana.",
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
  inferenciaOut: [
    "La inferencia se refiere al proceso de llegar a una conclusión o deducción a partir de premisas o información previa. En el contexto de la lógica y la inteligencia artificial, la inferencia se utiliza para obtener nuevas conclusiones a partir de proposiciones conocidas.<br>En la lógica, la inferencia se realiza mediante el uso de reglas y principios bien definidos, y se puede utilizar para demostrar la validez o invalidez de un argumento.",
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
    ontologiaIn: { input: entradas.ontologiaIn, output: salidas.ontologiaOut },
    edadIn: { input: entradas.edadIn, output: salidas.edadOut },
    respIn: { input: entradas.respIn, output: salidas.respOut },
    quienIn: { input: entradas.quienIn, output: salidas.quienOut },
    chisteIn: { input: entradas.chisteIn, output: salidas.chisteOut },
    inferenciaIn: {
      input: entradas.inferenciaIn,
      output: salidas.inferenciaOut,
    },
    agradecimientoIn: {
      input: entradas.agradecimientoIn,
      output: salidas.agradecimientoOut,
    },
    representacionIaIn: {
      input: entradas.representacionIaIn,
      output: salidas.representacionIaOut,
    },
    expandirRepresentacionIaIn: {
      input: entradas.expandirRepresentacionIaIn,
      output: salidas.expandirRepresentacionIaOut,
    },
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
