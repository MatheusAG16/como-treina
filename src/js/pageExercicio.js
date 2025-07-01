import {createCardExercise, createListExercise} from './ui.js';
import {fetchExercicio} from'./api.js';

// // Cria o Array que vai receber os ids dos exercicios para salvar o treino do usuário
let treinoDoUsuarioIds = [];

// Ouvinte do evento de clique no botão para buscar os exercícios
const btnBuscarExercicios = document.querySelector("#btn-buscar-exercicios");
btnBuscarExercicios.addEventListener("click", async (event) => {
    event.preventDefault();
    // Obtém o valor do grupo muscular selecionado
    const muscle = document.querySelector("#muscle-group").value;
    const data = await fetchExercicio();
    
    // Lógica para mostar a lista no container
    const exerciciosList = document.querySelector(".exercicios__list");
    exerciciosList.innerHTML = ""; // Limpa a lista de exercícios
    exerciciosList.append(createListExercise(muscle, data));  
})

// Ouvinte do evento na lista de exercicios para gerar treino
const exerciciosList = document.querySelector("#exercicios-list");
exerciciosList.addEventListener("click", async (event) => {

    // Lógica se clicar no botão Gerar Treino:
    if(event.target.id === "gerar-treino"){
        treinoDoUsuarioIds = [];
        const data = await fetchExercicio();
        const checkboxesSelecionados = document.querySelectorAll("input[name='exercicios_selecionados']:checked");
        const treinoContainer = document.querySelector(".exercicios__treino");

        const exerciciosList = document.querySelector(".exercicios__list");
        exerciciosList.innerHTML = ""; // Limpa a lista de exercícios

        // Limpa o container de treino antes de adicionar novos exercícios
        treinoContainer.innerHTML = ""; 

        // Lógica para criar o botão Salvar e o input do Nome do Treino dinamicamente
        const containerSelecioneExercicio = document.querySelector(".exercicios__header")
        //Verifica se o botão não existe e cria um form com input e botão (para não duplicar)
        if (!document.getElementById("btn-salvar-treino")){
            const formSalvarTreino = document.createElement("form")
            formSalvarTreino.id = "form-salvar-treino";

            const inputNameTreino = document.createElement("input");
            inputNameTreino.type = 'text';
            inputNameTreino.required = true;
            inputNameTreino.placeholder = "Digite o nome do seu treino";
            inputNameTreino.id = "input-name-treino";

            const btnSalvar = document.createElement("button")
            btnSalvar.className = "main__btn";
            btnSalvar.id = "btn-salvar-treino";
            btnSalvar.innerText = "Salvar Treino";
            
            formSalvarTreino.appendChild(inputNameTreino);
            formSalvarTreino.appendChild(btnSalvar);
            
            formSalvarTreino.addEventListener("submit", (event) => {
                event.preventDefault();

                const nomeTreino = inputNameTreino.value;

                if(nomeTreino.trim() === ""){
                    alert("Digite um nome para seu Treino!");
                    return;
                }
                salvarTreino(treinoDoUsuarioIds, nomeTreino);
            })

            containerSelecioneExercicio.appendChild(formSalvarTreino)
        }

        // Itera sobre os checkboxes selecionados e exibe seus valores
        checkboxesSelecionados.forEach((checkbox, index) => {

            const nomeExercicio = checkbox.value;
            const categoriaExercicio = checkbox.dataset.category;
            const idDoExercicio = checkbox.id;
            
            // Verifica se o id do treino já está no array e adiciona se não estiver
            if (!treinoDoUsuarioIds.includes(idDoExercicio)) {
                treinoDoUsuarioIds.push(idDoExercicio);
            }

            // Aqui ele acha o exercicio que tem o mesmo nome na Lista e no JSON
            const cardExercise = data[categoriaExercicio].find(ex => ex.title === nomeExercicio);

            // Adiciona o id único no card encontrado
            cardExercise.id = `card-${index}`

            // Adiciona o card do exercicio no Container
            treinoContainer.append(createCardExercise(cardExercise));
        })
        // Move a tela para o container de treino
            treinoContainer.scrollIntoView({ behavior: "smooth", block: "start" });
        console.log('IDs no treino atual:', treinoDoUsuarioIds);
    };
    
})

// Função para salvar os treinos personalizados no LocalStorage do navegador
const salvarTreino = (idsDosTreinosSelecionados, nomeTreino) => {
    // Verifica se o nome do Treino já existe no LocalStorage
    if (nomeDeTreinoJaExiste(nomeTreino)){
        alert("O nome do Treino já Existe, por favor utilize outro!");
        return;
    }

    // Pegando os treinos já existentes no LocalStorage e transformando em Array para manipular
    const treinoSalvoNoLocal = localStorage.getItem('meusTreinosSalvos') || '[]';
    const treinoSalvoNoLocalArray = JSON.parse(treinoSalvoNoLocal);

    // Adiciona o Treino escolhido ao array com os treinos já salvos
    treinoSalvoNoLocalArray.push({'id': idsDosTreinosSelecionados, 'nome': nomeTreino});

    // Converte o Array em String para salvar no localStorage
    const treinoSalvoNoLocalString = JSON.stringify(treinoSalvoNoLocalArray);

    // Salva o treino no LocalStorage
    localStorage.setItem('meusTreinosSalvos' || '[]', treinoSalvoNoLocalString)
    alert('Treino salvo com sucesso!');

    // Remove o input e o botão de salvar para evitar bugs
    document.getElementById('btn-salvar-treino').remove();
    document.getElementById('input-name-treino').remove();
}

function nomeDeTreinoJaExiste(nomeParaVerificar) {

  const listaDeTreinos = JSON.parse(localStorage.getItem('meusTreinosSalvos') || '[]');
  
  return listaDeTreinos.some(treino => 
    treino.nome.trim().toLowerCase() === nomeParaVerificar.trim().toLowerCase()
  );
}
