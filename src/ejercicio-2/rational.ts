import { Arithmeticable } from "./arithmeticable";

export class Rational implements Arithmeticable<Rational> {
  numerador_: number
  denominador_: number

  constructor(numerador: number, denominador: number) {
    this.numerador_ = numerador
    this.denominador_ = denominador
  }

  add(other: Rational): Rational {
    const numerador = this.numerador_ * other.denominador_ + other.numerador_ * this.denominador_;
    const denominador = this.denominador_ * other.denominador_;
    return new Rational(numerador, denominador);
  }

  substract(other: Rational): Rational {
    const numerador = this.numerador_ * other.denominador_ - other.numerador_ * this.denominador_;
    const denominador = this.denominador_ * other.denominador_;
    return new Rational(numerador, denominador);
  }

  multiply(other: Rational): Rational {
    const numerador = this.numerador_ * other.numerador_;
    const denominador = this.denominador_ * other.denominador_;
    return new Rational(numerador, denominador);
  }

  divide(other: Rational): Rational {
    const numerador = this.numerador_ * other.denominador_;
    const denominador = this.denominador_ * other.numerador_;
    return new Rational(numerador, denominador);
  }
}