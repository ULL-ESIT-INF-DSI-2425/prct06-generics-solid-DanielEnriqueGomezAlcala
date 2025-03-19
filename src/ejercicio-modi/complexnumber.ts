import { Arithmeticable } from "./arithmeticable.js";

/**
 * Clase que representa a un complejo e implementa Arithmeticable
 */
export class Complex implements Arithmeticable<Complex> {
  private real_: number
  private imaginario_: number

  /**
   * Constructor de la clase Complex
   * 
   * @param real - Parte real del numero complejo
   * @param imaginario - Parte imaginaria del numero complejo
   */
  constructor(real: number, imaginario: number) {
    this.real_ = real
    this.imaginario_ = imaginario
  }

  /**
   * Getter de la parte real
   */
  get real() {
    return this.real_
  }

  /**
   * Getter de la parte imaginaria
   */
  get imaginario() {
    return this.imaginario_
  }

  /**
   * Setter de la parte real
   */
  set real(real: number) {
    this.real_ = real
  }

  /**
   * Setter de la parte imaginaria
   */
  set imaginario(imaginario: number) {
    this.imaginario_ = imaginario
  }

  /**
   * Metodo que suma dos complejos
   * 
   * @param val - Complejo que se suma
   * @returns La suma de complejos
   */
  add(val: Complex): Complex {
    let aux: Complex = new Complex(this.real + val.real, this.imaginario + val.imaginario)
    return aux
  }

  /**
   * Método que resta dos complejos
   * 
   * @param val - Complejo que se resta
   * @returns La resta de complejos
   */
  substract(val: Complex): Complex {
    let aux: Complex = new Complex(this.real - val.real, this.imaginario - val.imaginario)
    return aux
  }

  /**
   * Método que multiplica dos complejos
   * 
   * @param val - Complejo que se multiplica
   * @returns La multiplicacion de complejos
   */
  multiply(val: Complex): Complex {
    let parte_real: number = this.real * val.real - this.imaginario * val.imaginario
    let parte_imaginaria: number = this.real * val.imaginario + this.imaginario * val.real

    return new Complex(parte_real, parte_imaginaria)
  }

  /**
   * Método que divide dos complejos
   * 
   * @param val - Complejo que se divide
   * @returns La división de complejos
   */
  divide(val: Complex): Complex {
    let denominador = val.real * val.real + val.imaginario * val.imaginario
    let parte_real = (this.real * val.real + this.imaginario * val.imaginario) / denominador
    let parte_imaginario = (this.imaginario * val.real - this.real * val.imaginario) / denominador
    return new Complex(parte_real, parte_imaginario)
  }
}