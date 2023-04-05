// import { clienteService } from "../service/cliente-service.js";

// const form = document.querySelector('[data-form]');

// form.addEventListener('submit', (evento) => { // como o event listener já dá um parâmetro de evento para acionar como alvo, não precisa procurar o data pelo document, mas pelo próprio evento.target
//     evento.preventDefault(); // previne o comportamento padrão para ver o que contém dentro dos campos antes de enviar
//     const nome = evento.target.querySelector('[data-nome]').value;
//     const email = evento.target.querySelector('[data-email]').value;

//     clienteService.criaCliente(nome, email)
//         .then(() => {
//             window.location.href = '../telas/cadastro_concluido.html'; // esse comando significa: de onde estou, me mande para a localização deste endereço(no caso, da página do cadastro já concluído)            
//         });
// });