import { Arithmeticable } from "./arithmeticable.js";

/**
 * Clase que representa a un racional e implementa la interfaz Arithmeticable
 */
export class Rational implements Arithmeticable<Rational> {
  private numerador_: number
  private denominador_: number

  /**
   * Constructor de la clase Racional
   * 
   * @param numerador - Numerador del racional
   * @param denominador - Denominador del racional
   */
  constructor(numerador: number, denominador: number) {
    this.numerador_ = numerador
    this.denominador_ = denominador
  }

  /**
   * Getter del numerador
   */
  get numerador() {
    return this.numerador_
  }

  /**
   * Getter del denominador
   */
  get denominador() {
    return this.denominador_
  }

  /**
   * Setter del numerador
   */
  set numerador(numerador: number) {
    this.numerador_ = numerador
  }

  /**
   * Setter del denominador
   */
  set denominador(denominador: number) {
    this.denominador_ = denominador
  }

  /**
   * Método que suma dos racionales
   * 
   * @param val - Racional al que se le aplicara la operacion
   * @returns Resultado de la suma
   */
  add(val: Rational): Rational {
    let aux_den = this.denominador_ * val.denominador

    let aux_a = aux_den * this.numerador
    let aux_b = aux_den * val.numerador

    return new Rational((aux_a + aux_b), aux_den)
  }

  /**
   * Método que resta dos racionales
   * 
   * @param val - Racional al que se le aplicara la operacion
   * @returns Resultado de la resta
   */
  substract(val: Rational): Rational {
    let aux_den = this.denominador_ * val.denominador

    let aux_a = aux_den * this.numerador
    let aux_b = aux_den * val.numerador

    return new Rational((aux_a - aux_b), aux_den)
  }

  /**
   * Método que multiplica dos racionales
   * 
   * @param val - Racional al que se le aplicara la operacion
   * @returns Resultado de la multiplicacion
   */
  multiply(val: Rational): Rational {
    let aux_num = this.numerador * val.numerador
    let aux_den = this.denominador * val.denominador

    return new Rational(aux_num, aux_den)
  }

  /**
   * Método que divide dos racionales
   * 
   * @param val - Racional al que se le aplicara la operacion
   * @returns Resultado de la division
   */
  divide(val: Rational): Rational {
    let aux_num = this.numerador * val.denominador
    let aux_den = this.denominador * val.numerador

    return new Rational(aux_num, aux_den)
  }
}