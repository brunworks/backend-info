const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);

describe('Veiculos', () => {
    beforeEach((done) => {
        // Aqui, você pode adicionar lógica para resetar os dados se necessário
        done();
    });

    /*
        Teste de Criação de Veículo
    */
    describe('/POST veiculo', () => {
        it('deve criar um novo veículo', (done) => {
            let veiculo = {
                id: 2,
                placa: "DEF-5678",
                chassi: "9BWZZZ377VT004252",
                renavam: "0607080910",
                modelo: "Uno",
                marca: "Fiat",
                ano: 1998
            };
            chai.request(server)
                .post('/veiculos')
                .send(veiculo)
                .end((err, res) => {
                    res.should.have.status(201);
                    done();
                });
        });
    });

    /*
        Teste de Leitura de Veículo
    */
    describe('/GET veiculos', () => {
        it('deve listar TODOS os veículos', (done) => {
            chai.request(server)
                .get('/veiculos')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });

    /*
        Teste de Atualização de Veículo
    */
    describe('/PUT/:id veiculo', () => {
        it('deve atualizar um veículo dado o id', (done) => {
            let veiculo = {modelo: "Novo Uno", marca: "Fiat", ano: 2010}; // Exemplo de atualização
            chai.request(server)
                .put('/veiculos/2')
                .send(veiculo)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    /*
        Teste de Deleção de Veículo
    */
    describe('/DELETE/:id veiculo', () => {
        it('deve deletar um veículo dado o id', (done) => {
            chai.request(server)
                .delete('/veiculos/2')
                .end((err, res) => {
                    res.should.have.status(204);
                    done();
                });
        });
    });
});
