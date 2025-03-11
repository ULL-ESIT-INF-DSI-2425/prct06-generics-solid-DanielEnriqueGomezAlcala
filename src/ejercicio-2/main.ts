import { ArithmeticableCollection } from "./arithmeticablecollection";
import { Complex } from "./complex";
import { Rational } from "./rational";

const complexCollection = new ArithmeticableCollection<Complex>();
complexCollection.addArithmeticable(new Complex(1, 2));
complexCollection.addArithmeticable(new Complex(3, 4));
console.log(complexCollection.getNumberOfArithmeticables())

const rationalCollection = new ArithmeticableCollection<Rational>();
rationalCollection.addArithmeticable(new Rational(1, 2));
rationalCollection.addArithmeticable(new Rational(3, 4));
console.log(complexCollection.getNumberOfArithmeticables())

console.log("Complex Collection");
let aux: Complex = complexCollection.getArithmeticable(0)
let aux2: Complex = complexCollection.getArithmeticable(1)
let val = aux.add(aux2)
console.log(`Parte real: ${val.real_}\nParte imaginaria: ${val.imaginario_}`)

console.log("Rational Collection");
let aux3: Rational = rationalCollection.getArithmeticable(0)
let aux4: Rational = rationalCollection.getArithmeticable(1)
let val2 = aux3.add(aux4)
console.log(`Numerador: ${val2.numerador_}\nDenominador: ${val2.denominador_}`)