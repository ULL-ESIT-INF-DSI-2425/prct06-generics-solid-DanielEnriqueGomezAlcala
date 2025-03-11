import { Arithmeticable } from "./arithmeticable";

export class Complex implements Arithmeticable<Complex> {
  real_: number;
  imaginario_: number;

  constructor(real: number, imaginario: number) {
    this.real_ = real;
    this.imaginario_ = imaginario;
  }

  add(val: Complex): Complex {
    let aux: Complex = new Complex(this.real_ + val.real_, this.imaginario_ + val.imaginario_);
    return aux;
  }

  substract(val: Complex): Complex {
    let aux: Complex = new Complex(this.real_ - val.real_, this.imaginario_ - val.imaginario_);
    return aux;
  }

  multiply(val: Complex): Complex {
    let realPart = this.real_ * val.real_ - this.imaginario_ * val.imaginario_;
    let imaginaryPart = this.real_ * val.imaginario_ + this.imaginario_ * val.real_;
    return new Complex(realPart, imaginaryPart);
  }

  divide(val: Complex): Complex {
    let denominator = val.real_ * val.real_ + val.imaginario_ * val.imaginario_;
    let realPart = (this.real_ * val.real_ + this.imaginario_ * val.imaginario_) / denominator;
    let imaginaryPart = (this.imaginario_ * val.real_ - this.real_ * val.imaginario_) / denominator;
    return new Complex(realPart, imaginaryPart);
  }
}