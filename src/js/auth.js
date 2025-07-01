import {auth} from  './firebaseConfig.js';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

export async function login(email, password) {
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("Usuário logado com sucesso:", user);
    } catch (error) {
        // Tratar erros de login, como email ou senha incorretos
        console.error("Erro ao fazer login:", error);
        throw error; // Repassa o erro para ser tratado onde a função é chamada
    }
}

export async function register(username, email, password) {
    // Implementar a lógica de registro de usuário
    try {
        // Tenta criar um novo usuário com email e senha
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        console.log("username:", username);
        console.log("email:", email);
        
        await updateProfile(user, {
            displayName: username // Atualiza o nome de exibição do usuário
        });
        
        return user;

    } catch (error) {
        // Tratar erros de registro, como email já em uso ou senha fraca
        console.error("Erro ao registrar usuário:", error);
        throw error; 
    }
}

export async function logout() {
    try {
        await signOut(auth);
        console.log("Usuário deslogado com sucesso");
    } catch (error) {
        // Tratar erros de logout
        console.error("Erro ao deslogar:", error);
        throw error;
    }
}

export async function LoginWithGoogle() {
    // Implementar a lógica de login com Google
    try {
        
    } catch (error) {
        console.error("Erro ao fazer login com Google:", error);
        throw error;
    }
}