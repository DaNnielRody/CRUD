// import { clienteService } from "../service/cliente-service.js";

// // criamos um novo objeto URL que é capaz de nos dizer qual o endereço da página que estamos. Por meio da propriedade searchParams conseguimos acessar o método get e selecionar o id que vemos na url.
// const pegaURL = new URL(window.location);
// const id = pegaURL.searchParams.get('id'); // essa const junto da anterior faz com que o parâmetro da url seja buscado junto ao número do id, dada a query id(que foi definida no listaClientes para a identificação da url de acordo com o cliente), possibilitando assim a identificação de cada um


// const inputNome = document.querySelector('[data-nome]');
// const inputEmail = document.querySelector('[data-email]');

// clienteService.detalhaCliente(id) // essa linha recebe os dados de acordo com o id da página e faz com que o input delas tenha o mesmo valor que foi preenchido anteriormente na criação dos perfis
//     .then(dados => {
//         inputNome.value = dados.nome;
//         inputEmail.value = dados.email;
//     });


// const form = document.querySelector('[data-form]');

// form.addEventListener('submit', (evento) => {
//     evento.preventDefault();
    
//     clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)
//         .then(() => {
//         window.location.href = '../telas/edicao_concluida.html'
//     })
// })