import { createCardExercise } from "./ui.js";
import { fetchExercicio } from "./api.js";

document.addEventListener("DOMContentLoaded", renderizarTela())

async function renderizarTela() {

    //Seleciona o container da pagina meu treino para colocar os cards futuramente
    const containerTreino = document.querySelector(".exercicios__treino");
    containerTreino.innerHTML = '';

    // Cria a lista de Treinos
    const listaDeTreinos = document.createElement('ul');
    listaDeTreinos.className = 'list-group';
    // Adicionando ouvinte aos botões da interface
    listaDeTreinos.addEventListener('click', (e) => {

        // Pega o elemento li mais próximo do botão, realiza um querySelector para pegar o elemento p onde está o nome do treino a ser passado para as seguintes funções:
        const liComTreinoParaExcluir = e.target.closest('li');
        const nomeDoTreinoParaExcluir = liComTreinoParaExcluir.querySelector('p').textContent;
        
        // Função para renderizar o treino na página
        if (e.target.id === 'btn-ver-treino') {
            mostrarTreino(nomeDoTreinoParaExcluir);
        }

        // Função para excluir o treino no localStorage
        if (e.target.id === 'btn-x'){
            excluirTreino(nomeDoTreinoParaExcluir);
        }
    })

    // Adiciona os itens na lista e a lista no container
    containerTreino.appendChild(listaDeTreinos)

    // Pega os dados no localStorage e transforma em um array manipulavel
    const treinosSalvosNoLocal = localStorage.getItem('meusTreinosSalvos') || '[]';
    const treinosSalvosNoLocalArray = JSON.parse(treinosSalvosNoLocal);

    // Se não houver dados no LocalStorage, ele adiciona um texto no item citando que não existe treino
    if(treinosSalvosNoLocalArray.length === 0){
        const itemTreino = document.createElement('li')
        itemTreino.textContent = 'Não foi criado nenhum Treino Personalizado, crie um!'
        containerTreino.appendChild(itemTreino)
    }

    // Itera sobre o Array com os treinos salvos, e cria um item da lista com o nome do Treino adicionando-o a lista
    treinosSalvosNoLocalArray.forEach(treino => {
        const itemTreino = document.createElement('li')
        itemTreino.className = 'list-group-item';
        itemTreino.name = treino.name;

        const paragrafroNomeTreino = document.createElement('p');
        paragrafroNomeTreino.className = 'list-group-p'
        paragrafroNomeTreino.textContent = treino.nome;

        const btnVerTreino = document.createElement('button')
        btnVerTreino.className = 'main__btn'
        btnVerTreino.textContent = 'Ver Treino'
        btnVerTreino.id = 'btn-ver-treino'

        const btnExcluirTreino = document.createElement('button');
        btnExcluirTreino.className = 'main__btn'
        btnExcluirTreino.textContent = "X"
        btnExcluirTreino.id = 'btn-x'

        itemTreino.appendChild(paragrafroNomeTreino)
        itemTreino.appendChild(btnVerTreino)
        itemTreino.appendChild(btnExcluirTreino)
        listaDeTreinos.appendChild(itemTreino)
    });
}

async function excluirTreino(nomeTreino){
    const meusTreinosSalvos = localStorage.getItem('meusTreinosSalvos');
    const meusTreinosSalvosArray = JSON.parse(meusTreinosSalvos)

    meusTreinosSalvosArray.forEach((treino, index) => {
        if(treino.nome === nomeTreino){
            meusTreinosSalvosArray.splice(index, 1)
            const meusTreinosSalvosString = JSON.stringify(meusTreinosSalvosArray)
            localStorage.setItem('meusTreinosSalvos', meusTreinosSalvosString)
            console.log(`Item ${index}, nome: ${treino.nome} removido com Sucesso!`)
            renderizarTela();
        }
    })
}

async function mostrarTreino(nomeTreino) {

    // Salva o container em uma variavel
    const containerTreino = document.querySelector('.treino-completo')
    containerTreino.innerHTML = '';

    // Pega os dados do JSON exercicios e "Achata" em um único Array a ser percorrido pelo filter
    const data = await fetchExercicio();
    const todosOsExercicios = (Object.values(data).flat());

    const treinosSalvosNoLocal = localStorage.getItem('meusTreinosSalvos');
    const treinosSalvosArray = JSON.parse(treinosSalvosNoLocal);

    const treinoEscolhido = treinosSalvosArray.filter((treino) => treino.nome === nomeTreino)
    const idsDosTreinosEscolhidos = treinoEscolhido[0].id

    const exerciciosDoTreino = todosOsExercicios.filter(exercicio => idsDosTreinosEscolhidos.includes(exercicio.id))
    
    exerciciosDoTreino.forEach((treino) => {
        containerTreino.appendChild(createCardExercise(treino))
    })

    console.log('exercicios do Treino: ')
    console.log(exerciciosDoTreino)
}

