import { PrintableCollection } from "./printablecollection";

export class NumericCollectable extends PrintableCollection<number> {
  constructor(aux: number[]) {
    super(aux)
  }

  print(): void {
    let aux: string = ""
    this.coleccion_.forEach((x, index) => {
      aux += `${index} => ${x}\n`
    })
    console.log(aux)
  }  
}