const data = require("./db.js");

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);


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



server.listen(port, () => {
    console.log(`Server is running in http://localhost:${port}`);
});