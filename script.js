const loginBox = document.getElementById("loginBox");
const chatBox = document.getElementById("chatBox");
const messagesDiv = document.getElementById("messages");

let username = localStorage.getItem("username");

// Auto login if username exists


function login() {
  const input = document.getElementById("usernameInput");
  username = input.value.trim();

  if (!username) return;

  localStorage.setItem("username", username);
  showChat();
}

function showChat() {
  loginBox.classList.add("hidden");
  chatBox.classList.remove("hidden");
  loadMessages();
}

function loadMessages() {
  const messages = JSON.parse(localStorage.getItem("chat")) || [];

  messagesDiv.innerHTML = "";

  messages.forEach(msg => {
    const div = document.createElement("div");
    div.className = "message";

    div.innerHTML = `
      <span class="message-username">${msg.user}:</span>
      <span class="message-text">${msg.text}</span>
    `;

    messagesDiv.appendChild(div);
  });

  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById("messageInput");
  const text = input.value.trim();

  if (!text) return;

  const messages = JSON.parse(localStorage.getItem("chat")) || [];

  messages.push({
    user: username,
    text: text
  });

  localStorage.setItem("chat", JSON.stringify(messages));

  input.value = "";
  loadMessages();
}