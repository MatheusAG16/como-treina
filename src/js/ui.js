// Criar animação fade-in para o conteúdo da página
export function fadeIn(){
    const elementToFade = document.querySelectorAll(".fade-in");
    if (elementToFade.length === 0) {
        console.warn("Nenhum elemento com a classe .fade-in foi encontrado para animar.");
        return;
    }
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: .1
    }

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    elementToFade.forEach(element => {
        observer.observe(element);
    })
}

// Função para criar um card de exercício
export function createCardExercise(exercise) {

    // Cria um elemento div para o exercício
    const divExercicio = document.createElement("div");
    divExercicio.className = "exercicio";

    // Cria um Hr
    const hr = document.createElement("hr");
    divExercicio.appendChild(hr);

    // Cria um elemento h3 para o título do exercício
    const tituloExercicio = document.createElement("h3");
    tituloExercicio.textContent = exercise.title;
    divExercicio.appendChild(tituloExercicio);

    // Cria um elemento img para a imagem do exercício
    const imgExercicio = document.createElement("img");
    imgExercicio.src = exercise.img;
    divExercicio.appendChild(imgExercicio);

    // Cria o titulo "Como fazer:"
    const titleHowTo = document.createElement("h4");
    titleHowTo.textContent = "Como fazer:";
    divExercicio.appendChild(titleHowTo);

    // Cria o texto explicativo do exercício
    const howToText = document.createElement("p");
    howToText.textContent = exercise.howTo;
    divExercicio.appendChild(howToText);

    //Adiciona um id único
    divExercicio.id = exercise.id;

    return divExercicio;
}

// Função para criar uma lista de exercícios com base no grupo muscular selecionado
export function createListExercise(muscle, data) {
    if (muscle != "all") {
        const list = document.createElement("ol");

        data[muscle].forEach((exSelecionado) => {
            const itemLi = document.createElement("li");
            itemLi.className = "exercicio__item";
            
            list.appendChild(itemLi);

            const inputCheckbox = document.createElement("input");
            inputCheckbox.id = exSelecionado.id;
            inputCheckbox.name = "exercicios_selecionados";
            inputCheckbox.value = exSelecionado.title;
            inputCheckbox.type = "checkbox";
            inputCheckbox.dataset.category = muscle;
            itemLi.appendChild(inputCheckbox);

            const label = document.createElement("label");
            label.htmlFor = exSelecionado.id;
            label.textContent = exSelecionado.title;
            itemLi.appendChild(label);

            list.appendChild(itemLi);
        });
        const buttonGerar = document.createElement("button");
        buttonGerar.className = "gerarTreino";
        buttonGerar.id = "gerar-treino";
        buttonGerar.textContent = "Gerar treino";

        list.appendChild(buttonGerar);

        return list;
    } 
    else {

        //Criando a Lista para Determinado Grupo Muscular (Not all)

        const list = document.createElement("ol");

        for (const category in data) {
            const categoryTitle = document.createElement("h3");
            categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            list.appendChild(categoryTitle);
            for (let i = 0; i < data[category].length; i++) {
                const exSelecionado = data[category][i];
                
                const itemLi = document.createElement("li");
                itemLi.className = "exercicio__item";
                
                list.appendChild(itemLi);

                const inputCheckbox = document.createElement("input");
                inputCheckbox.id = exSelecionado.id;
                inputCheckbox.name = "exercicios_selecionados";
                inputCheckbox.value = exSelecionado.title;
                inputCheckbox.type = "checkbox";

                // Adiciona o atributo data-category com o nome da categoria
                inputCheckbox.dataset.category = data[category][0].category;
                
                itemLi.appendChild(inputCheckbox);

                const label = document.createElement("label");
                label.htmlFor = exSelecionado.id;
                label.textContent = exSelecionado.title;
                itemLi.appendChild(label);
                
                list.appendChild(itemLi);
            }
        }
        const buttonGerar = document.createElement("button");
        buttonGerar.textContent = "Gerar treino";
        buttonGerar.className = "gerarTreino";
        buttonGerar.id = "gerar-treino";

        list.appendChild(buttonGerar);

        return list;
    }
    
}

export function configurarUIParaUsuarioLogado(user){
    const loginButton = document.querySelector("#btn-login");
    const registerButton = document.querySelector("#btn-register");
    const logoutButton = document.querySelector("#btn-logout");

    // Atualiza a lista de navegação com o boas vindas ao usuário
    const navList = document.querySelector(".nav__list");
    const navListItem = document.createElement("li");
    navListItem.id = "li-bem-vindo";
    navListItem.textContent = `Bem-vindo, ${user.displayName}`;
    navList.appendChild(navListItem);

    if (loginButton) {
        loginButton.classList.add("hidden");
    }
    if (registerButton) {
        registerButton.classList.add("hidden");
    }
    if (logoutButton) {
        logoutButton.classList.remove("hidden");
    }
    console.log("Usuário logado:", user);
}

export function configurarUIParaUsuarioDeslogado(user){
    const loginButton = document.querySelector("#btn-login");
    const registerButton = document.querySelector("#btn-register");
    const logoutButton = document.querySelector("#btn-logout");

    // Atualiza a lista de navegação para retirar as boas vindas ao usuário
    const navListItem = document.querySelector("#li-bem-vindo");
    if(navListItem){
        navListItem.remove();
    }

    if (loginButton) {
        loginButton.classList.remove("hidden");
    }
    if (registerButton) {
        registerButton.classList.remove("hidden");
    }
    if (logoutButton) {
        logoutButton.classList.add("hidden");
    }
    console.log("Usuário deslogado:", user);
}

export function criarItemTreinoPersonalizado(){
    const containerTreino = document.querySelector(".container__treino");
    if (!containerTreino) {
        console.error("Container de treino não encontrado.");
        return;
    }
    const itemTreino = document.createElement("div");
    itemTreino.className = "item__treino";
    itemTreino.innerText = "+";
    const btnFechar = document.createElement("button");
    btnFechar.className = "btn__fechar";
    btnFechar.innerText = "X";
    btnFechar.addEventListener("click", () => {
        itemTreino.remove();
    })
    itemTreino.appendChild(btnFechar);

    containerTreino.appendChild(itemTreino);
}