const caminhoImagens = './assets';
const contatos = [{
    mensagens: 1024,
    nome: 'Mãe ❤',
    descricao: 'O Senhor é o meu pastor; de nada me faltará. (Salmos 23:1) 🙏🙏',
    imagem: `${caminhoImagens}/alice.jpg`
}, {
    mensagens: 645,
    nome: 'Tio Omar',
    descricao: 'Disponível',
    imagem: `${caminhoImagens}/omar.jpg`
}, {
    mensagens: 877,
    nome: 'Irene RH',
    descricao: 'Olá! Eu estou usando o WhatsApp.',
    imagem: `${caminhoImagens}/irene.jpg`
}, {
    mensagens: 30,
    nome: 'Otavio Carona',
    descricao: '',
    imagem: `${caminhoImagens}/otavio.jpg`
}, {
    mensagens: 190,
    nome: 'Isaura',
    descricao: '🌞',
    imagem: `${caminhoImagens}/isaura.jpg`
}, {
    mensagens: 249,
    nome: 'Assistência Técnica',
    descricao: 'Horário de atendimento 08:00 - 17:30',
    imagem: `${caminhoImagens}/tiago.jpg`
}, {
    mensagens: 581,
    nome: 'Lurdes ONG animais',
    descricao: '🐱🐶',
    imagem: `${caminhoImagens}/lurdes.jpg`
}];

let maiores = [];
let numContatos = 5;
const li = document.querySelectorAll('li');
let item;
let maior = 0;

for (let i = 0; i < numContatos; i++){

    for (let j = 0; j < contatos.length; j++){
        
        if(contatos[j].mensagens > maior){
            maior = contatos[j].mensagens;
            item = j;
        
        }
    }
    
    maiores.push(contatos[item]);
    contatos.splice(item,1)
    maior = 0
}


function exibirContantos() {
    for (i = 0; i < 5; i++) {
        const img = li[i].querySelector('img');
        const nome = li[i].querySelector('.nome')
        const descricao = li[i].querySelector('.descricao');

        img.src = maiores[i].imagem;
        nome.textContent = maiores[i].nome;
        descricao.textContent = maiores[i].descricao;
    }
}
exibirContantos()
