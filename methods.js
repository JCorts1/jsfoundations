/* let numbers = [1,2,3,4,5];
let otherNumbers = numbers.forEach(display);

function display(item, index) {
    console.log(item);
};

filter 
forEach
*/

/* map */

const gastos = [
    { concepto: 'Comida', monto: 30.50, fecha: '2024-03-04' },
    { concepto: 'Transporte', monto: 20.00, fecha: '2024-03-03' },
    { concepto: 'Entretenimiento', monto: 50.00, fecha: '2024-03-02' },
    { concepto: 'Facturas', monto: 100.00, fecha: '2024-03-01' }
  ];

  const totalGastos = gastos.map((item) => item.monto).reduce((item, current) => item + current, 0);//gastos.reduce(sum)  ;
  
  // function sum(accumulator, element) {
   // return accumulator + element;
//}


  console.log(totalGastos);