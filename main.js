function $(selector) {
  return document.querySelector(selector);
}

function agregarMensajeUsuario(mensaje) {
  let mensajeHTML = `<div class="chat__conversation-board__message-container reversed">
        <div class="chat__conversation-board__message__person">
          <div class="chat__conversation-board__message__person__avatar"><img
              src="https://img.freepik.com/free-icon/user_318-219673.jpg" alt="Dennis Mikle" /></div><span
            class="chat__conversation-board__message__person__nickname">Dennis Mikle</span>
        </div>
        <div class="chat__conversation-board__message__context">
          <div class="chat__conversation-board__message__bubble"> <span>${mensaje}</span></div>
        </div>
      </div>`;
  $("#messagesContainer").innerHTML += mensajeHTML;
  $("#messagesContainer").scrollTop = $("#messagesContainer").scrollHeight;
}

function agregarMensajeBot(mensaje) {
  let mensajeHTML = `<div class="chat__conversation-board__message-container">
  <div class="chat__conversation-board__message__person">
  <div class="chat__conversation-board__message__person__avatar"><img
  src="https://d2cbg94ubxgsnp.cloudfront.net/Pictures/2000xAny/9/9/2/512992_shutterstock_715962319converted_749269.png"
  alt="Monika Figi" id="botImg"/></div><span class="chat__conversation-board__message__person__nickname">Monika
  Figi</span>
  </div>
  <div class="chat__conversation-board__message__context">
  <div class="chat__conversation-board__message__bubble"> <span>${mensaje}</span></div>
  </div>
  </div>`;
  $("#messagesContainer").innerHTML += mensajeHTML;
  $("#messagesContainer").scrollTop = $("#messagesContainer").scrollHeight;
}

$("#sendMessage").addEventListener("click", function () {
  let message = $("#message").value;
  if (message === "") {
    return;
  }

  agregarMensajeUsuario(message);
  chatBot(message);
  $("#message").value = "";
});

$("#message").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    $("#sendMessage").click();
  }
});
