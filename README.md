# Como Treina: Seu Guia de Treinos Personalizado

![ComoTreina Screenshot](https://i.imgur.com/8QjP2yW.png) <p align="center">
  Um guia interativo de exercícios de academia com criação de treinos personalizados, desenvolvido para fins de estudo com HTML, CSS e JavaScript puro.
</p>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [✨ Funcionalidades](#-funcionalidades)
- [🛠️ Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [🚀 Como Rodar o Projeto](#-como-rodar-o-projeto)
- [🛣️ Melhorias Futuras](#-melhorias-futuras)
- [🤝 Como Contribuir](#-como-contribuir)
- [📄 Licença](#-licença)
- [✍️ Autor](#-autor)

---

## 📖 Sobre o Projeto

O **ComoTreina** nasceu como um projeto de estudo para aprofundar os conhecimentos em desenvolvimento front-end, focando na manipulação do DOM e na criação de uma experiência de usuário dinâmica e interativa sem o uso de frameworks complexos.

A aplicação funciona como um catálogo de exercícios de academia, onde o usuário pode:
- Explorar diversos exercícios separados por grupos musculares.
- Visualizar detalhes de cada exercício, incluindo instruções de execução, uma imagem destacando os músculos ativados e o movimento correto.
- Montar um treino personalizado, selecionando os exercícios desejados.
- Salvar múltiplos treinos, que ficam armazenados localmente no navegador através do `localStorage`, permitindo que o usuário acesse seus treinos a qualquer momento.

Este projeto está em constante evolução e aberto a sugestões e contribuições da comunidade.

---

## ✨ Funcionalidades

- [x] **Catálogo de Exercícios:** Visualização de um catálogo completo de exercícios.
- [x] **Detalhes do Exercício:** Página dedicada para cada exercício com instruções e imagem.
- [x] **Criação de Treinos:** Seleção de múltiplos exercícios para montar um treino personalizado.
- [x] **Armazenamento Local:** Salvamento dos treinos criados no `localStorage` do navegador.
- [x] **Lista de Treinos Salvos:** Página para visualizar, carregar e gerenciar os treinos salvos.
- [x] **Design Responsivo:** Interface adaptada para funcionar em desktops, tablets e celulares.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

- **HTML5** para a estrutura semântica.
- **CSS3** para estilização e design responsivo (com Media Queries).
- **JavaScript (ES6+)** para toda a interatividade e manipulação do DOM.
- **Bootstrap 5** (Opcional, se você usou) para agilizar a estilização de componentes.
- **Firebase Authentication** para o sistema de login e registro de usuários (não totalmente implementado).
- **LocalStorage API** para a persistência de dados no lado do cliente.

---

## 🚀 Como Rodar o Projeto

Para rodar este projeto localmente na sua máquina, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/MatheusAG16/como-treina.git
   ```

2. **Navegue até a pasta do projeto:**
   ```bash
   cd como-treina
   ```

3. **Abra o arquivo `index.html` no seu navegador.**
   - **Dica de especialista:** Para uma melhor experiência e para que a chamada `fetch()` ao seu arquivo JSON local funcione corretamente, recomendo usar um servidor local. Se você usa o VS Code, a extensão **Live Server** é perfeita para isso (basta clicar com o botão direito no `index.html` e selecionar "Open with Live Server").
   - **Node.js:** Com o Node.js você pode criar um servidor local utilizando o comando 'node server.js' dentro da pasta como-treina.

---

## 🛣️ Melhorias Futuras

Este projeto foi feito para estudo e está aberto a melhorias. Algumas ideias para o futuro incluem:

- [ ] Migrar o armazenamento de treinos do `localStorage` para o **Cloud Firestore**, vinculando-os ao usuário logado.
- [ ] Implementar a funcionalidade de **editar** e **reordenar** exercícios dentro de um treino salvo.
- [ ] Adicionar um sistema de **busca e filtros** para os exercícios.
- [ ] Criar uma página de **perfil de usuário**.
- [ ] Adicionar um cronômetro/timer para os intervalos de descanso.
- [ ] Migrar o CSS feito manualmente para o FrameWork BootStrap 5.

---

## 🤝 Como Contribuir

Contribuições são o que tornam a comunidade de código aberto um lugar incrível para aprender e criar. Qualquer contribuição que você fizer será **muito bem-vinda**.

1.  **Faça um Fork** do projeto.
2.  Crie uma nova Branch para sua feature (`git checkout -b feature/MinhaNovaFuncionalidade`).
3.  **Faça o Commit** das suas alterações (`git commit -m 'Adiciona MinhaNovaFuncionalidade'`).
4.  **Faça o Push** para a Branch (`git push origin feature/MinhaNovaFuncionalidade`).
5.  Abra um **Pull Request**.

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## ✍️ Autor

Feito com ❤️ por **Matheus de Andrade Germano**

- GitHub: [@MatheusAG16](https://github.com/MatheusAG16)
- LinkedIn: [/in/seu-linkedin](https://www.linkedin.com/in/matheus-germano-217070203/)