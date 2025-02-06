const express = require('express');

const router = express.Router();

// carrega o book model
const Book = require('../../models/Book');
const { model } = require('mongoose');

router.get('/test', (req, res) => res.send('testando rota book'));

// pegar todos os livros
router.get('/', (req, res) => {
    Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(404).json({nobooksfound: 'Nenhum livro encontrado'}));
});
// pegar livros por id
router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(404).json({nobooksfound: 'Nenhum livro encontrado'}))
});
// para adicionar o livro
router.post('/', (req, res) => {
    Book.create(req.body)
    .then(books => res.json({msg: 'Livro adicionado com sucesso'}))
    .catch(err => res.status(404).json({error: 'não foi possivel adicionar este livro'}));
});

//atualizar livro
router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json({msg: 'Atualizado com sucesso'}))
    .catch(err => res.status(400).json({error: 'não foi atualizado'}))
});

// deletar livros
router.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id, req.body)
    .then(book => res.json({msg: 'deletado com sucesso'}))
    .catch(err => res.status(400).json({error: 'não foi possivel deletar'}))
});

module.exports = router;