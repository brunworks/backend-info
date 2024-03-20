const fs = require('fs');
const path = require('path');
const Veiculo = require('../models/veiculo');

const filePath = path.join(__dirname, '..', 'data', 'veiculos.json');

const lerVeiculos = () => {
    const veiculosRaw = fs.readFileSync(filePath);
    return JSON.parse(veiculosRaw);
};

const salvarVeiculos = (veiculos) => {
    fs.writeFileSync(filePath, JSON.stringify(veiculos, null, 2));
};

exports.listarVeiculos = (req, res) => {
    res.json(lerVeiculos());
};

exports.obterVeiculo = (req, res) => {
    const veiculos = lerVeiculos();
    const veiculo = veiculos.find(v => v.id === parseInt(req.params.id));
    res.json(veiculo);
};

exports.criarVeiculo = (req, res) => {
    const novosVeiculos = [...lerVeiculos(), req.body];
    salvarVeiculos(novosVeiculos);
    res.status(201).send();
};

exports.atualizarVeiculo = (req, res) => {
    let veiculos = lerVeiculos();
    veiculos = veiculos.map(v => (v.id === parseInt(req.params.id) ? req.body : v));
    salvarVeiculos(veiculos);
    res.status(200).send();
};

exports.deletarVeiculo = (req, res) => {
    let veiculos = lerVeiculos();
    veiculos = veiculos.filter(v => v.id !== parseInt(req.params.id));
    salvarVeiculos(veiculos);
    res.status(204).send();
};
