import { PrintableCollection } from "./printablecollection";

export class StringCollectable extends PrintableCollection<string> {
  
  constructor(aux: string[]) {
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