
// var campos = [
//     document.querySelector('#data'),
//     document.querySelector('#quantidade'),
//     document.querySelector('#valor')
// ];

// var tbody = document.querySelector('table tbody');

// console.log(campos);

// document.querySelector('.form').addEventListener('submit', function(event) { 

//     /** 
//      * anything we do on a submit event of a form, won't appear on the screen because 
//      * the form default behavior is to re-render the page on submit
//      * so if we want for instance console.log some text we need to prevent the natural
//      * behavior of a form
//     */
//     /** nao vai ser exibido pq ao executar o event de submit a page da um refresh do 
//      * body, logo o console tambem da um refresh exibindo novamente os scripts 
//     */
//     console.log("Testing submit");

//     event.preventDefault();

//     /**create tbody element */
//     var tr = document.createElement('tr');

//     /**create inner elements of tr */
//     campos.forEach(
//         function(campo){
//             var td = document.createElement('td');
//             td.textContent = campo.value;
//             tr.appendChild(td);
//         }
//     );

//     /**creating and appending the final column */
//     var tdVolume = document.createElement('td');
//     tdVolume.textContent = campos[1].value * campos[2].value;
//     tr.appendChild(tdVolume);

//     tbody.appendChild(tr);

//     campos[0].value = '';
//     campos[1].value = 1;
//     campos[2].value = 0;

//     campos[0].focus();
// } );

let negociacaoController = new NegociacaoController();

let adiciona = negociacaoController.adiciona.bind(negociacaoController)
document.querySelector(".form").addEventListener("submit", adiciona );