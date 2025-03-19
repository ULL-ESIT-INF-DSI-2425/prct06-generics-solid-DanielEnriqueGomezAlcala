import { Rational } from './rationalnumber.js'
import { Complex } from './complexnumber.js'

/**
 * Clase que une las funcionalidades de complex y rational
 */
export class AdapterRational extends Complex {
  /**
   * Constructor de la clase
   * 
   * @param racional - Racional que sera adaptado
   */
  constructor(private racional: Rational) {
    super(racional.numerador / racional.denominador, 0)
  }
}