import { register, login, logout } from './auth.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { auth } from './firebaseConfig.js';
import { configurarUIParaUsuarioLogado, configurarUIParaUsuarioDeslogado } from './ui.js';
import { fadeIn } from './ui.js';

// Função para exibir o conteúdo com efeito de fade-in
document.addEventListener("DOMContentLoaded", () => {
    fadeIn();
})

const registerForm =  document.querySelector("#register-form");
if(registerForm){
    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("Formulário de registro enviado");
        const username = registerForm.username.value;
        const email = registerForm.email.value;
        const password = registerForm.password.value;

        register(username, email, password)
    })
}

const loginForm = document.querySelector("#login-form");
if(loginForm){
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = loginForm.email.value;
        const password = loginForm.password.value;

        login(email, password)
    })
}

const logoutButton = document.querySelector("#btn-logout");
if(logoutButton){
    logoutButton.addEventListener("click", async (event) => {
        logout()
        console.log("Usuário deslogado");
    });
}

// Configuração dos botões de login e registro do Header
const loginButton = document.querySelector("#btn-login");
const registerButton = document.querySelector("#btn-register");

// Verifica se o usuário está logado e atualiza a interface
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Usuário logado:", user);
    configurarUIParaUsuarioLogado(user);

    const paginaAtual = window.location.pathname;
    if (paginaAtual.includes("register.html") || paginaAtual.includes("login.html")) {
        alert("Seja Bem-Vindo. Redirecionando para a página inicial.");
        window.location.href = "index.html";
    }
  } else {
    configurarUIParaUsuarioDeslogado(user);
  }
});
