const express = require("express")
const router = express.Router()

const Livro = require('./livroModel')

const app = express()
app.use(express.json())

const porta = 3030;

function mostraPorta() {
    console.log("Servidor iniciado e rodando na porta:", porta)
}

async function mostrarLivro(request, response) {
    try {
        const getLivro = await Livro.find()

        response.json(getLivro)
    } catch (error) {
        console.log(erro)
    }
}

async function criarLivro(request, response) {
    const newLivro = newLivro({
        name: request.body.name,
        author: request.body.author,
        category:request.body.category,
        num_pages: request.body.num_pages,
        deluxe: request.body.deluxe
    })

    try {
       const livroCreated = await newLivro.save()

       response.status(201).json(livroCreated)
    } catch (error) {
        console.log(erro)
    }
}

async function editarLivro(request, response) {
    try {
        const livroFound = await Livro.findById(request.params.id)

        if(request.body.name) {
            livroFound.name = request.body.name
        }
        if(request.body.author) {
            livroFound.author = request.body.author
        }
        if(request.body.category) {
            livroFound.body.category = request.body.category
        }
        if(request.body.num_pages) {
            livroFound.body.num_pages = request.body.num_pages
        }
        if(request.body.deluxe) {
            livroFound.body.deluxe = request.body.deluxe
        }

        const livroUpdate = await livroFound.save()

        response.status(200).json(livroUpdate)

    } catch (error) {
        console.log(erro)
    }
}

async function deletarLivro(request, response) {
    try {
        await Livro.findByIdAndDelete(request.params.id)

        response.json({mensagem: "Livro deletado com sucesso!"})
    } catch (error) {
        console.log(erro)
    }
}

app.use(router.get('/livros', mostrarLivro))
app.use(router.post('/livros', criarLivro))
app.use(router.patch('/livros/:id', editarLivro))
app.use(router.delete('/livros/:id', deletarLivro))
app.listen(porta, mostraPorta)