const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DADOS_ARQUIVO = path.join(__dirname, 'exercicios.json');

app.use(express.json());
app.use(express.static('src'));

app.post('/cadastrar-exercicio', (req, res) => {
    console.log('Novo exercício recebido:', req.body);

    const novoExercicio = req.body;
    const category = novoExercicio.category;


    fs.readFile(DADOS_ARQUIVO, 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo:', err);
            return res.status(500).send('Erro interno do servidor');
        }

        const exercicios = JSON.parse(data);

        // Verifica se a categoria já existe
        if(exercicios[category]) {
            // Adiciona o novo exercício à categoria existente
            exercicios[category].push(novoExercicio);
        } else {
            return res.status(400).send('Categoria inválida ou não existe');
        }

        fs.writeFile(DADOS_ARQUIVO, JSON.stringify(exercicios, null, 2), (err) => {
            if (err) {
                console.error('Erro ao escrever no arquivo:', err);
                return res.status(500).send('Erro interno do servidor');
            }
            console.log('Exercício cadastrado com sucesso:', novoExercicio);
            // Envia uma resposta de sucesso
            res.status(200).send('Exercício cadastrado com sucesso');
        })
    })
})

app.get('/buscarExercicio', (req, res) => {
    fs.readFile(DADOS_ARQUIVO, 'utf-8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo:', err);
            return res.status(500).send('Erro interno do servidor');
        }

        const exercicios = JSON.parse(data);
        res.status(200).json(exercicios);
    })
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})