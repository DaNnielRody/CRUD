// const criaNovaLinha = (nome, email) => {
//     const linhaNovoCliente = document.createElement('tr');
//     const conteudo = `
//     <td class="td" data-td>${nome}</td>
//     <td>${email}</td>
//     <td>
//         <ul class="tabela__botoes-controle">
//             <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
//             <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
//         </ul>
//     </td>
// `
//     linhaNovoCliente.innerHTML = conteudo;
//     return linhaNovoCliente;
// }

// sem promise

// const tabela = document.querySelector('[data-tabela]');
    
//     const http = new XMLHttpRequest();

//     http.open('GET', 'http://localhost:3000/profile'); // vai pegar e abrir no localhost:300

       //o que fazer com a resposta que o servidor vai mandar? ao carregar, o que ele vai fazer ao carregar a página?
//     http.onload = () => {
//         const data = JSON.parse(http.response)
//         data.forEach(elemento => {
//             tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email))
//         })
//     }
//     http.send() // vai ter os dados enviados


// com promise

// const tabela = document.querySelector('[data-tabela]');
// const listaClientes = () => {
//     const promise = new Promise((resolve, reject) => {
//         const http = new XMLHttpRequest();

//         http.open('GET', 'http://localhost:3000/profile'); // vai pegar e abrir no localhost:300

         //o que fazer com a resposta que o servidor vai mandar? ao carregar, o que ele vai fazer ao carregar a página?
//         http.onload = () => {
//             if (http.status >= 400) {
//                 reject(JSON.parse(http.response)) // transforma a resposta em objeto válido javaScript
//             } else {
//                 resolve(JSON.parse(http.response)) // transforma a resposta em objeto válido javaScript
//             }
//         }
//         http.send() // vai ter os dados enviados
//     })
//     return promise;   
// }

// listaClientes()
//     .then(data => {
//     data.forEach(elemento => {
//     tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email)) // colocou o tr criado dinâmicamente dentro do tbody com o appendChild
// })
// })