// import { clienteService } from "../service/cliente-service.js";

// const criaNovaLinha = (nome, email, id) => {
//     const linhaNovoCliente = document.createElement('tr');
//     const conteudo = `
//     <td class="td" data-td>${nome}</td>
//     <td>${email}</td>
//     <td>
//         <ul class="tabela__botoes-controle">
//             <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
//             <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
//         </ul>
//     </td>
// `
//     linhaNovoCliente.innerHTML = conteudo;
//     linhaNovoCliente.dataset.id = id; //criou um data recebendo o id do cliente como propriedade

//     return linhaNovoCliente;
// }

// const tabela = document.querySelector('[data-tabela]');



// forma de declarar uma função assincrona de maneira 'desatualizada'

// tabela.addEventListener('click', (evento) => {
//     let botaoDeletar = evento.target.className ===
//         'botao-simples botao-simples--excluir';
//     if (botaoDeletar) {
//         const linhaCliente = evento.target.closest('[data-id]');//procurou o elemento pai mais próximo da linha
//         let id = linhaCliente.dataset.id;
//         clienteService.removeCliente(id)
//             .then(() => {
//                 linhaCliente.remove();
//         })
//     }
// })

// clienteService.listaClientes()
//     .then(data => {
//     data.forEach(elemento => {
//     tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id)) // colocou o tr criado dinâmicamente dentro do tbody com o appendChild
// })})