const express = require('express');

const server = express();

server.use(express.json());

const livros = ['História da Reforma', 'História do Cristianismo' , 'Simplesmente Jesus' , 
'Os outros da Bíblia' , 'Aqueles da Bíblia' , 'A história do avivamento Azusa' , 
'Mulheres da Bíblia','Bíblia de estudo da fé reformada' , 'Bíblia de estudo King James']


//Retorna todos livros
server.get('/livros', (req, res) => {
    return res.json(livros);
});


//Retorna um livro
server.get('/livros/:index', (req, res) => {
    const { index } = req.params;

    return res.json(livros[index]);
});

//Inserir um novo livro
server.post('/livros', (req, res) => {
    const { name } = req.body;
    livros.push(name);

    return res.json(livros);
});

//Atualizar um livro
server.put('/livros/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    livros[index] = name;

    return res.json(livros);
});

//Remover um livro
server.delete('/livros/:index', (req, res) => {
    const { index } = req.params;
    
    livros.splice(index,1);
    return res.json({message: "Removido com sucesso!"});
});



server.listen(3000);