function mostrarTela (req, res) {
    return res.render('produto');
}

function adicionarProduto (req, res) {
    console.log('Adicionando um novo produto...');
    //console.log(req);
    res.redirect("/Produto");
}

module.exports = {
    mostrarTela,
    adicionarProduto
}  