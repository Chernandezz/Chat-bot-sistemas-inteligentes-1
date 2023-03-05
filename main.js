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
          <div class="chat__conversation-board__message__bubble"> <span>${message}</span></div>
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

  agregarMensajeUsuario(mensaje);
});
