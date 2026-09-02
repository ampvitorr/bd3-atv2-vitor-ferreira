use('BD3-NoSQL-AtlasMongoDB');

db.getCollection('bd3-nosql-atv1').updateOne(
    { cod_aluno: 2 },
    {
        $set: {
            nome: 'Gabriel Almeida Santos Alterado',
            cpf: '99999999999',
            rg: '999999999'
        }
    }
);

db.getCollection('bd3-nosql-atv1').findOne({
    cod_aluno: 1
});

// EXCLUIR ALUNO
db.getCollection('bd3-nosql-atv1').deleteOne({
    cod_aluno: 1
});

db.getCollection('bd3-nosql-atv1').findOne({
    cod_aluno: 2
});