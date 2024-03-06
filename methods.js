// map
 
const gastos = [
    { concepto: 'Comida', monto: 30.50, fecha: '2024-03-04' },
    { concepto: 'Transporte', monto: 20.00, fecha: '2024-03-03' },
    { concepto: 'Entretenimiento', monto: 50.00, fecha: '2024-03-02' },
    { concepto: 'Facturas', monto: 100.00, fecha: '2024-03-01' }
  ];

  const totalGastos = gastos.map((item) => item.monto).reduce((item, current) => item + current, 0);
  console.log(totalGastos);

  //Filter

const customers = [
    {nameId: "Juan", age: 32},
    {nameId: "Max", age: 17},
    {nameId: "Dom", age: 18},
    {nameId: "Kurl", age: 16},
    {nameId: "Sam", age: 27},
];

const olders = customers.filter((item) => item.age >= 18);
console.log(olders);

//forEach

const animals = [
    {animal: "Cow"},
    {animal: "Snake"},
    {animal: "Deer"},
    {animal: "Wild-dog"},
];

const message = "s in the"

const warningAnimal = animals.forEach((item) => console.log(item.animal + "s in the area"));

console.log(warningAnimal);

